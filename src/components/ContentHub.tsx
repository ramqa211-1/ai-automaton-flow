import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// ─── UPDATE THESE LINKS when Ram provides them ───────────────────────────────
const posts = [
  {
    emoji: "🤖",
    category: "Claude Code",
    title: "Claude Code — כלי הפיתוח שמשנה את המשחק ב-2025",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "#", // TODO: replace with real URL
    isNew: true,
  },
  {
    emoji: "⚡",
    category: "n8n",
    title: "איך n8n שינתה לי את חיי — מדריך מלא מאפס",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "#", // TODO
    isNew: false,
  },
  {
    emoji: "👁️",
    category: "Vision AI",
    title: "GPT-4 Vision + Playwright: בדיקות UI מונחות AI",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "#", // TODO
    isNew: true,
  },
  {
    emoji: "🎯",
    category: "Cursor IDE",
    title: "Cursor IDE — מדריך לפיתוח עם AI שכותב עבורך",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "#", // TODO
    isNew: false,
  },
  {
    emoji: "🔗",
    category: "MCP",
    title: "MCP + Playwright: עתיד האוטומציה הטכנולוגית",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "#", // TODO
    isNew: false,
  },
  {
    emoji: "📋",
    category: "מדריך",
    title: "5 האוטומציות שכל עסק חייב להפעיל ב-2026",
    platform: "מדריך",
    platformColor: "text-primary",
    url: "#", // TODO
    isNew: true,
  },
  {
    emoji: "🏢",
    category: "Enterprise AI",
    title: "AI Agents בחברות ביטוח — מקרה בוחן מלא",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "#", // TODO
    isNew: false,
  },
  {
    emoji: "💬",
    category: "Prompt Engineering",
    title: "Prompt Engineering מעשי — מה שבאמת עובד",
    platform: "LinkedIn",
    platformColor: "text-[#0A66C2]",
    url: "#", // TODO
    isNew: false,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const categories = ["הכל", "Claude Code", "n8n", "Vision AI", "Cursor IDE", "מדריך", "MCP", "Enterprise AI"];

const ContentHub = () => (
  <section id="content" className="py-24 px-8 surface-alt relative">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block font-mono text-xs text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
          ידע וכלים
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-foreground font-inter mb-2">
          פוסטים, מדריכים ותוכן
        </h2>
        <div className="kinetic-line max-w-xs mx-auto" />
        <p className="font-mono text-sm text-foreground/50 mt-4 max-w-xl mx-auto">
          מאות אלפי קריאות. מדריכים שעוזרים לאנשים ולארגונים להתחיל עם AI — בפועל, לא בתיאוריה.
        </p>
      </motion.div>

      {/* Category chips — visual only for now */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap gap-2 justify-center mb-10"
      >
        {categories.map((cat, i) => (
          <span
            key={i}
            className={`px-3 py-1.5 rounded-full font-mono text-xs border transition-all duration-200 cursor-default ${
              i === 0
                ? "bg-primary text-white border-primary"
                : "bg-white/60 border-primary/15 text-foreground/60 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {cat}
          </span>
        ))}
      </motion.div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((post, i) => (
          <motion.a
            key={i}
            href={post.url}
            target={post.url !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className={`glass-bento rounded-2xl p-5 flex flex-col gap-3 gradient-border electric-glow-hover group relative ${
              post.url === "#" ? "cursor-default opacity-75" : "cursor-pointer"
            }`}
          >
            {/* New badge */}
            {post.isNew && (
              <div className="absolute top-3 left-3">
                <span className="bg-primary text-white font-mono text-xs px-2 py-0.5 rounded-full">חדש</span>
              </div>
            )}

            {/* Category chip */}
            <div className="flex items-center justify-between">
              <ExternalLink className={`w-3.5 h-3.5 ${post.platformColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/15 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Emoji */}
            <div className="text-3xl text-right">{post.emoji}</div>

            {/* Title */}
            <h3 className="font-inter font-bold text-sm text-foreground text-right leading-snug group-hover:text-primary transition-colors duration-200">
              {post.title}
            </h3>

            {/* Platform */}
            <div className="pt-2 border-t border-primary/10 flex items-center justify-end gap-1.5">
              <span className={`font-mono text-xs font-semibold ${post.platformColor}`}>{post.platform}</span>
            </div>

            {/* Coming soon overlay */}
            {post.url === "#" && (
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="font-mono text-xs text-foreground/50 bg-white/80 px-3 py-1.5 rounded-full border border-border">
                  קישור בקרוב
                </span>
              </div>
            )}
          </motion.a>
        ))}
      </div>

      {/* Linktree CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center mt-12"
      >
        <a
          href="https://linktr.ee/ram7walas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 glass-bento border border-primary/30 text-primary px-8 py-3.5 rounded-xl font-inter font-semibold text-sm hover:border-primary/60 hover:bg-primary/5 transition-all duration-200"
        >
          <ExternalLink className="w-4 h-4" />
          כל התוכן שלי בלינקטרי
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContentHub;
