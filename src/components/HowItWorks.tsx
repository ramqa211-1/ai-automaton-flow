import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const steps = [
  {
    num: "שלב 01",
    emoji: "💬",
    title: "שיחת גילוי",
    subtitle: "30 דקות חינם, ללא התחייבות",
    description: "מדברים על העסק שלך, מה בוזבז, מה אפשר לשפר. אני ממפה הזדמנויות ומביא לך ROI משוער.",
  },
  {
    num: "שלב 02",
    emoji: "🔧",
    title: "בנייה מהירה",
    subtitle: "Sprints שבועיים עם demos חיים",
    description: "אין 6 חודשי 'ייעוץ'. אנחנו בונים ביחד, רואים תוצאות מהר, ומתקנים בדרך.",
  },
  {
    num: "שלב 03",
    emoji: "🚀",
    title: "השקה ומסירה",
    subtitle: "הצוות שלך שולט — לא תלוי בי",
    description: "תיעוד מלא, הדרכת הצוות, ותמיכה לאחר השקה. המטרה שלי: שתוכל להמשיך בלעדיי.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-6 md:px-12 relative overflow-hidden">
    <div className="max-w-[1240px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="text-sm tracking-[3px] text-muted-foreground mb-4">התהליך</div>
        <h2 className="font-display font-extrabold tracking-[-0.5px] text-[clamp(34px,4.6vw,60px)]">
          מרעיון לאוטומציה שעובדת
        </h2>
      </motion.div>

      <div
        className="grid gap-0"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative px-7 pt-2 pb-7"
          >
            {/* dot + trailing rule */}
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgb(var(--brand-rgb)/0.6)] shrink-0" />
              <div className="flex-1 h-px bg-gradient-to-l from-primary/50 to-foreground/[0.06]" />
            </div>

            <div className="font-display text-[15px] text-primary mb-2.5">{step.num}</div>
            <h4 className="font-display text-[22px] font-bold mb-1.5 flex items-center gap-2">
              <span>{step.emoji}</span>
              {step.title}
            </h4>
            <p className="font-heebo text-xs text-primary/80 uppercase tracking-wider mb-3">
              {step.subtitle}
            </p>
            <p className="font-heebo font-light text-[15px] text-muted-foreground leading-[1.6]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-14"
      >
        <button
          onClick={() => window.open("https://wa.me/972548010190", "_blank")}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-heebo font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(var(--brand-rgb)/0.35)] active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          התחל משיחת גילוי חינמית
        </button>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
