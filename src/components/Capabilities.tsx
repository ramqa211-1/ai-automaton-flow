import { motion } from "framer-motion";
import { Network, Briefcase, Users, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Network,
    title: "ניתוח מערכות ותהליכים",
    description: "הבנה עמוקה של תהליכים עסקיים ומציאת נקודות ייעול",
  },
  {
    icon: Briefcase,
    title: "ניהול פרויקטים טכנולוגיים",
    description: "הובלת פרויקטים מורכבים מהרעיון ועד המימוש",
  },
  {
    icon: Users,
    title: "הנחיה והדרכה",
    description: "העברת ידע והעצמה של אנשים וצוותים",
  },
  {
    icon: Zap,
    title: "חדשנות ופתרון בעיות",
    description: "גישה יצירתית למציאת פתרונות טכנולוגיים מתקדמים",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            יכולות אישיות
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-secondary/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-secondary/10 rounded-full glow-secondary">
                  <item.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
