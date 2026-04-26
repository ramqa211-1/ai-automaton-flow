import { motion } from "framer-motion";

const capabilities = [
  {
    image: "/src/assets/data.png",
    title: "ניתוח מערכות ותהליכים",
    description: "הבנה עמוקה של תהליכים עסקיים ומציאת נקודות ייעול",
    badge: "Analysis",
  },
  {
    image: "/src/assets/projects.png",
    title: "ניהול פרויקטים טכנולוגיים",
    description: "הובלת פרויקטים מורכבים מהרעיון ועד המימוש",
    badge: "Management",
  },
  {
    image: "/src/assets/mmtor.png",
    title: "הנחיה והדרכה",
    description: "העברת ידע והעצמה של אנשים וצוותים",
    badge: "Mentoring",
  },
  {
    image: "/src/assets/innovation.png",
    title: "חדשנות ופתרון בעיות",
    description: "גישה יצירתית למציאת פתרונות טכנולוגיים מתקדמים",
    badge: "Innovation",
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
                <div className="p-3 bg-white/60 rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain neon-pulse"
                  />
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
