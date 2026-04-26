import { motion } from "framer-motion";
import { Building2, Bot, Zap } from "lucide-react";

const services = [
  {
    category: "פיתוח מוצרים וסוכני AI",
    icon: Building2,
    description: "אני בונה אפליקציות ודפי נחיתה מקצה לקצה תוך שימוש בכלי ה-AI המתקדמים בעולם.",
    items: [
      { num: "01", title: "פיתוח ב-Cursor & Loveable", desc: "בניית אתרים ואפליקציות במהירות שיא ובסטנדרט גבוה." },
      { num: "02", title: "ארכיטקטורת n8n", desc: "הקמת מוח מרכזי לארגון שמנהל דאטה, תהליכים וקבלת החלטות." },
      { num: "03", title: "סוכני AI מותאמים", desc: "בניית סוכני שיווק לאיתור וטיפול מיידי בלידים בזמן אמת." },
    ],
    large: true,
  },
  {
    category: "אוטומציות שמשנות חיים",
    icon: Bot,
    description: "אוטומציה היא לא רק לעסקים, היא לחיים עצמם.",
    items: [
      { num: "01", title: "Smart WhatsApp", desc: "תמלול הודעות קוליות אוטומטי וסוכן טלגרם חכם שמנהל את המייל." },
      { num: "02", title: "Family First", desc: "ניטור הודעות פוגעניות בוואטסאפ של הילדים ותזכורות חכמות." },
    ],
    large: false,
  },
  {
    category: "אינטגרציות ארגוניות",
    icon: Zap,
    description: "חיבור מערכות AI לסביבות עסקיות מורכבות.",
    items: [
      { num: "01", title: "Enterprise AI", desc: "חיבור AI Agents למערכות כמו Azure DevOps לאוטומציה מלאה." },
    ],
    large: false,
  },
];

const SectionHeader = ({ title }: { title: string }) => (
  <div className="space-y-2 mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-foreground font-inter"
    >
      {title}
    </motion.h2>
    <div className="kinetic-line" />
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="מה אני עושה?" />

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:h-[580px]">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 glass-bento rounded-3xl p-8 flex flex-col justify-between electric-glow-hover gradient-border"
          >
            <div className="space-y-4 text-right">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20 mr-auto">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-inter">{services[0].category}</h3>
              <p className="font-mono text-sm text-foreground/60 leading-relaxed">{services[0].description}</p>
            </div>

            <div className="space-y-3 mt-6">
              {services[0].items.map((item) => (
                <div
                  key={item.num}
                  className="flex gap-4 p-4 bg-white/40 rounded-xl border border-white/50 text-right"
                >
                  <div className="font-mono text-xs text-primary font-semibold shrink-0 mt-0.5">{item.num}</div>
                  <div>
                    <p className="font-inter font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="font-mono text-xs text-foreground/55 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Small card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="glass-bento rounded-3xl p-6 flex flex-col justify-between electric-glow-hover gradient-border"
          >
            <div className="space-y-3 text-right">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 mr-auto">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground font-inter">{services[1].category}</h3>
              <p className="font-mono text-xs text-foreground/55 leading-relaxed">{services[1].description}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-primary/10">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">Active Automation...</span>
            </div>
          </motion.div>

          {/* Small card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-bento rounded-3xl p-6 flex flex-col justify-between electric-glow-hover gradient-border"
          >
            <div className="space-y-3 text-right">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 mr-auto">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground font-inter">{services[2].category}</h3>
              <p className="font-mono text-xs text-foreground/55 leading-relaxed">{services[2].description}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-primary/10 flex justify-between items-center">
              <span className="font-mono text-xs text-foreground/40">Enterprise Ready</span>
              <div className="w-5 h-5 text-primary">✓</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
