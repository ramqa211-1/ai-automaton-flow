import { motion } from "framer-motion";
import { Code } from "lucide-react";

const projects = [
  {
    title: "WhatsApp AI Monitoring Agent",
    description: "סוכן AI חכם למעקב אחר WhatsApp באמצעות n8n, OpenAI APIs ו-Webhooks לזיהוי תוכן מזיק בזמן אמת",
    tech: ["n8n", "OpenAI API", "Webhooks", "Real-time Alerts"],
    metrics: "הגנה פרואקטיבית על ילדים עם התראות אוטומטיות",
  },
  {
    title: "MCP-Playwright Automation System",
    description: "מערכת אוטומציה פנימית המאפשרת לעובדים לבצע בדיקות QA באמצעות פקודות שפה טבעית",
    tech: ["Cursor IDE", "MCP", "Playwright", "NLP"],
    metrics: "הפחתה של 60% במאמץ ידני, הנגשת אוטומציה לכולם",
  },
  {
    title: "Vision AI UI Validation",
    description: "שימוש חלוצי ב-GPT-4 Vision עם MCP Playwright לבדיקות UI מונחות AI",
    tech: ["GPT-4 Vision", "MCP", "Playwright", "TypeScript"],
    metrics: "פריצת דרך חברתית ראשונה בתחום בדיקות ויזואליות",
  },
  {
    title: "Social AI Automation",
    description: "אוטומציה יומית לפרסום חדשות AI באמצעות n8n ו-LLMs בסגנון LinkedIn על פני פלטפורמות מרובות",
    tech: ["n8n", "LLMs", "LinkedIn API", "Facebook API"],
    metrics: "פוסטים אוטומטיים יומיים עם זיהוי טרנדים",
  },
  {
    title: "Complete Automation Framework - TA9",
    description: "פיתוח והובלת framework אוטומציה מלא מאפס עם Playwright ו-TypeScript",
    tech: ["Playwright", "TypeScript", "CircleCI", "Docker"],
    metrics: "הפחתת זמן בדיקות ידניות ב-70%, CI/CD מלא",
  },
  {
    title: "Enterprise AI Integration",
    description: "חיבור MCP agents עם Azure DevOps לביצוע טסטים, מעקב באגים וניתוח deployment בזמן אמת",
    tech: ["MCP", "Azure DevOps", "AI Agents", "API Integration"],
    metrics: "חיסכון בשעות הנדסה ושיפור שיתוף פעולה בין צוותים",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-8 surface-alt relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inter text-right md:text-center">
            תיק עבודות
          </h2>
          <div className="kinetic-line max-w-sm mx-auto mt-2" />
          <p className="font-mono text-sm text-foreground/50 text-center mt-4">
            פרויקטים שהובילו לתוצאות מדידות
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-bento rounded-2xl p-6 gradient-border electric-glow-hover group flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-2">
                <Code className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <h3 className="text-base font-bold text-foreground font-inter text-right group-hover:text-primary transition-colors duration-200 flex-1">
                  {project.title}
                </h3>
              </div>

              <p className="font-mono text-xs text-foreground/60 leading-relaxed text-right">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 justify-end">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-primary/10 text-primary font-mono text-xs rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-primary/10">
                <p className="font-mono text-xs font-semibold text-primary text-right">
                  {project.metrics}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
