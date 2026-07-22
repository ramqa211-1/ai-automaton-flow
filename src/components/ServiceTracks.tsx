import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";

const tracks = [
  {
    num: "01",
    emoji: "🎤",
    title: "הרצאה מקצועית",
    subtitle: "1–2 שעות | לכנסים, צוותים וארגונים",
    description: "הרצאה מרתקת ומעשית שמתחברת לקהל שלך ומשאירה השראה ותוצאות — לא מצגת משעממת.",
    topics: [
      "Generative AI לאנשי עסקים ומנהלים",
      "AI Agents — הדור הבא של האוטומציה",
      "Claude Code, Cursor & n8n בעולם האמיתי",
      "Vision AI ובדיקות מונחות AI",
      "מה AI לא יחליף — ואיך לצמוח איתו",
    ],
    badge: "מותאם לקהל שלך",
    cta: "לפרטים ותיאום",
    ctaAction: "contact",
    highlight: false,
  },
  {
    num: "02",
    emoji: "🎓",
    title: "סדנה מעשית",
    subtitle: "חצי יום / יום שלם | עם הצוות שלך",
    description: "כל משתתף יוצא עם אוטומציה אמיתית שעובדת. לא תיאוריה — יצירה ביחד, live.",
    topics: [
      "מיפוי תהליכים ידניים לאוטומציה",
      "בניית flows ב-n8n ביחד",
      "אינטגרציה עם AI models וכלים קיימים",
      "Prompt Engineering מעשי",
      "Deploy ועמידה בפרודקשן",
      "תכנון מותאם אישית לעסק שלכם!",
    ],
    badge: "✨ הכי פופולרי",
    cta: "קביעת סדנה",
    ctaAction: "whatsapp",
    highlight: true,
  },
  {
    num: "03",
    emoji: "🚀",
    title: "הטמעה וייעוץ",
    subtitle: "פרויקט מלא | מגילוי ועד פרודקשן",
    description: "אני נכנס לארגון שלך, מבין לעומק, ובונה פתרון מלא — עם ליווי, תיעוד והעברת ידע.",
    topics: [
      "Discovery — מיפוי כאבים והזדמנויות",
      "ארכיטקטורת פתרון + ROI מחושב",
      "בנייה ואינטגרציות מלאות",
      "העברת ידע לצוות הפנימי",
      "ליווי ותמיכה לאחר השקה",
    ],
    badge: "ROI מדיד",
    cta: "שיחת גילוי חינמית",
    ctaAction: "whatsapp",
    highlight: false,
  },
];

const ServiceTracks = () => (
  <section id="booking" className="py-24 px-6 md:px-12 relative overflow-hidden">
    <div className="max-w-[1240px] mx-auto">
      <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold tracking-[-0.5px] max-w-[640px] leading-[1.05] text-[clamp(34px,4.6vw,60px)]"
        >
          שלושה מסלולים,
          <br />
          מטרה אחת — <span className="text-primary">ערך אמיתי</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heebo font-light text-base text-muted-foreground max-w-[300px]"
        >
          בוחרים איפה מתחילים. אני מלווה מהרעיון הראשון ועד שזה רץ לבד.
        </motion.p>
      </div>

      <div className="flex flex-col border-t border-border">
        {tracks.map((track, i) => (
          <motion.div
            key={track.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="grid md:grid-cols-[80px_1.1fr_1.4fr] gap-7 py-10 px-2 border-b border-border items-start transition-colors duration-300 hover:bg-primary/[0.03]"
          >
            {/* number */}
            <div
              className="font-display text-[34px] font-extrabold leading-none"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgb(var(--brand-rgb) / 0.6)",
              }}
            >
              {track.num}
            </div>

            {/* title */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl shrink-0">{track.emoji}</span>
                <h3 className="font-display font-bold tracking-[-0.4px] leading-[1.15] text-[clamp(24px,2.4vw,32px)]">
                  {track.title}
                </h3>
              </div>
              <p className="font-heebo font-light text-sm text-muted-foreground">{track.subtitle}</p>
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full border ${
                  track.highlight
                    ? "bg-primary text-primary-foreground border-primary font-semibold"
                    : "border-border text-muted-foreground"
                }`}
              >
                {track.badge}
              </span>
            </div>

            {/* body */}
            <div>
              <p className="font-heebo font-light text-base text-foreground/75 leading-[1.7] mb-4">
                {track.description}
              </p>
              <div className="flex flex-wrap gap-2.5 mb-6">
                {track.topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1.5 text-[13px] text-foreground/80 px-3.5 py-1.5 rounded-full border border-border"
                  >
                    <Check className="w-3 h-3 text-primary shrink-0" />
                    {topic}
                  </span>
                ))}
              </div>
              <button
                onClick={() =>
                  track.ctaAction === "whatsapp"
                    ? window.open("https://wa.me/972548010190", "_blank")
                    : document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-heebo font-semibold text-sm transition-all duration-300 active:scale-95 ${
                  track.highlight
                    ? "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgb(var(--brand-rgb)/0.3)]"
                    : "border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                {track.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center font-heebo font-light text-xs text-muted-foreground mt-10"
      >
        כל המסלולים כוללים שיחת ייעוץ ראשונית חינמית ללא התחייבות
      </motion.p>
    </div>
  </section>
);

export default ServiceTracks;
