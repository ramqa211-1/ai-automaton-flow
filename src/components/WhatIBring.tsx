import { motion } from "framer-motion";
import { Lightbulb, Settings, Bot, Compass, Rocket } from "lucide-react";

const offerings = [
  {
    icon: Bot,
    title: "AI Agents מותאמים אישית",
    description: "פיתוח סוכני AI חכמים עם n8n, OpenAI APIs ו-Webhooks לאוטומציה חכמה",
    badge: "Agents",
  },
  {
    icon: Settings,
    title: "אוטומציה חכמה בקנה מידה",
    description: "מערכות אוטומציה מלאות עם Playwright, TypeScript ו-CI/CD",
    badge: "Automation",
  },
  {
    icon: Lightbulb,
    title: "Vision AI UI Validation",
    description: "שימוש חלוצי ב-GPT-4 Vision עם MCP Playwright לבדיקות ויזואליות מונחות AI",
    badge: "Vision AI",
  },
  {
    icon: Compass,
    title: "No-Code AI Empowerment",
    description: "מתן כוח לצוותים ללא רקע טכני להשתמש ב-AI דרך פקודות שפה טבעית",
    badge: "No-Code",
  },
  {
    icon: Rocket,
    title: "Enterprise AI Integration",
    description: "חיבור AI Agents למערכות ארגוניות כמו Azure DevOps לאוטומציה מלאה",
    badge: "Enterprise",
  },
];

const WhatIBring = () => {
  return (
    <section id="offerings" className="py-24 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inter text-right md:text-center">
            מה אני מביא לשולחן
          </h2>
          <div className="kinetic-line max-w-sm mx-auto mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-bento rounded-2xl p-6 gradient-border electric-glow-hover flex flex-col items-center text-center gap-4"
            >
              <div className="p-4 bg-primary/10 rounded-full border border-primary/15 glow-primary">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                <span className="font-mono text-xs font-medium tracking-wider">{item.badge}</span>
              </div>
              <h3 className="text-base font-bold text-foreground font-inter">{item.title}</h3>
              <p className="font-mono text-xs text-foreground/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
