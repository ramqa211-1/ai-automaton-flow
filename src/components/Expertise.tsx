import { motion } from "framer-motion";
import { Code, Cpu, Link2, Database, Sparkles, Layout } from "lucide-react";

const skills = [
  { name: "Python & Node.js", icon: Code, level: 95 },
  { name: "n8n, Make, Zapier", icon: Cpu, level: 90 },
  { name: "GPT Automation", icon: Sparkles, level: 92 },
  { name: "API Integration", icon: Link2, level: 88 },
  { name: "Data Pipelines", icon: Database, level: 85 },
  { name: "UX for Automation", icon: Layout, level: 87 },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            תחומי התמחות
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 justify-end">
                <span className="text-lg font-medium text-foreground">
                  {skill.name}
                </span>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{ 
                    boxShadow: `0 0 15px hsl(var(--primary) / 0.5)` 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
