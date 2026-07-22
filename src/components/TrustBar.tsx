import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "שנות ניסיון", sub: "QA → AI Specialist" },
  { value: "100+", label: "אוטומציות פעילות", sub: "בארגונים ובעסקים" },
  { value: "60%", label: "הפחתת מאמץ ידני", sub: "ממוצע בפרויקטים" },
  { value: "3+", label: "חברות ביטוח מובילות", sub: "הטמעות בפרודקשן" },
];

const TrustBar = () => (
  <section id="stats" className="py-14 px-6 md:px-12">
    <div
      className="max-w-[1240px] mx-auto grid gap-10 rounded-[32px] border border-primary/15 px-8 md:px-11 py-14"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        background:
          "linear-gradient(135deg, rgb(var(--brand-rgb) / 0.08), rgba(255,255,255,0.015))",
      }}
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="text-center"
        >
          {/* dir=ltr: RTL bidi would otherwise render "10+" as "+10" */}
          <div
            dir="ltr"
            className="font-display font-extrabold tracking-[-1px] text-primary leading-none text-[clamp(44px,5.5vw,68px)]"
          >
            {s.value}
          </div>
          <div className="text-[15px] text-foreground/85 mt-3">{s.label}</div>
          <div className="font-heebo font-light text-xs text-muted-foreground mt-1">{s.sub}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustBar;
