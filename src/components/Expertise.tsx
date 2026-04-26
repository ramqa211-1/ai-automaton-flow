import { motion } from "framer-motion";
import { Code, Cpu, Sparkles, Database } from "lucide-react";

const skills = [
  { name: "Playwright & TypeScript", icon: Code, level: 95 },
  { name: "AI & LLM Integration", icon: Sparkles, level: 92 },
  { name: "n8n & Automation Platforms", icon: Cpu, level: 90 },
  { name: "Python & Node.js", icon: Code, level: 88 },
  { name: "CI/CD & Jenkins", icon: Database, level: 87 },
  { name: "Vision AI & GPT-4", icon: Sparkles, level: 93 },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 px-8 surface-alt relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inter text-right md:text-center">
            תחומי התמחות
          </h2>
          <div className="kinetic-line max-w-sm mx-auto mt-2" />
        </motion.div>

        <div className="glass-bento rounded-3xl p-8 gradient-border">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3 justify-end">
                  <span className="font-inter font-semibold text-sm text-foreground">{skill.name}</span>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/15">
                    <skill.icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-end">
                  <span className="font-mono text-xs text-primary font-semibold w-10 text-left">{skill.level}%</span>
                  <div className="relative flex-1 h-2 bg-primary/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      className="absolute right-0 top-0 h-full bg-gradient-to-l from-primary to-accent rounded-full"
                      style={{ boxShadow: "0 0 8px rgba(182,0,89,0.4)" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
