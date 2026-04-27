import { motion } from "framer-motion";
import { MessageCircle, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    emoji: "💬",
    title: "שיחת גילוי",
    subtitle: "30 דקות חינם, ללא התחייבות",
    description: "מדברים על העסק שלך, מה בוזבז, מה אפשר לשפר. אני ממפה הזדמנויות ומביא לך ROI משוער.",
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    num: "02",
    icon: Wrench,
    emoji: "🔧",
    title: "בנייה מהירה",
    subtitle: "Sprints שבועיים עם demos חיים",
    description: "אין 6 חודשי 'ייעוץ'. אנחנו בונים ביחד, רואים תוצאות מהר, ומתקנים בדרך.",
    color: "from-primary/10 to-primary/5",
  },
  {
    num: "03",
    icon: Rocket,
    emoji: "🚀",
    title: "השקה ומסירה",
    subtitle: "הצוות שלך שולט — לא תלוי בי",
    description: "תיעוד מלא, הדרכת הצוות, ותמיכה לאחר השקה. המטרה שלי: שתוכל להמשיך בלעדיי.",
    color: "from-green-500/10 to-green-500/5",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-8 relative overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-black text-foreground font-inter mb-2">
          איך עובדים יחד?
        </h2>
        <div className="kinetic-line max-w-xs mx-auto" />
        <p className="font-mono text-sm text-foreground/50 mt-4">
          3 שלבים. פשוט, מהיר, עם תוצאות אמיתיות
        </p>
      </motion.div>

      <div className="relative">
        {/* Connecting kinetic line (desktop) */}
        <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Number + Icon circle */}
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} border border-primary/20 flex items-center justify-center text-2xl shadow-sm`}>
                  {step.emoji}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center font-mono text-xs font-bold">
                  {i + 1}
                </div>
              </div>

              <div className="glass-bento rounded-2xl p-6 w-full gradient-border electric-glow-hover space-y-2">
                <h3 className="text-lg font-black font-inter text-foreground">{step.title}</h3>
                <p className="font-mono text-xs text-primary uppercase tracking-wider">{step.subtitle}</p>
                <p className="font-mono text-xs text-foreground/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mt-12"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => window.open("https://wa.me/972548010190", "_blank")}
          className="bg-primary text-white px-10 py-4 rounded-xl font-inter font-semibold text-sm electric-glow hover:bg-accent transition-all duration-200 inline-flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          התחל משיחת גילוי חינמית
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
