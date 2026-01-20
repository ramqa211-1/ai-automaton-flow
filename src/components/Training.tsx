import { motion } from "framer-motion";
import { GraduationCap, Building, Mic, Users } from "lucide-react";

const trainingItems = [
  {
    icon: Building,
    title: "הטמעת טכנולוגיה בארגונים",
    description: "פרויקטים של הטמעת Loveable ו-n8n בחברות ביטוח גדולות לייעול תהליכי עבודה.",
  },
  {
    icon: Mic,
    title: "הרצאות מקצועיות",
    description: "הרצאות על ה-Edge של הטכנולוגיה (כמו MCP Playwright) למפתחים ולאנשי טכנולוגיה.",
  },
  {
    icon: Users,
    title: "הדור הבא",
    description: "סדנאות והרצאות לבני נוער על עתיד ה-AI ואיך לרתום אותו ליצירה.",
  },
];

const Training = () => {
  return (
    <section id="training" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            הדרכות, הרצאות ומנטורינג
          </h2>
          <p className="text-xl text-muted-foreground">
            אני לא רק בונה, אני גם מלמד. הניסיון שלי כולל:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center gradient-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
