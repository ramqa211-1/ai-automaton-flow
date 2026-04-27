import { motion } from "framer-motion";
import { Code, ExternalLink, Zap, Users } from "lucide-react";

const clientProjects = [
  {
    client: "שמוליק אבוקסיס — חשמלאי תעשייתי",
    title: "אתר עסקי מקצועי + דף נחיתה ממיר",
    description: "בניית אתר מקצועי מלא לחשמלאי תעשייתי — כולל גלריית פרויקטים, טופס ליד, SEO מותאם ועיצוב שמשדר אמינות ומקצועיות.",
    tech: ["React", "Firebase", "SEO", "Lead Form"],
    metrics: "אתר חי, פועל ומביא לידים — ראה בעצמך ↗",
    url: "https://smulikelectricservices.web.app/",
    icon: "⚡",
    highlight: true,
  },
  {
    client: "מכללת ניו מדיה — המכללה לניו-מדיה",
    title: "סוכן AI לאיסוף וניהול לידים אוטומטי",
    description: "סוכן WhatsApp חכם שפתח שיחה, הסביר על קורסים, ענה על שאלות ואסף פרטי ליד — הכל בלי מגע יד. חסך שעות של עבודה ידנית ומנע פספוסי לידים.",
    tech: ["n8n", "WhatsApp API", "OpenAI", "CRM Integration"],
    metrics: "שעות עבודה ידנית לאפס — אפס פספוסי לידים",
    icon: "🎓",
    highlight: true,
  },
];

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

        {/* ── Client Projects — highlighted ── */}
        <div className="mb-8">
          <div className="flex items-center justify-end gap-3 mb-5">
            <h3 className="font-inter font-bold text-lg text-foreground">תוצרים ללקוחות</h3>
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {clientProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                className="relative glass-bento rounded-2xl p-6 border-2 border-primary/35 shadow-lg shadow-primary/8 electric-glow-hover group flex flex-col gap-4"
              >
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white font-mono text-xs px-2.5 py-1 rounded-full">לקוח אמיתי</span>
                </div>

                <div className="flex items-start justify-end gap-3">
                  <div className="text-right">
                    <p className="font-mono text-xs text-primary font-semibold mb-1">{project.client}</p>
                    <h3 className="text-base font-bold text-foreground font-inter group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl border border-primary/25 flex items-center justify-center text-2xl shrink-0">
                    {project.icon}
                  </div>
                </div>

                <p className="font-mono text-xs text-foreground/65 leading-relaxed text-right">
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

                <div className="pt-3 border-t border-primary/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-primary text-white font-mono text-xs px-3 py-1.5 rounded-full hover:bg-accent transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3" />
                        צפה באתר
                      </a>
                    ) : null}
                  </div>
                  <p className="font-mono text-xs font-semibold text-primary text-right flex-1">
                    {project.metrics}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Internal Projects ── */}
        <div className="flex items-center justify-end gap-3 mb-5">
          <h3 className="font-inter font-bold text-lg text-foreground">פרויקטים נבחרים</h3>
          <Code className="w-5 h-5 text-primary" />
        </div>
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
