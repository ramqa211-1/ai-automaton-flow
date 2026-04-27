import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bubbles = [
  { text: "אני שומע על AI כל הזמן אבל לא יודע מאיפה להתחיל", delay: 0.2 },
  { text: "הצוות שלי מבזבז שעות על משימות שאפשר לאוטמט", delay: 0.7 },
  { text: "המתחרים שלי כבר משתמשים ב-AI — ואני נשאר מאחור", delay: 1.2 },
  { text: "ניסיתי כלי AI אבל לא ראיתי תוצאות אמיתיות בעסק", delay: 1.7 },
  { text: "לא רוצה להחליף עובדים — רוצה להעצים אותם", delay: 2.2 },
];

const floatVariants = (i: number) => ({
  animate: {
    y: [0, i % 2 === 0 ? -6 : -4, 0],
    transition: {
      duration: 3 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.3,
    },
  },
});

const ThinkingPerson = () => (
  <div className="relative flex flex-col items-center select-none">
    {/* Floating question marks */}
    {["?", "?", "?"].map((q, i) => (
      <motion.span
        key={i}
        className="absolute font-black text-primary font-inter"
        style={{ fontSize: `${18 + i * 4}px`, left: `${10 + i * 28}%`, top: "-44px" }}
        animate={{ y: [0, -8, 0], opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
      >
        {q}
      </motion.span>
    ))}

    {/* Head with pulsing glow ring */}
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-md"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 flex items-center justify-center text-4xl z-10">
        🤔
      </div>
    </div>

    {/* Body */}
    <div className="w-14 h-20 bg-gradient-to-b from-primary/10 to-primary/5 border-2 border-primary/20 border-t-0 rounded-b-3xl -mt-1" />

    {/* Label */}
    <span className="font-mono text-xs text-foreground/40 mt-3 tracking-widest uppercase">מנהל / בעל עסק</span>
  </div>
);

const PainPoints = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-8 relative overflow-hidden bg-gradient-to-b from-background via-background to-surface-alt">
      {/* Soft radial background */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(182,0,89,0.04)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-xs text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
            נשמע מוכר?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground font-inter leading-tight">
            המחשבות שרצות לך בראש<br />
            <span className="gradient-text">כשאתה שומע AI</span>
          </h2>
        </motion.div>

        {/* Main layout: existing content (left) | image (right) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10">

          {/* Left half — bubbles + person */}
          <div className="flex-1 flex flex-col md:flex-row items-center gap-10 md:gap-16">

            {/* Bubbles column */}
            <div className="flex-1 space-y-4">
              {bubbles.map((bubble, i) => (
                <motion.div
                  key={i}
                  variants={floatVariants(i)}
                  animate={inView ? "animate" : undefined}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: bubble.delay, duration: 0.6 }}
                  className="relative"
                >
                  <div className="glass-bento rounded-2xl rounded-tr-sm px-5 py-4 border border-white/50 shadow-sm flex items-start gap-3 text-right group hover:border-primary/30 hover:shadow-md transition-all duration-300 electric-glow-hover">
                    <p className="font-mono text-sm text-foreground/75 leading-relaxed flex-1">{bubble.text}</p>
                    <span className="text-lg mt-0.5 shrink-0">💭</span>
                  </div>
                  <div className="absolute -left-2 top-4 w-3 h-3 bg-white/50 border-l border-b border-white/50 rotate-45 hidden md:block" />
                </motion.div>
              ))}
            </div>

            {/* Person column */}
            <div className="shrink-0 flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7, type: "spring", bounce: 0.3 }}
              >
                <ThinkingPerson />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.8, duration: 0.6 }}
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-primary text-2xl"
                >
                  ↓
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent self-stretch" />

          {/* Right half — solutions infographic */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex-1 flex items-center justify-center"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/general/solutions.png`}
              alt="מהמחשבות לתוצאות — הפתרון שלנו"
              className="w-full max-w-xl rounded-3xl shadow-2xl border border-border/20 object-contain"
            />
          </motion.div>
        </div>

        {/* Resolution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 text-center glass-bento rounded-3xl p-8 md:p-12 gradient-border max-w-3xl mx-auto"
        >
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-2xl md:text-3xl font-black font-inter text-foreground mb-3">
            אם אחת מהמחשבות האלה מוכרת —<br />
            <span className="gradient-text">אנחנו כבר חצי דרך לפתרון</span>
          </h3>
          <p className="font-mono text-sm text-foreground/60 mb-8 leading-relaxed">
            בשיחה אחת של 30 דקות אני יכול למפות את כל נקודות הכאב שלך ולתת לך מפת דרכים ברורה לאוטומציה חכמה — בלי ז'רגון, בלי מכירות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("https://wa.me/972548010190", "_blank")}
              className="bg-primary text-white px-8 py-3.5 rounded-xl font-inter font-semibold text-sm electric-glow hover:bg-accent transition-all duration-200"
            >
              שיחת גילוי חינמית ← ← ←
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-bento text-primary px-8 py-3.5 rounded-xl font-inter font-semibold text-sm border border-primary/30 hover:border-primary/60 transition-all duration-200"
            >
              ראה את המסלולים שלי
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
