import { motion } from "framer-motion";
import { ScanSearch, Kanban, GraduationCap, BrainCircuit } from "lucide-react";

const capabilities = [
  {
    Icon: ScanSearch,
    title: "ניתוח מערכות ותהליכים",
    description: "הבנה עמוקה של תהליכים עסקיים ומציאת נקודות ייעול",
    badge: "Analysis",
    gradient: "from-violet-500/20 to-primary/20",
    iconBg: "bg-violet-500/15 border-violet-400/30",
    iconColor: "text-violet-600",
  },
  {
    Icon: Kanban,
    title: "ניהול פרויקטים טכנולוגיים",
    description: "הובלת פרויקטים מורכבים מהרעיון ועד המימוש",
    badge: "Management",
    gradient: "from-sky-500/20 to-cyan-400/20",
    iconBg: "bg-sky-500/15 border-sky-400/30",
    iconColor: "text-sky-600",
  },
  {
    Icon: GraduationCap,
    title: "הנחיה והדרכה",
    description: "העברת ידע והעצמה של אנשים וצוותים",
    badge: "Mentoring",
    gradient: "from-emerald-500/20 to-teal-400/20",
    iconBg: "bg-emerald-500/15 border-emerald-400/30",
    iconColor: "text-emerald-600",
  },
  {
    Icon: BrainCircuit,
    title: "חדשנות ופתרון בעיות",
    description: "גישה יצירתית למציאת פתרונות טכנולוגיים מתקדמים",
    badge: "Innovation",
    gradient: "from-primary/20 to-rose-400/20",
    iconBg: "bg-primary/15 border-primary/30",
    iconColor: "text-primary",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inter text-right md:text-center">
            יכולות אישיות
          </h2>
          <div className="kinetic-line max-w-sm mx-auto mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-bento rounded-2xl p-6 gradient-border electric-glow-hover group"
            >
              <div className="flex flex-col items-center text-center gap-4">
                {/* Gradient icon container */}
                <div className={`relative p-5 rounded-3xl bg-gradient-to-br ${item.gradient} border ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <item.Icon className={`w-10 h-10 ${item.iconColor}`} strokeWidth={1.5} />
                  {/* Subtle glow ring */}
                  <div className={`absolute inset-0 rounded-3xl ${item.iconBg} blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10`} />
                </div>

                <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                  <span className="font-mono text-xs font-medium tracking-wider">{item.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground font-inter group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-foreground/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
