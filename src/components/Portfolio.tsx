import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="portfolio" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            תיק עבודות
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            פרויקטים שהובילו לתוצאות מדידות
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card/40 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 gradient-border group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Code className="w-5 h-5 text-primary flex-shrink-0" />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-medium text-accent">
                    {project.metrics}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between hover:bg-primary/10 hover:text-primary"
                >
                  <span></span>
                  {/* <ExternalLink className="w-4 h-4" /> */}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
