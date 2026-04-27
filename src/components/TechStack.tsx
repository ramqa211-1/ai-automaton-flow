import { motion } from "framer-motion";
import { Code, Bot, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "פיתוח ואפליקציות",
    icon: Code,
    status: "Production Ready",
    techs: ["Loveable", "TypeScript", "React", "Web Apps"],
  },
  {
    title: "אוטומציה וסוכנים",
    icon: Bot,
    status: "Active Pipelines",
    techs: ["n8n", "AI Agents", "WhatsApp API", "OpenAI"],
  },
  {
    title: "כלי מפתחים",
    icon: Wrench,
    status: "Daily Stack",
    techs: ["Claude Code", "Cursor IDE", "Playwright", "Prompt Engineering", "MCP"],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 px-8 surface-alt relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inter text-right md:text-center">
            הטכנולוגיות שאני שולט בהן
          </h2>
          <div className="kinetic-line max-w-sm mx-auto mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-bento rounded-3xl p-6 gradient-border electric-glow-hover flex flex-col gap-5"
            >
              <div className="flex items-center gap-3 justify-end">
                <h3 className="text-lg font-bold text-foreground font-inter">{category.title}</h3>
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20">
                  <category.icon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-end">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white/60 border border-primary/15 rounded-full font-mono text-xs font-medium text-foreground/70 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-primary/10">
                <span className="font-mono text-xs text-primary uppercase tracking-widest">{category.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
