import { motion } from "framer-motion";

const capabilities = [
  {
    image: "/src/assets/data.png",
    title: "ניתוח מערכות ותהליכים",
    description: "הבנה עמוקה של תהליכים עסקיים ומציאת נקודות ייעול",
  },
  {
    image: "/src/assets/projects.png",
    title: "ניהול פרויקטים טכנולוגיים",
    description: "הובלת פרויקטים מורכבים מהרעיון ועד המימוש",
  },
  {
    image: "/src/assets/mmtor.png",
    title: "הנחיה והדרכה",
    description: "העברת ידע והעצמה של אנשים וצוותים",
  },
  {
    image: "/src/assets/innovation.png",
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
              className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col items-center text-center gap-4 relative z-10">
                <div className="p-2 bg-background/50 rounded-2xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-24 h-24 object-contain neon-pulse"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
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
