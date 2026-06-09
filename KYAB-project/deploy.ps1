#!/usr/bin/env pwsh

$ErrorActionPreference = "Stop"

# Colors
$Green = "`e[32m"
$Red = "`e[31m"
$Yellow = "`e[33m"
$Reset = "`e[0m"

$PI_USER = "ramqa"
$PI_IP = "100.108.78.101"
$PI_PATH = "~/projects/ai-fit-finder"
$APP_NAME = "ai-fit-finder"
$LIVE_URL = "https://know-your-ai-business.ramwalast.com/api/admin/me"

Write-Host "${Yellow}═══════════════════════════════════════════${Reset}"
Write-Host "${Yellow}  AI-Fit Finder Deployment Script${Reset}"
Write-Host "${Yellow}═══════════════════════════════════════════${Reset}`n"

# Step 1: Verify directory
Write-Host "${Yellow}1. Verifying project directory...${Reset}"
if (-not (Test-Path "web/vite.config.ts")) {
  Write-Host "${Red}✗ Not in ai-fit-finder root directory${Reset}"
  exit 1
}
Write-Host "${Green}✓ Correct directory${Reset}`n"

# Step 2: TypeScript check
Write-Host "${Yellow}2. Type checking...${Reset}"
Push-Location web
try {
  npx tsc --noEmit 2>&1 | Where-Object { $_ -match "error" } | ForEach-Object {
    Write-Host "${Red}✗ TypeScript error: $_${Reset}"
    exit 1
  }
  Write-Host "${Green}✓ Type check passed${Reset}`n"
} finally {
  Pop-Location
}

# Step 3: Build
Write-Host "${Yellow}3. Building web app...${Reset}"
Push-Location web
try {
  npm run build 2>&1 | Tee-Object -Variable buildOutput | Out-Null
  if ($LASTEXITCODE -ne 0) {
    Write-Host "${Red}✗ Build failed${Reset}"
    exit 1
  }
  Write-Host "${Green}✓ Build complete${Reset}`n"
} finally {
  Pop-Location
}

# Step 4: Git commit and push
Write-Host "${Yellow}4. Committing and pushing...${Reset}"
git add -A
$hasChanges = git diff --cached --quiet; $changed = $LASTEXITCODE -ne 0

if ($changed) {
  git commit -m "feat: integrate mobile-view video in onboarding modal with responsive lightbox"
  git push origin main
  Write-Host "${Green}✓ Pushed to GitHub${Reset}`n"
} else {
  Write-Host "${Yellow}→ No changes to commit${Reset}`n"
}

# Step 5: Deploy to Pi
Write-Host "${Yellow}5. Deploying to Raspberry Pi (${PI_IP})...${Reset}"

# Sync server code
Write-Host "${Yellow}   → Syncing server code...${Reset}"
tar --exclude='node_modules' --exclude='.git' --exclude='dist' -czf - server/ | `
  ssh "${PI_USER}@${PI_IP}" "cd ${PI_PATH} && tar -xzf -"

# Sync web/dist
Write-Host "${Yellow}   → Syncing web/dist...${Reset}"
tar -czf - web/dist/ | `
  ssh "${PI_USER}@${PI_IP}" "cd ${PI_PATH} && tar -xzf -"

Write-Host "${Green}✓ Files synced${Reset}`n"

# Step 6: Restart app
Write-Host "${Yellow}6. Restarting app on Pi...${Reset}"

$restartScript = @'
cd ~/projects/ai-fit-finder

# Try pm2 first
if command -v pm2 &> /dev/null; then
  pm2 restart ai-fit-finder 2>/dev/null || pm2 start npm --name ai-fit-finder -- run dev
  echo "App restarted via pm2"
else
  # Fallback: kill and restart
  pkill -f "node.*8787" || true
  sleep 1
  npm run dev > /tmp/ai-fit-finder.log 2>&1 &
  echo "App restarted manually"
fi

sleep 2
if curl -s http://localhost:8787/api/config > /dev/null 2>&1; then
  echo "✓ App responding"
fi
'@

ssh "${PI_USER}@${PI_IP}" $restartScript

Write-Host "${Green}✓ App restarted${Reset}`n"

# Step 7: Live verification
Write-Host "${Yellow}7. Verifying deployment...${Reset}"
try {
  $response = Invoke-WebRequest -Uri $LIVE_URL -SkipCertificateCheck -ErrorAction SilentlyContinue
  $httpCode = $response.StatusCode
} catch {
  $httpCode = $_.Exception.Response.StatusCode.Value
}

if ($httpCode -eq 401 -or $httpCode -eq 200) {
  Write-Host "${Green}✓ Live API responding (HTTP ${httpCode})${Reset}`n"
  Write-Host "${Green}═══════════════════════════════════════════${Reset}"
  Write-Host "${Green}  Deployment complete! 🚀${Reset}"
  Write-Host "${Green}═══════════════════════════════════════════${Reset}"
  Write-Host "`nAccess admin dashboard: https://know-your-ai-business.ramwalast.com/admin"
} else {
  Write-Host "${Yellow}⚠ API returned HTTP ${httpCode} (may still be starting)${Reset}`n"
}
