import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "מערכת אוטומציה לניהול לידים",
    description: "פיתוח מערכת מלאה לזיהוי, עיבוד והפצה אוטומטית של לידים באמצעות AI",
    tech: ["Python", "GPT-4", "n8n", "API Integration"],
    metrics: "95% חיסכון בזמן, 3x יותר המרות",
  },
  {
    title: "צ'אטבוט AI מתקדם לשירות לקוחות",
    description: "בניית מערכת AI conversational שמטפלת ב-80% מפניות הלקוחות אוטומטית",
    tech: ["Node.js", "GPT-4", "Webhook Integration", "Database"],
    metrics: "80% הפחתה בעומס, שביעות רצון 92%",
  },
  {
    title: "Pipeline אוטומטי לעיבוד מסמכים",
    description: "מערכת OCR ו-AI לעיבוד מסמכים, חילוץ נתונים ואינטגרציה למערכות ניהול",
    tech: ["Python", "OCR", "Machine Learning", "API"],
    metrics: "10 שעות עבודה ליום נחסכות",
  },
  {
    title: "מערכת דיווח אוטומטית",
    description: "אוטומציה מלאה של תהליכי איסוף, ניתוח והפקת דוחות עסקיים",
    tech: ["Make", "Google Sheets", "Data Analysis", "Visualization"],
    metrics: "דוחות בזמן אמת, 100% דיוק",
  },
  {
    title: "אינטגרציה רב-ערוצית",
    description: "חיבור וסנכרון של 15+ מערכות שונות לזרימת מידע אחידה",
    tech: ["Zapier", "REST API", "Webhooks", "Database Sync"],
    metrics: "סנכרון בזמן אמת, 0 שגיאות",
  },
  {
    title: "מערכת AI לניתוח תחושת לקוח",
    description: "ניתוח אוטומטי של פידבקים ותגובות לקוחות באמצעות NLP",
    tech: ["Python", "NLP", "Sentiment Analysis", "Visualization"],
    metrics: "ניתוח 1000+ פידבקים ביום",
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
                  <span>פרטים נוספים</span>
                  <ExternalLink className="w-4 h-4" />
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
