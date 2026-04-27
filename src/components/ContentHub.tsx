import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const teaserPosts = [
  {
    emoji: "🤖",
    category: "Claude Code",
    title: "Claude Opus vs Sonnet — ה-AI שלך רק טוב כמו ה-Context שנותן לו",
    description: "השוואה מעשית בין מודלים על פרויקט אמיתי בתוך Cursor IDE — המסקנות הפתיעו אותי.",
  },
  {
    emoji: "🎤",
    category: "n8n & הרצאות",
    title: "הרצאה לנשים בהייטק — בניית AI Agent בשידור חי עם n8n",
    description: 'בנינו AI Agent אמיתי יחד ללא קוד וללא ניסיון טכני — הקהל יצא עם Agents שרצים בעצמם.',
  },
  {
    emoji: "🎬",
    category: "Vision AI",
    title: "יצרתי סרטון Hollywood-style עם תמונה אחת שלי",
    description: "ניסוי AI ויזואלי עם מדריך שלב-אחר-שלב, כולל כלים חינמיים לכל מי שרוצה לנסות.",
  },
];

const ContentHub = () => {
  const navigate = useNavigate();

  return (
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
            מדריכים, הרצאות ותוכן
          </h2>
          <div className="kinetic-line max-w-xs mx-auto" />
          <p className="font-mono text-sm text-foreground/50 mt-4 max-w-xl mx-auto">
            מאות אלפי קריאות. תוכן שנוצר מניסיון אמיתי — לא תיאוריה.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {teaserPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              onClick={() => navigate("/resources")}
              className="glass-bento rounded-2xl p-6 flex flex-col gap-4 gradient-border electric-glow-hover group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <BookOpen className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/15 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="text-3xl text-right">{post.emoji}</div>

              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-inter font-bold text-sm text-foreground text-right leading-snug group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="font-mono text-xs text-foreground/55 text-right leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="pt-3 border-t border-primary/10 flex items-center justify-end gap-1.5">
                <span className="font-mono text-xs font-semibold text-primary">
                  קרא עוד ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/resources")}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-inter font-semibold text-sm hover:bg-accent transition-colors duration-200 electric-glow"
          >
            <BookOpen className="w-4 h-4" />
            לכל המאמרים, המדריכים וההרצאות
            <ArrowLeft className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentHub;
