import { motion } from "framer-motion";
import { GraduationCap, Building, Mic, Users } from "lucide-react";

const trainingItems = [
  {
    icon: Building,
    title: "הטמעת טכנולוגיה בארגונים",
    description: "פרויקטים של הטמעת Loveable ו-n8n בחברות ביטוח גדולות לייעול תהליכי עבודה.",
    badge: "Enterprise",
  },
  {
    icon: Mic,
    title: "הרצאות מקצועיות",
    description: "הרצאות על ה-Edge של הטכנולוגיה (כמו MCP Playwright) למפתחים ולאנשי טכנולוגיה.",
    badge: "Tech Talks",
  },
  {
    icon: Users,
    title: "הדור הבא",
    description: "סדנאות והרצאות לבני נוער על עתיד ה-AI ואיך לרתום אותו ליצירה.",
    badge: "Youth",
  },
];

const Training = () => {
  return (
    <section id="training" className="py-24 px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inter">
              הדרכות, הרצאות ומנטורינג
            </h2>
          </motion.div>
          <div className="kinetic-line max-w-sm mx-auto" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-sm text-foreground/55 mt-4"
          >
            אני לא רק בונה, אני גם מלמד. הניסיון שלי כולל:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trainingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-bento rounded-3xl p-8 text-center gradient-border electric-glow-hover flex flex-col items-center gap-4 group"
            >
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                <span className="font-mono text-xs font-medium tracking-wider">{item.badge}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground font-inter">{item.title}</h3>
              <p className="font-mono text-xs text-foreground/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
