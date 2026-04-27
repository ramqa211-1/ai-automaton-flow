import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Tag, BookOpen, Mic, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ─── CONFIRMED POSTS (real content scraped from LinkedIn) ─────────────────────
const featuredPosts = [
  {
    id: 1,
    emoji: "🤖",
    category: "Claude Code & Cursor",
    tags: ["Claude Code", "Cursor IDE", "AI Models"],
    type: "מאמר",
    typeIcon: BookOpen,
    readTime: "3 דק׳ קריאה",
    title: "Claude Opus vs Sonnet 4.5 — מי עדיף בקידוד?",
    subtitle: "השוואה מעשית על פרויקט אמיתי בתוך Cursor IDE",
    description:
      "האם Opus 4.5 שווה את המחיר הגבוה? השוויתי בין שני המודלים על חוקי ארכיטקטורה אמיתיים בתוך Cursor — והתוצאות הפתיעו אותי. המסקנה שלי: ה-AI שלך טוב רק כמו ה-Context שאתה נותן לו. זה לא המודל שקובע — זה ה-Prompt.",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7450461100241903616/",
    bgGradient: "from-violet-50 to-pink-50",
    accentColor: "#7c3aed",
  },
  {
    id: 2,
    emoji: "🎬",
    category: "Vision AI & כלים",
    tags: ["Vision AI", "AI Video", "מדריך"],
    type: "ניסוי + מדריך",
    typeIcon: Play,
    readTime: "5 דק׳ קריאה",
    title: "יצרתי סרטון Hollywood-style עם תמונה אחת שלי",
    subtitle: "ניסוי AI ויזואלי — מה שקרה הפתיע אותי",
    description:
      "ניסוי: לקחתי תמונה אחת שלי ויצרתי ממנה סרטון בסגנון Hollywood עם AI. התהליך היה מרתק — וגם ה״סלפי הכוכבי״ שיצא. בפוסט תמצא מדריך מפורט שלב-שלב לכל מי שרוצה לנסות בעצמו, כולל כלים חינמיים.",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7408491181237485568/",
    bgGradient: "from-rose-50 to-orange-50",
    accentColor: "#e11d48",
  },
  {
    id: 3,
    emoji: "🎤",
    category: "n8n & הרצאות",
    tags: ["n8n", "AI Agents", "נשים בהייטק"],
    type: "הרצאה",
    typeIcon: Mic,
    readTime: "4 דק׳ קריאה",
    title: "הרצאה לנשים בהייטק — בניית AI Agent בשידור חי עם n8n",
    subtitle: "קהילת נשים בהייטק, יעל חדד — הכירו את עולם ה-Agents",
    description:
      'הרצאה מרתקת לקהילת נשים בהייטק בשיתוף יעל חדד. בנינו יחד AI Agent אמיתי בשידור חי עם n8n — ללא קוד, ללא ניסיון טכני. הקהל בנה Agents שרצים לבד ועושים דברים אמיתיים. זה מה שאוטומציה נראית כשמסבירים אותה נכון.',
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7383044528456318976/",
    bgGradient: "from-emerald-50 to-teal-50",
    accentColor: "#059669",
  },
];

// ─── ADDITIONAL POSTS (external links — full content inside each platform) ─────
const morePosts = [
  {
    emoji: "⚡",
    category: "n8n",
    title: "n8n מאפס — מדריך מלא לבניית אוטומציה ראשונה",
    platform: "Facebook",
    platformColor: "text-[#1877F2]",
    url: "https://www.facebook.com/share/p/1Bmt7P6Q6t/",
  },
  {
    emoji: "🧠",
    category: "Prompt Engineering",
    title: "Prompt Engineering מעשי — מה שבאמת עובד ב-2025",
    platform: "Facebook",
    platformColor: "text-[#1877F2]",
    url: "https://www.facebook.com/share/p/18vPmFDtYs/",
  },
  {
    emoji: "🏢",
    category: "Enterprise AI",
    title: "AI Agents בחברות ביטוח — מקרה בוחן מלא",
    platform: "Facebook",
    platformColor: "text-[#1877F2]",
    url: "https://www.facebook.com/share/p/1EhfsFopbh/",
  },
  {
    emoji: "🔗",
    category: "MCP",
    title: "MCP + Playwright: עתיד האוטומציה הויזואלית",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "https://www.linkedin.com/in/ram-walas-tal-b1830770/recent-activity/all/",
  },
  {
    emoji: "👁️",
    category: "Vision AI",
    title: "GPT-4 Vision + Playwright: בדיקות UI מונחות AI",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "https://www.linkedin.com/in/ram-walas-tal-b1830770/recent-activity/all/",
  },
];

const allCategories = ["הכל", "Claude Code & Cursor", "Vision AI & כלים", "n8n & הרצאות", "Prompt Engineering", "Enterprise AI", "MCP"];

export default function Resources() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filteredFeatured =
    activeCategory === "הכל"
      ? featuredPosts
      : featuredPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* ── Minimal top bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-inter text-sm text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            חזרה לאתר
          </button>
          <span className="font-inter font-black text-sm uppercase tracking-widest text-foreground">
            Ram Walastal
          </span>
          <a
            href="https://linktr.ee/ram7walas"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-primary hover:underline"
          >
            Linktree ↗
          </a>
        </div>
      </header>

      {/* ── Page hero ── */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block font-mono text-xs text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-5">
            מאגר ידע
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-foreground font-inter mb-4 leading-tight">
            מדריכים, הרצאות וחומרי העשרה
          </h1>
          <div className="kinetic-line max-w-xs mx-auto mb-6" />
          <p className="font-mono text-sm text-foreground/55 max-w-xl mx-auto leading-relaxed">
            כל מה שכתבתי ודיברתי על AI, אוטומציה וכלי פיתוח מתקדמים — כולל Claude Code, n8n, Vision AI ועוד.
            תוכן שנוצר מניסיון אמיתי, לא תיאוריה.
          </p>
        </motion.div>
      </section>

      {/* ── Category filter ── */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white/60 border-primary/15 text-foreground/60 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Featured posts (full cards) ── */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <AnimatePresence mode="popLayout">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatured.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -5 }}
                className="glass-bento rounded-3xl overflow-hidden gradient-border electric-glow-hover group flex flex-col cursor-pointer"
              >
                {/* Card top banner */}
                <div className={`bg-gradient-to-br ${post.bgGradient} p-6 flex items-start justify-between`}>
                  <span className="text-4xl">{post.emoji}</span>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-mono text-xs text-primary bg-white/70 border border-primary/20 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-foreground/50">
                      <span className="font-mono text-xs">{post.readTime}</span>
                      <post.typeIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div className="flex items-center justify-end gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 font-mono text-xs text-foreground/50 bg-foreground/5 border border-border px-2 py-0.5 rounded-full"
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-inter font-bold text-base text-foreground text-right leading-snug group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="font-mono text-xs text-foreground/50 text-right leading-relaxed">
                    {post.subtitle}
                  </p>
                  <p className="font-mono text-xs text-foreground/65 text-right leading-relaxed flex-1">
                    {post.description}
                  </p>

                  <div className="pt-3 border-t border-primary/10 flex items-center justify-between">
                    <ExternalLink className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className={`font-mono text-xs font-semibold ${post.platformColor}`}>
                      {post.platform} ↗
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </AnimatePresence>

        {filteredFeatured.length === 0 && (
          <div className="text-center py-16 font-mono text-sm text-foreground/40">
            אין תוכן בקטגוריה זו עדיין — בקרוב יתווסף עוד תוכן!
          </div>
        )}
      </section>

      {/* ── More posts (compact link cards) ── */}
      {activeCategory === "הכל" && (
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-right"
          >
            <h2 className="font-inter font-bold text-xl text-foreground">עוד תוכן מומלץ</h2>
            <div className="kinetic-line max-w-xs mt-1" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {morePosts.map((post, i) => (
              <motion.a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="glass-bento rounded-2xl p-4 flex flex-col gap-3 gradient-border electric-glow-hover group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <ExternalLink className={`w-3.5 h-3.5 ${post.platformColor} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/15 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="text-2xl text-right">{post.emoji}</div>
                <h3 className="font-inter font-semibold text-xs text-foreground text-right leading-snug group-hover:text-primary transition-colors duration-200 flex-1">
                  {post.title}
                </h3>
                <div className="pt-2 border-t border-primary/10">
                  <span className={`font-mono text-xs font-semibold ${post.platformColor}`}>
                    {post.platform} ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA bar ── */}
      <section className="bg-primary/5 border-t border-primary/10 py-14 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-inter font-bold text-xl text-foreground mb-2">
            רוצה לשמוע על התוכן הבא לפני כולם?
          </h3>
          <p className="font-mono text-xs text-foreground/50 mb-6">
            עקוב ב-LinkedIn לעדכונים שוטפים — מדריכים, ניסויים ותובנות ישירות מהשטח
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/ram-walas-tal-b1830770"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-inter font-semibold text-sm hover:bg-accent transition-colors electric-glow"
            >
              LinkedIn →
            </a>
            <a
              href="https://linktr.ee/ram7walas"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-bento border border-primary/30 text-primary px-6 py-2.5 rounded-full font-inter font-semibold text-sm hover:border-primary/60 transition-all duration-200"
            >
              Linktree ↗
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-foreground/5 border-t border-border py-8 px-6 text-center">
        <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
          © 2025 Ram Walastal. AI-Driven Automation.
        </p>
      </footer>
    </div>
  );
}
