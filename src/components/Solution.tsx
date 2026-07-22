import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Settings,
  Lightbulb,
  Network,
  Rocket,
  ScanSearch,
  Kanban,
  GraduationCap,
  BrainCircuit,
} from "lucide-react";
import CheetahMark from "./CheetahMark";

const offerings = [
  {
    icon: Sparkles,
    title: "Claude Code & Agentic Development",
    description: "סוכני AI אוטונומיים שכותבים, מתקנים ומריצים קוד בעצמם — הדור הבא של פיתוח.",
    badge: "Claude Code",
  },
  {
    icon: Bot,
    title: "AI Agents מותאמים אישית",
    description: "סוכני AI חכמים עם n8n, OpenAI APIs ו-Webhooks לאוטומציה חכמה.",
    badge: "Agents",
  },
  {
    icon: Settings,
    title: "אוטומציה חכמה בקנה מידה",
    description: "מערכות אוטומציה מלאות עם Playwright, TypeScript ו-CI/CD.",
    badge: "Automation",
  },
  {
    icon: Lightbulb,
    title: "Vision AI UI Validation",
    description: "GPT-4 Vision עם MCP Playwright לבדיקות ויזואליות מונחות AI.",
    badge: "Vision AI",
  },
  {
    icon: Network,
    title: "Enterprise AI Integration",
    description: "חיבור AI Agents למערכות ארגוניות כמו Azure DevOps לאוטומציה מלאה.",
    badge: "Enterprise",
  },
  {
    icon: Rocket,
    title: "No-Code AI Empowerment",
    description: "העצמת צוותים ללא רקע טכני להשתמש ב-AI דרך פקודות שפה טבעית.",
    badge: "No-Code",
  },
];

const stack = [
  "Claude Code",
  "n8n",
  "Playwright",
  "TypeScript",
  "Python",
  "Cursor IDE",
];

const softSkills = [
  { Icon: ScanSearch, label: "ניתוח מערכות" },
  { Icon: Kanban, label: "ניהול פרויקטים" },
  { Icon: GraduationCap, label: "הנחיה והדרכה" },
  { Icon: BrainCircuit, label: "חדשנות ופתרון בעיות" },
];

const Solution = () => {
  return (
    <section id="services" className="py-24 px-8 relative overflow-hidden">
      {/* Cheetah background accent */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-[-50px] top-[10%] pointer-events-none"
      >
        <CheetahMark size={240} opacity={0.05} rounded="lg" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground font-heebo mb-2">
            מה אני בונה ואיך
          </h2>
          <div className="kinetic-line max-w-xs mx-auto" />
          <p className="font-heebo font-light text-sm text-foreground/55 mt-4">
            השירותים, הסטאק והגישה — בכרטיס אחד
          </p>
        </motion.div>

        {/* Block 1 — Service offerings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {offerings.map((item, index) => (
            <motion.div
              key={item.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-bento rounded-2xl p-6 gradient-border electric-glow-hover flex flex-col items-center text-center gap-4"
            >
              <div className="p-4 bg-primary/10 rounded-full border border-primary/15 glow-primary">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                <span className="font-heebo font-light text-xs font-medium tracking-wider">{item.badge}</span>
              </div>
              <h3 className="text-base font-bold text-foreground font-heebo">{item.title}</h3>
              <p className="font-heebo font-light text-xs text-foreground/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Block 2 — Tech stack chip strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-bento rounded-2xl p-6 mb-12 gradient-border"
        >
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
            <span className="font-heebo font-light text-xs uppercase tracking-widest text-primary">
              הסטאק שלי
            </span>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="px-3 py-1.5 bg-[rgb(var(--glass-bg))] border border-primary/15 rounded-full font-heebo font-light text-xs font-medium text-foreground/70 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Block 3 — Soft skills strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 glass-bento rounded-xl px-4 py-3 border border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <skill.Icon className="w-4 h-4" />
              </div>
              <span className="font-heebo text-sm font-semibold text-foreground/80">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
