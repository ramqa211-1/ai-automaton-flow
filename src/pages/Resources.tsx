import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  BookOpen,
  Mic,
  Play,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Zap,
  Search,
  RefreshCw,
  Database,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const featuredPosts = [
  {
    id: 1,
    emoji: "🤖",
    category: "Claude Code & Cursor",
    categoryColor: "#00eefc",
    tags: ["Claude Code", "Cursor IDE", "AI Models"],
    type: "מאמר",
    typeIcon: BookOpen,
    readTime: "3 דק׳ קריאה",
    title: "Claude Opus vs Sonnet — ה-AI שלך רק טוב כמו ה-Context שנותן לו",
    subtitle: "השוואה מעשית על פרויקט אמיתי בתוך Cursor IDE",
    description:
      "האם Opus שווה את המחיר הגבוה פי 5? השוויתי בין שני המודלים על חוקי ארכיטקטורה אמיתיים בתוך Cursor — והתוצאות הפתיעו אותי. המסקנה: ה-AI שלך טוב רק כמו ה-Context שאתה נותן לו. זה לא המודל שקובע — זה ה-Prompt.",
    takeaways: [
      "הבדל הביצועים בין Opus ל-Sonnet קטן ב-90% מהמקרים כשה-Context ברור",
      "CLAUDE.md עם חוקי ארכיטקטורה חד-משמעיים = Sonnet מתנהג כמו Opus",
      "כדאי להשקיע בבניית Context איכותי לפני שמשדרגים מודל",
      "Cursor + Sonnet + Context טוב עולה פחות ועושה יותר",
    ],
    image: `${base}images/media-posts/model input.png`,
    platform: "LinkedIn",
    platformColor: "#0A66C2",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7450461100241903616/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7450461100241903616",
    stat: { value: "5×", label: "הבדל מחיר Opus/Sonnet" },
    accentColor: "#00eefc",
  },
  {
    id: 2,
    emoji: "🎬",
    category: "Vision AI & כלים",
    categoryColor: "#2AFF8A",
    tags: ["Vision AI", "AI Video", "מדריך"],
    type: "ניסוי + מדריך",
    typeIcon: Play,
    readTime: "5 דק׳ קריאה",
    title: "יצרתי סרטון Hollywood-style עם תמונה אחת שלי",
    subtitle: "ניסוי AI ויזואלי — מדריך שלב-אחר-שלב לכלים חינמיים",
    description:
      "ניסוי: לקחתי תמונה אחת שלי ויצרתי ממנה סרטון בסגנון Hollywood עם AI. התהליך היה מרתק — וגם ה׳סלפי הכוכבי׳ שיצא. בפוסט מדריך מפורט לכל מי שרוצה לנסות בעצמו, כולל כלים חינמיים.",
    takeaways: [
      "Kling AI ו-RunwayML יוצרים תנועה משכנעת מתמונה סטטית אחת",
      "ElevenLabs מוסיף קריינות בעברית ב-2 דקות ובאיכות גבוהה",
      "Canva Pro מאחד הכל לפורמט שמוכן ל-LinkedIn/Instagram",
      "כל התהליך אפשרי ב-0 שקלים עם tier החינמי של הכלים",
    ],
    image: `${base}images/media-posts/video ai.png`,
    platform: "LinkedIn",
    platformColor: "#0A66C2",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7408491181237485568/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7408491181237485568",
    stat: { value: "1 תמונה", label: "לסרטון מלא" },
    accentColor: "#2AFF8A",
  },
  {
    id: 3,
    emoji: "🎤",
    category: "n8n & הרצאות",
    categoryColor: "#2AFF8A",
    tags: ["n8n", "AI Agents", "נשים בהייטק"],
    type: "הרצאה",
    typeIcon: Mic,
    readTime: "4 דק׳ קריאה",
    title: "הרצאה לנשים בהייטק — בניית AI Agent בשידור חי עם n8n",
    subtitle: "קהילת נשים בהייטק, יעל חדד — בנינו Agent אמיתי יחד",
    description:
      'הרצאה לקהילת נשים בהייטק בשיתוף יעל חדד. בנינו AI Agent אמיתי בשידור חי עם n8n — ללא קוד, ללא ניסיון טכני. הקהל יצא עם Agents שרצים לבד ועושים דברים אמיתיים.',
    takeaways: [
      "n8n מאפשר בניית Agent מפעיל תוך 20 דקות ללא שורת קוד אחת",
      "הדגמנו Agent שקורא מייל, מסכם ושולח ל-WhatsApp אוטומטית",
      "הכלי חינמי לחלוטין ב-self-host — מתאים לכל עסק",
      "האתגר האמיתי הוא לא הטכנולוגיה — אלא לדעת מה לאוטמט",
    ],
    image: `${base}images/media-posts/vibehib.png`,
    platform: "LinkedIn",
    platformColor: "#0A66C2",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7383044528456318976/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7383044528456318976",
    stat: { value: "20 דק׳", label: "לבנות Agent ראשון" },
    accentColor: "#2AFF8A",
  },
  {
    id: 4,
    emoji: "🎯",
    category: "Cursor IDE",
    categoryColor: "#00eefc",
    tags: ["Cursor IDE", "AI Coding", "מדריך"],
    type: "מדריך",
    typeIcon: BookOpen,
    readTime: "6 דק׳ קריאה",
    title: "Cursor IDE — מדריך מלא לפיתוח עם AI שכותב עבורך",
    subtitle: "מה זה Cursor, למה זה שינה את ה-workflow שלי ואיך להתחיל",
    description:
      "Cursor IDE הוא VS Code עם AI מובנה שמבין את כל הפרויקט שלך — לא רק את הקובץ הנוכחי. כתיבת קוד, refactoring, debugging — הכל עם AI שיודע את ה-context. מדריך מלא מהתקנה ועד טיפים מתקדמים.",
    takeaways: [
      "Cursor Agent מבצע שינויים בכמה קבצים בו-זמנית עם הבנת context מלאה",
      "Composer mode = תאר את הפיצ׳ר, Cursor כותב את כל הקוד",
      "⌘K על בלוק קוד = refactor/explain/fix ללא Context switching",
      "CLAUDE.md / .cursorrules = חוקי ארכיטקטורה שמובנים לכל session",
    ],
    platform: "LinkedIn",
    platformColor: "#0A66C2",
    url: "https://www.linkedin.com/in/ram-walas-tal-b1830770/recent-activity/all/",
    embedUrl: null,
    stat: { value: "10×", label: "מהירות פיתוח ממוצעת" },
    accentColor: "#00eefc",
  },
  {
    id: 5,
    emoji: "📋",
    category: "מדריך",
    categoryColor: "#2AFF8A",
    tags: ["אוטומציה", "עסקים", "n8n"],
    type: "רשימה",
    typeIcon: BookOpen,
    readTime: "4 דק׳ קריאה",
    title: "5 האוטומציות שכל עסק חייב להפעיל ב-2026",
    subtitle: "מה חוסך הכי הרבה זמן? מניסיון של עשרות לקוחות",
    description:
      "מניסיון עם עשרות ארגונים — 5 האוטומציות שמחזירות ROI מהיר ביותר: ניהול לידים, תמלול פגישות, דוחות שבועיים, תגובות ראשוניות ללקוחות, ועדכוני סטטוס פנים-ארגוניים.",
    takeaways: [
      "אוטומציית ניהול לידים חוסכת בממוצע 3 שעות ביום לצוות מכירות",
      "תמלול פגישות + סיכום אוטומטי ב-n8n + Whisper = 0 עבודה ידנית",
      "דוח שבועי אוטומטי ל-WhatsApp של המנהל — 15 דקות הגדרה חד-פעמית",
      "ה-ROI הממוצע על אוטומציה אחת = החזר תוך שבועיים",
    ],
    platform: "Facebook",
    platformColor: "#1877F2",
    url: "https://www.facebook.com/share/p/18vPmFDtYs/",
    embedUrl: null,
    stat: { value: "2 שבועות", label: "החזר ROI ממוצע" },
    accentColor: "#2AFF8A",
  },
  {
    id: 6,
    emoji: "🏢",
    category: "Enterprise AI",
    categoryColor: "#00eefc",
    tags: ["Enterprise", "ביטוח", "AI Agents"],
    type: "מקרה בוחן",
    typeIcon: BookOpen,
    readTime: "5 דק׳ קריאה",
    title: "AI Agents בחברות ביטוח — מקרה בוחן מלא",
    subtitle: "הטמעת AI בתהליך טיפול בתביעות — חיסכון של 60% בזמן",
    description:
      "מקרה בוחן אמיתי מחברת ביטוח: AI Agent שמטפל בתביעות ראשוניות, בודק מסמכים ושולח תגובה מותאמת — ללא מגע יד אדם. הפחתה של 60% בזמן טיפול ממוצע.",
    takeaways: [
      "AI Agent + OCR קורא מסמכי תביעה ומזהה שדות ב-2 שניות",
      "GPT-4 מסווג תביעות לפי עדיפות ומנתב לנציג הנכון",
      "חיסכון ממוצע: 4 שעות עבודה ידנית לכל 10 תביעות",
      "ROI הוחזר תוך 6 שבועות מההטמעה",
    ],
    platform: "Facebook",
    platformColor: "#1877F2",
    url: "https://www.facebook.com/share/p/1EhfsFopbh/",
    embedUrl: null,
    stat: { value: "60%", label: "קיצור זמן טיפול" },
    accentColor: "#00eefc",
  },
];

const allCategories = [
  "הכל",
  "Claude Code & Cursor",
  "Vision AI & כלים",
  "n8n & הרצאות",
  "Cursor IDE",
  "מדריך",
  "Enterprise AI",
];

const NV_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

  .nv-root {
    background: #111318;
    color: #e2e2e8;
    min-height: 100vh;
  }
  .nv-circuit {
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42,255,138,0.06) 0%, transparent 60%),
      linear-gradient(90deg, rgba(42,255,138,0.04) 1px, transparent 1px),
      linear-gradient(rgba(42,255,138,0.04) 1px, transparent 1px);
    background-size: 100% 100%, 80px 80px, 80px 80px;
  }
  .nv-glass {
    background: rgba(14, 17, 22, 0.65);
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);
  }
  .nv-glass-bright {
    background: rgba(22, 27, 34, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  .nv-title { font-family: 'Space Grotesk', sans-serif; }
  .nv-label {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11px;
    letter-spacing: 0.1em;
    font-weight: 500;
    text-transform: uppercase;
  }
  .nv-streak {
    background: linear-gradient(90deg, transparent 0%, rgba(42,255,138,0.45) 50%, transparent 100%);
    height: 1px;
  }
  .nv-card-border {
    border: 1px solid rgba(59,75,61,0.7);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .nv-card-border:hover {
    border-color: rgba(42,255,138,0.45) !important;
    box-shadow: 0 0 32px rgba(42,255,138,0.08);
  }
  .nv-card-border-cyan:hover {
    border-color: rgba(0,238,252,0.45) !important;
    box-shadow: 0 0 32px rgba(0,238,252,0.08);
  }
  .nv-btn-primary {
    background: linear-gradient(135deg, #2AFF8A 0%, #00eefc 100%);
    color: #0A0C10;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11px;
    letter-spacing: 0.1em;
    font-weight: 600;
    text-transform: uppercase;
    transform: skewX(-8deg);
    transition: box-shadow 0.3s ease;
  }
  .nv-btn-primary:hover {
    box-shadow: 0 0 20px rgba(42,255,138,0.5), 0 0 40px rgba(42,255,138,0.2);
  }
  .nv-btn-primary span { display: inline-block; transform: skewX(8deg); }
  .nv-btn-ghost {
    border: 1px solid rgba(42,255,138,0.3);
    color: #2AFF8A;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11px;
    letter-spacing: 0.08em;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  .nv-btn-ghost:hover {
    border-color: rgba(42,255,138,0.7);
    background: rgba(42,255,138,0.08);
    box-shadow: 0 0 15px rgba(42,255,138,0.2);
  }
  .nv-top-beam {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(42,255,138,0.6), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .nv-card-border:hover .nv-top-beam { opacity: 1; }
  .nv-filter-active {
    background: rgba(42,255,138,0.12);
    border-color: rgba(42,255,138,0.5) !important;
    color: #2AFF8A !important;
  }
  .nv-embed-toggle {
    border: 1px solid rgba(10,102,194,0.3);
    color: #60a5fa;
    transition: all 0.2s;
  }
  .nv-embed-toggle:hover {
    background: rgba(10,102,194,0.1);
  }
`;

function PostCard({ post, index }: { post: (typeof featuredPosts)[0]; index: number }) {
  const [showEmbed, setShowEmbed] = useState(false);
  const isCyan = post.accentColor === "#00eefc";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
      className={`nv-glass-bright nv-card-border ${isCyan ? "nv-card-border-cyan" : ""} rounded-[4px] overflow-hidden flex flex-col relative`}
    >
      {/* Top beam on hover */}
      <div className="nv-top-beam" />

      {/* Corner speed motif */}
      <div className="absolute top-3 left-3 opacity-[0.08] pointer-events-none select-none">
        <Zap className="w-10 h-10" style={{ color: post.accentColor }} />
      </div>

      <div className="p-6 flex flex-col flex-1 gap-5">
        {/* Category chip + icon */}
        <div className="flex items-center justify-between">
          <post.typeIcon className="w-4 h-4" style={{ color: "rgba(132,149,133,0.7)" }} />
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] nv-label"
            style={{
              color: post.accentColor,
              background: `${post.accentColor}15`,
              border: `1px solid ${post.accentColor}30`,
            }}
          >
            <span className="inline-block w-3 h-[1.5px]" style={{ background: post.accentColor }} />
            {post.category}
          </div>
        </div>

        {/* Title */}
        <h3
          className="nv-title text-right leading-snug transition-colors duration-200"
          style={{ fontSize: "17px", fontWeight: 600, lineHeight: 1.3, color: "#e2e2e8" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = post.accentColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#e2e2e8")}
        >
          {post.title}
        </h3>

        {/* Stat badge */}
        <div className="flex justify-end">
          <div
            className="px-3 py-2 rounded-[2px] text-right"
            style={{ background: `${post.accentColor}12`, border: `1px solid ${post.accentColor}25` }}
          >
            <div className="nv-title font-bold text-xl leading-none" style={{ color: post.accentColor }}>
              {post.stat.value}
            </div>
            <div className="nv-label mt-0.5" style={{ color: "rgba(186,203,185,0.7)", letterSpacing: "0.05em" }}>
              {post.stat.label}
            </div>
          </div>
        </div>

        {/* Streak divider */}
        <div className="nv-streak" style={{ background: `linear-gradient(90deg, transparent, ${post.accentColor}40, transparent)` }} />

        {/* Description */}
        <p className="text-right leading-relaxed" style={{ color: "#bacbb9", fontSize: "13.5px", fontFamily: "Inter, sans-serif" }}>
          {post.description}
        </p>

        {/* Post image */}
        {"image" in post && post.image && (
          <div
            className="overflow-hidden rounded-[2px] -mx-1"
            style={{ border: `1px solid ${post.accentColor}25` }}
          >
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ height: "200px", filter: "brightness(0.88) contrast(1.05)" }}
            />
          </div>
        )}

        {/* Takeaways */}
        <div
          className="rounded-[2px] p-4 space-y-2.5"
          style={{ background: `${post.accentColor}08`, border: `1px solid ${post.accentColor}18` }}
        >
          <div className="flex items-center justify-end gap-2 mb-3">
            <span className="nv-label" style={{ color: post.accentColor }}>תובנות מרכזיות</span>
            <Lightbulb className="w-3.5 h-3.5" style={{ color: post.accentColor }} />
          </div>
          {post.takeaways.map((t, idx) => (
            <div key={idx} className="flex items-start justify-end gap-2 text-right">
              <p style={{ color: "#bacbb9", fontSize: "12.5px", fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}>{t}</p>
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: post.accentColor }} />
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex items-center justify-end gap-1.5 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-2 py-0.5 rounded-[2px]"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.08em",
                color: "rgba(132,149,133,0.8)",
                background: "rgba(59,75,61,0.3)",
                border: "1px solid rgba(59,75,61,0.6)",
              }}
            >
              <span className="inline-block w-1.5 h-[1px] bg-current" />
              {tag}
            </span>
          ))}
        </div>

        {/* Embed toggle */}
        {post.embedUrl && (
          <div>
            <button
              onClick={() => setShowEmbed(!showEmbed)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-[2px] nv-embed-toggle"
            >
              <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "11px", letterSpacing: "0.08em" }}>
                {showEmbed ? "סגור פוסט" : "צפה בפוסט המקורי LinkedIn"}
              </span>
              {showEmbed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <AnimatePresence>
              {showEmbed && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden mt-3"
                >
                  <iframe
                    src={post.embedUrl}
                    height="400"
                    width="100%"
                    className="rounded-[2px]"
                    style={{ border: "1px solid rgba(59,75,61,0.5)" }}
                    title={post.title}
                    allowFullScreen
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* External link */}
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between pt-3 transition-opacity hover:opacity-70"
          style={{ borderTop: "1px solid rgba(59,75,61,0.5)" }}
        >
          <ExternalLink className="w-3.5 h-3.5 opacity-50" style={{ color: post.accentColor }} />
          <span
            className="nv-label flex items-center gap-1.5"
            style={{ color: post.platformColor, letterSpacing: "0.06em" }}
          >
            קרא הפוסט המלא ב-{post.platform}
            <span className="text-base leading-none">↗</span>
          </span>
        </a>
      </div>
    </motion.article>
  );
}

export default function Resources() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("הכל");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const existing = document.getElementById("nv-style");
    if (!existing) {
      const style = document.createElement("style");
      style.id = "nv-style";
      style.textContent = NV_STYLES;
      document.head.appendChild(style);
    }
    return () => {
      const el = document.getElementById("nv-style");
      if (el) el.remove();
    };
  }, []);

  const filteredPosts = featuredPosts.filter((p) => {
    const matchCat = activeCategory === "הכל" || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.title.includes(searchQuery) ||
      p.description.includes(searchQuery) ||
      p.tags.some((t) => t.includes(searchQuery));
    return matchCat && matchSearch;
  });

  const featured = featuredPosts[0];

  return (
    <div className="nv-root nv-circuit overflow-x-hidden" dir="rtl">
      {/* Large background speed motif */}
      <div
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center"
        style={{ opacity: 0.03 }}
      >
        <Zap className="text-white" style={{ width: "40vw", height: "40vw" }} />
      </div>

      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-4 nv-glass"
        style={{ borderBottom: "1px solid rgba(42,255,138,0.18)", boxShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-5">
          <div
            className="flex items-center gap-2 nv-title font-black italic tracking-tight cursor-pointer select-none"
            style={{ color: "#2AFF8A", fontSize: "18px", filter: "drop-shadow(0 0 10px rgba(42,255,138,0.55))" }}
            onClick={() => navigate("/")}
          >
            <Zap className="w-6 h-6" />
            BRAIN RAM
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "ראשי", href: "/" },
              { label: "שירותים", href: "/#services" },
              { label: "פורטפוליו", href: "/#portfolio" },
              { label: "מאמרים", href: "/resources", active: true },
              { label: "צור קשר", href: "/#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nv-label px-3 py-2 rounded-[2px] transition-all duration-200"
                style={{
                  color: item.active ? "#2AFF8A" : "rgba(186,203,185,0.7)",
                  borderBottom: item.active ? "2px solid #2AFF8A" : "2px solid transparent",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => !item.active && (e.currentTarget.style.color = "#2AFF8A")}
                onMouseLeave={(e) => !item.active && (e.currentTarget.style.color = "rgba(186,203,185,0.7)")}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {showSearch ? (
            <motion.input
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 180, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => !searchQuery && setShowSearch(false)}
              placeholder="חיפוש..."
              className="nv-title text-right text-sm outline-none rounded-[2px] px-3 py-1.5"
              style={{
                background: "rgba(42,255,138,0.07)",
                border: "1px solid rgba(42,255,138,0.3)",
                color: "#e2e2e8",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "12px",
              }}
            />
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className="p-2 rounded-full transition-all duration-200"
              style={{ color: "#2AFF8A" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(42,255,138,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => navigate("/")}
            className="nv-btn-primary px-5 py-2 rounded-[2px] flex items-center gap-2"
          >
            <span className="flex items-center gap-1.5">
              חזרה לאתר
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16">

        {/* ── PAGE HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-5 pt-6"
        >
          <div
            className="nv-label flex items-center gap-2 px-4 py-1.5 rounded-[2px]"
            style={{
              color: "#2AFF8A",
              background: "rgba(42,255,138,0.08)",
              border: "1px solid rgba(42,255,138,0.25)",
            }}
          >
            <span className="inline-block w-3 h-[1.5px] bg-[#2AFF8A]" />
            מאגר ידע
            <span className="inline-block w-3 h-[1.5px] bg-[#2AFF8A]" />
          </div>

          <h1
            className="nv-title"
            style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#f4fff1" }}
          >
            מדריכים, הרצאות וחומרי העשרה
          </h1>

          <div className="nv-streak w-48 mx-auto" />

          <p style={{ color: "#849585", fontSize: "15px", fontFamily: "Inter, sans-serif", maxWidth: 500, lineHeight: 1.7 }}>
            כל מה שכתבתי ודיברתי על AI, אוטומציה וכלי פיתוח מתקדמים.
            תוכן מניסיון אמיתי — לא תיאוריה.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-10 mt-2">
            {[
              { value: "6+", label: "מדריכים" },
              { value: "200K+", label: "קריאות" },
              { value: "50+", label: "הרצאות" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="nv-title font-bold" style={{ fontSize: "26px", color: i % 2 === 0 ? "#2AFF8A" : "#00eefc" }}>
                  {s.value}
                </div>
                <div className="nv-label mt-0.5" style={{ color: "#849585" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── FEATURED ARTICLE ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative rounded-[4px] overflow-hidden nv-glass-bright"
          style={{ border: "1px solid rgba(59,75,61,0.6)" }}
        >
          {/* Green gradient overlay top */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #2AFF8A, transparent)" }}
          />

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
            {/* Left: content */}
            <div className="flex-1 flex flex-col gap-5 text-right">
              <div className="flex items-center justify-end gap-3">
                <span style={{ fontFamily: "Space Grotesk", fontSize: "11px", color: "#849585", letterSpacing: "0.08em" }}>
                  {featured.readTime}
                </span>
                <span className="inline-block w-3 h-[1px] bg-[#2AFF8A] opacity-50" />
                <span
                  className="nv-label flex items-center gap-1.5"
                  style={{ color: "#2AFF8A" }}
                >
                  <span className="inline-block w-3 h-[1.5px] bg-[#2AFF8A]" />
                  AI Innovation
                </span>
              </div>

              <h2
                className="nv-title"
                style={{ fontSize: "clamp(20px,3vw,32px)", fontWeight: 600, lineHeight: 1.2, color: "#f4fff1" }}
              >
                {featured.title}
              </h2>

              <p
                style={{
                  color: "#bacbb9",
                  fontSize: "15px",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.7,
                  borderRight: "2px solid #2AFF8A",
                  paddingRight: "16px",
                }}
              >
                {featured.description}
              </p>

              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nv-btn-ghost self-end flex items-center gap-2 px-5 py-2.5 rounded-[2px]"
                style={{ width: "fit-content" }}
              >
                <span className="flex items-center gap-2 nv-label" style={{ letterSpacing: "0.08em" }}>
                  קרא מאמר מלא
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* Right: stat card */}
            <div
              className="rounded-[4px] p-6 flex flex-col items-center gap-3 shrink-0 min-w-[140px]"
              style={{ background: "rgba(42,255,138,0.06)", border: "1px solid rgba(42,255,138,0.2)" }}
            >
              <div className="text-4xl">{featured.emoji}</div>
              <div className="nv-title font-bold text-3xl" style={{ color: "#2AFF8A" }}>
                {featured.stat.value}
              </div>
              <div className="nv-label text-center" style={{ color: "#849585" }}>
                {featured.stat.label}
              </div>
            </div>
          </div>

          {/* Bottom speed streak */}
          <div className="nv-streak" />
        </motion.section>

        {/* ── SPEED DIVIDER ── */}
        <div className="flex items-center gap-4 w-full max-w-2xl mx-auto">
          <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(to left, rgba(42,255,138,0.35), transparent)" }} />
          <div className="flex items-center gap-2" style={{ color: "#2AFF8A" }}>
            <Zap className="w-4 h-4" />
            <Database className="w-3.5 h-3.5" style={{ color: "#00eefc" }} />
          </div>
          <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(to right, rgba(42,255,138,0.35), transparent)" }} />
        </div>

        {/* ── CONTENT FEED ── */}
        <section className="flex flex-col gap-8">
          {/* Section header + filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4" style={{ borderBottom: "1px solid rgba(59,75,61,0.5)" }}>
            <h2 className="nv-title flex items-center gap-3" style={{ fontSize: "28px", fontWeight: 600, color: "#f4fff1" }}>
              <Database className="w-6 h-6" style={{ color: "#2AFF8A" }} />
              מאמרים אחרונים
            </h2>

            {/* Category pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 justify-end"
            >
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`nv-label px-3 py-1.5 rounded-[2px] transition-all duration-200 ${activeCategory === cat ? "nv-filter-active" : ""}`}
                  style={{
                    border: "1px solid rgba(59,75,61,0.6)",
                    color: activeCategory === cat ? "#2AFF8A" : "rgba(132,149,133,0.8)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredPosts.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 nv-label"
                style={{ color: "#849585" }}
              >
                אין תוכן בקטגוריה זו עדיין — בקרוב יתווסף עוד תוכן!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Load more */}
          <div className="flex justify-center mt-4">
            <button
              className="nv-btn-ghost flex items-center gap-2 px-8 py-3 rounded-[2px]"
            >
              <span className="nv-label">טען צמתים נוספים</span>
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      </main>

      {/* ── CTA SECTION ── */}
      <section
        className="relative py-16 px-6 text-center mt-4"
        style={{ borderTop: "1px solid rgba(42,255,138,0.12)", background: "rgba(42,255,138,0.03)" }}
      >
        <div className="nv-streak w-64 mx-auto mb-8" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto flex flex-col items-center gap-4"
        >
          <h3 className="nv-title" style={{ fontSize: "22px", fontWeight: 600, color: "#f4fff1" }}>
            רוצה לשמוע על התוכן הבא לפני כולם?
          </h3>
          <p className="nv-label" style={{ color: "#849585", textTransform: "none", letterSpacing: "0.04em", fontSize: "13px" }}>
            עקוב ב-LinkedIn לעדכונים שוטפים — מדריכים, ניסויים ותובנות ישירות מהשטח
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <a
              href="https://www.linkedin.com/in/ram-walas-tal-b1830770"
              target="_blank"
              rel="noopener noreferrer"
              className="nv-btn-primary px-6 py-2.5 rounded-[2px]"
            >
              <span className="flex items-center gap-1.5">LinkedIn →</span>
            </a>
            <a
              href="https://linktr.ee/ram7walas"
              target="_blank"
              rel="noopener noreferrer"
              className="nv-btn-ghost px-6 py-2.5 rounded-[2px]"
            >
              <span className="nv-label">Linktree ↗</span>
            </a>
          </div>
        </motion.div>
        <div className="nv-streak w-64 mx-auto mt-8" />
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="w-full py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{
          background: "#0A0C10",
          borderTop: "1px solid rgba(42,255,138,0.1)",
        }}
      >
        <div className="nv-title font-bold text-base" style={{ color: "#e2e2e8" }}>
          BRAIN RAM SERVICES
        </div>
        <div className="nv-label" style={{ color: "rgba(132,149,133,0.6)" }}>
          © 2025 Ram Walastal. DATA EMERGING FROM THE VOID.
        </div>
        <nav className="flex gap-5">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ram-walas-tal-b1830770" },
            { label: "GitHub", href: "https://github.com/ramqa211-1" },
            { label: "Linktree", href: "https://linktr.ee/ram7walas" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nv-label transition-all duration-200"
              style={{ color: "rgba(132,149,133,0.6)", textDecoration: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#2AFF8A";
                e.currentTarget.style.letterSpacing = "0.18em";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(132,149,133,0.6)";
                e.currentTarget.style.letterSpacing = "0.1em";
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
