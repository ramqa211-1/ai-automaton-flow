import { motion } from "framer-motion";
import { Mic, GraduationCap, Rocket, Check, ArrowLeft } from "lucide-react";

const tracks = [
  {
    icon: Mic,
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
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    cta: "לפרטים ותיאום",
    ctaAction: "contact",
    highlight: false,
  },
  {
    icon: GraduationCap,
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
    ],
    badge: "✨ הכי פופולרי",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
    cta: "קביעת סדנה",
    ctaAction: "whatsapp",
    highlight: true,
  },
  {
    icon: Rocket,
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
    badgeColor: "bg-green-50 text-green-600 border-green-200",
    cta: "שיחת גילוי חינמית",
    ctaAction: "whatsapp",
    highlight: false,
  },
];

const ServiceTracks = () => (
  <section id="booking" className="py-24 px-8 surface-alt relative overflow-hidden">
    {/* Background blobs */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/4 blur-3xl rounded-full pointer-events-none" />

    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="inline-block font-mono text-xs text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
          הזמנה
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-foreground font-inter leading-tight mb-3">
          בחר את המסלול שמתאים לך
        </h2>
        <p className="font-mono text-sm text-foreground/50 max-w-xl mx-auto leading-relaxed">
          כל מסלול מותאם לצרכים שונים — מהרצאה בת שעתיים ועד פרויקט הטמעה מלא
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {tracks.map((track, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`relative glass-bento rounded-3xl p-7 flex flex-col gap-5 electric-glow-hover ${
              track.highlight
                ? "border-2 border-primary/40 shadow-xl shadow-primary/10"
                : "gradient-border"
            }`}
          >
            {/* Highlight ring */}
            {track.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white text-xs font-mono font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-primary/30 whitespace-nowrap">
                  ✨ הכי פופולרי
                </span>
              </div>
            )}

            {/* Header */}
            <div className="text-right space-y-2">
              <div className="flex items-center gap-3 justify-end">
                <div>
                  <h3 className="text-xl font-black font-inter text-foreground">{track.title}</h3>
                  <p className="font-mono text-xs text-foreground/50 mt-0.5">{track.subtitle}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center text-2xl shrink-0">
                  {track.emoji}
                </div>
              </div>
              <p className="font-mono text-sm text-foreground/65 leading-relaxed">{track.description}</p>
            </div>

            {/* Topics */}
            <div className="space-y-2">
              {track.topics.map((topic, j) => (
                <div key={j} className="flex items-start gap-2 justify-end text-right">
                  <span className="font-mono text-xs text-foreground/65 leading-relaxed">{topic}</span>
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                track.ctaAction === "whatsapp"
                  ? window.open("https://wa.me/972548010190", "_blank")
                  : document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-full py-3.5 rounded-xl font-inter font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                track.highlight
                  ? "bg-primary text-white electric-glow hover:bg-accent"
                  : "glass-bento border border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              {track.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center font-mono text-xs text-foreground/35 mt-10"
      >
        כל המסלולים כוללים שיחת ייעוץ ראשונית חינמית ללא התחייבות
      </motion.p>
    </div>
  </section>
);

export default ServiceTracks;
