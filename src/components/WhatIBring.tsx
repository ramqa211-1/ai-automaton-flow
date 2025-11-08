import { motion } from "framer-motion";
import { Lightbulb, Settings, Bot, Compass, Rocket } from "lucide-react";

const offerings = [
  {
    icon: Bot,
    title: "AI Agents מותאמים אישית",
    description: "פיתוח סוכני AI חכמים עם n8n, OpenAI APIs ו-Webhooks לאוטומציה חכמה",
  },
  {
    icon: Settings,
    title: "אוטומציה חכמה בקנה מידה",
    description: "מערכות אוטומציה מלאות עם Playwright, TypeScript ו-CI/CD",
  },
  {
    icon: Lightbulb,
    title: "Vision AI UI Validation",
    description: "שימוש חלוצי ב-GPT-4 Vision עם MCP Playwright לבדיקות ויזואליות מונחות AI",
  },
  {
    icon: Compass,
    title: "No-Code AI Empowerment",
    description: "מתן כוח לצוותים ללא רקע טכני להשתמש ב-AI דרך פקודות שפה טבעית",
  },
  {
    icon: Rocket,
    title: "Enterprise AI Integration",
    description: "חיבור AI Agents למערכות ארגוניות כמו Azure DevOps לאוטומציה מלאה",
  },
];

const WhatIBring = () => {
  return (
    <section id="offerings" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            מה אני מביא לשולחן
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 gradient-border"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full glow-primary">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
