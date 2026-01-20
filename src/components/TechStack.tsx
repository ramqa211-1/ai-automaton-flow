import { motion } from "framer-motion";
import { Code, Bot, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "פיתוח ואפליקציות",
    icon: Code,
    color: "from-primary to-primary/50",
    techs: ["Loveable", "TypeScript", "Web Apps"],
  },
  {
    title: "אוטומציה וסוכנים",
    icon: Bot,
    color: "from-secondary to-secondary/50",
    techs: ["n8n", "AI Agents", "WhatsApp Automation"],
  },
  {
    title: "כלי מפתחים",
    icon: Wrench,
    color: "from-accent to-accent/50",
    techs: ["Cursor", "Playwright", "Prompt Engineering"],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            הטכנולוגיות שאני שולט בהן
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 gradient-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 justify-end">
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-end">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + techIndex * 0.1, duration: 0.3 }}
                    className="px-4 py-2 bg-background/80 border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
