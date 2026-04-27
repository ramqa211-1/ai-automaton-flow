import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const base = import.meta.env.BASE_URL;
import {
  ExternalLink,
  ArrowRight,
  Tag,
  BookOpen,
  Mic,
  Play,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const featuredPosts = [
  {
    id: 1,
    emoji: "🤖",
    category: "Claude Code & Cursor",
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
    image: `${base}images/media-posts/model-input.png`,
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7450461100241903616/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7450461100241903616",
    bgGradient: "from-violet-500 to-purple-700",
    bgLight: "from-violet-50 to-pink-50",
    stat: { value: "5×", label: "הבדל מחיר Opus/Sonnet" },
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
    subtitle: "ניסוי AI ויזואלי — מדריך שלב-אחר-שלב לכלים חינמיים",
    description:
      "ניסוי: לקחתי תמונה אחת שלי ויצרתי ממנה סרטון בסגנון Hollywood עם AI. התהליך היה מרתק — וגם ה׳סלפי הכוכבי׳ שיצא. בפוסט מדריך מפורט לכל מי שרוצה לנסות בעצמו, כולל כלים חינמיים.",
    takeaways: [
      "Kling AI ו-RunwayML יוצרים תנועה משכנעת מתמונה סטטית אחת",
      "ElevenLabs מוסיף קריינות בעברית ב-2 דקות ובאיכות גבוהה",
      "Canva Pro מאחד הכל לפורמט שמוכן ל-LinkedIn/Instagram",
      "כל התהליך אפשרי ב-0 שקלים עם tier החינמי של הכלים",
    ],
    image: `${base}images/media-posts/video-ai.png`,
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7408491181237485568/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7408491181237485568",
    bgGradient: "from-rose-500 to-orange-600",
    bgLight: "from-rose-50 to-orange-50",
    stat: { value: "1 תמונה", label: "לסרטון מלא" },
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
    platformColor: "text-[#0A66C2]",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7383044528456318976/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7383044528456318976",
    bgGradient: "from-emerald-500 to-teal-700",
    bgLight: "from-emerald-50 to-teal-50",
    stat: { value: "20 דק׳", label: "לבנות Agent ראשון" },
  },
  {
    id: 4,
    emoji: "🎯",
    category: "Cursor IDE",
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
    platformColor: "text-[#0A66C2]",
    url: "https://www.linkedin.com/in/ram-walas-tal-b1830770/recent-activity/all/",
    embedUrl: null,
    bgGradient: "from-sky-500 to-blue-700",
    bgLight: "from-sky-50 to-blue-50",
    stat: { value: "10×", label: "מהירות פיתוח ממוצעת" },
  },
  {
    id: 5,
    emoji: "📋",
    category: "מדריך",
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
    platformColor: "text-[#1877F2]",
    url: "https://www.facebook.com/share/p/18vPmFDtYs/",
    embedUrl: null,
    bgGradient: "from-amber-500 to-orange-600",
    bgLight: "from-amber-50 to-yellow-50",
    stat: { value: "2 שבועות", label: "החזר ROI ממוצע" },
  },
  {
    id: 6,
    emoji: "🏢",
    category: "Enterprise AI",
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
    platformColor: "text-[#1877F2]",
    url: "https://www.facebook.com/share/p/1EhfsFopbh/",
    embedUrl: null,
    bgGradient: "from-indigo-600 to-blue-800",
    bgLight: "from-indigo-50 to-blue-50",
    stat: { value: "60%", label: "קיצור זמן טיפול" },
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

function PostCard({ post, index }: { post: (typeof featuredPosts)[0]; index: number }) {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="glass-bento rounded-3xl overflow-hidden gradient-border electric-glow-hover group flex flex-col"
    >
      {/* Visual hero banner */}
      <div className={`bg-gradient-to-br ${post.bgGradient} p-6 relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 right-4 text-7xl select-none">{post.emoji}</div>
          <div className="absolute bottom-1 left-2 text-5xl select-none opacity-40">{post.emoji}</div>
        </div>

        <div className="relative z-10 flex items-start justify-between">
          {/* Stat badge */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 text-white text-right">
            <div className="font-inter font-black text-xl leading-none">{post.stat.value}</div>
            <div className="font-mono text-xs opacity-80 mt-0.5">{post.stat.label}</div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="font-mono text-xs text-white bg-white/20 backdrop-blur-sm border border-white/30 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-white/70">
              <span className="font-mono text-xs">{post.readTime}</span>
              <post.typeIcon className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Image or emoji hero */}
        <div className="relative z-10 mt-4 text-right flex items-end justify-end gap-3">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="h-16 w-auto max-w-[80px] object-contain"
            />
          )}
          <div className="text-5xl">{post.emoji}</div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Tags */}
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

        {/* Key takeaways */}
        <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-end gap-1.5 mb-3">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              תובנות מרכזיות
            </span>
            <Lightbulb className="w-3.5 h-3.5 text-primary" />
          </div>
          {post.takeaways.map((t, idx) => (
            <div key={idx} className="flex items-start justify-end gap-2 text-right">
              <p className="font-mono text-xs text-foreground/70 leading-relaxed">{t}</p>
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
            </div>
          ))}
        </div>

        {/* Embed toggle — only if embedUrl exists */}
        {post.embedUrl && (
          <div>
            <button
              onClick={() => setShowEmbed(!showEmbed)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0A66C2]/8 border border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2]/15 transition-all duration-200"
            >
              <span className="font-mono text-xs font-semibold">
                {showEmbed ? "סגור פוסט" : "צפה בפוסט המקורי LinkedIn"}
              </span>
              {showEmbed ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
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
                    className="rounded-xl border border-border"
                    title={post.title}
                    allowFullScreen
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* External link footer */}
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-3 border-t border-primary/10 flex items-center justify-between hover:opacity-75 transition-opacity"
        >
          <ExternalLink className="w-3.5 h-3.5 text-primary opacity-60" />
          <span className={`font-mono text-xs font-semibold ${post.platformColor}`}>
            קרא הפוסט המלא ב-{post.platform} ↗
          </span>
        </a>
      </div>
    </motion.div>
  );
}

export default function Resources() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filteredPosts =
    activeCategory === "הכל"
      ? featuredPosts
      : featuredPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Top bar */}
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

      {/* Page hero */}
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
            כל מה שכתבתי ודיברתי על AI, אוטומציה וכלי פיתוח מתקדמים.
            תוכן מניסיון אמיתי — לא תיאוריה.
          </p>

          {/* Stats bar */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {[
              { value: "6+", label: "מדריכים" },
              { value: "200K+", label: "קריאות" },
              { value: "50+", label: "הרצאות" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-inter font-black text-2xl text-primary">{s.value}</div>
                <div className="font-mono text-xs text-foreground/50">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Category filter */}
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

      {/* Posts grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <AnimatePresence mode="popLayout">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 font-mono text-sm text-foreground/40">
            אין תוכן בקטגוריה זו עדיין — בקרוב יתווסף עוד תוכן!
          </div>
        )}
      </section>

      {/* CTA bar */}
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

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8 px-6 text-center">
        <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
          © 2025 Ram Walastal. AI-Driven Automation.
        </p>
      </footer>
    </div>
  );
}
