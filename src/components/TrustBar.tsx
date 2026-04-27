import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "שנות ניסיון", sub: "QA → AI Specialist" },
  { value: "100+", label: "אוטומציות פעילות", sub: "בארגונים ובעסקים" },
  { value: "60%", label: "הפחתת מאמץ ידני", sub: "ממוצע בפרויקטים" },
  { value: "3+", label: "חברות ביטוח מובילות", sub: "הטמעות בפרודקשן" },
];

const TrustBar = () => (
  <section className="py-8 px-8 border-y border-border/60 bg-white/70 backdrop-blur-sm">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex flex-col items-center gap-0.5"
          >
            <span className="text-3xl font-black text-primary font-inter">{s.value}</span>
            <span className="font-inter font-semibold text-sm text-foreground">{s.label}</span>
            <span className="font-mono text-xs text-foreground/45">{s.sub}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustBar;
