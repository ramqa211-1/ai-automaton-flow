import { motion } from "framer-motion";
import { Building2, Bot, Heart, Sparkles, MessageSquare, Users } from "lucide-react";

const services = [
  {
    category: "פיתוח מוצרים וסוכני AI",
    icon: Building2,
    description: "אני בונה אפליקציות ודפי נחיתה מקצה לקצה תוך שימוש בכלי ה-AI המתקדמים בעולם.",
    items: [
      { title: "פיתוח ב-Cursor & Loveable", desc: "בניית אתרים ואפליקציות במהירות שיא ובסטנדרט גבוה." },
      { title: "ארכיטקטורת n8n", desc: "הקמת \"מוח\" מרכזי לארגון שמנהל דאטה, תהליכים וקבלת החלטות." },
      { title: "סוכני AI מותאמים", desc: "בניית סוכני שיווק לאיתור וטיפול מיידי בלידים בזמן אמת." },
    ],
  },
  {
    category: "אוטומציות שמשנות חיים",
    icon: Bot,
    description: "אוטומציה היא לא רק לעסקים, היא לחיים עצמם. הנה כמה דוגמאות למה שכבר רץ אצלי:",
    items: [
      { title: "Smart WhatsApp", desc: "תמלול הודעות קוליות אוטומטי וסוכן טלגרם חכם שמנהל את המייל." },
      { title: "Family First", desc: "מערכת ניטור הודעות פוגעניות בוואטסאפ של הילדים ותזכורות אוטומטיות לאשתי על משחקי כדורגל." },
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            מה אני עושה?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 gradient-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6 justify-end">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.category}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {service.description}
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-xl">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + itemIndex * 0.1, duration: 0.4 }}
                    className="bg-background/50 rounded-xl p-4 border border-border/50"
                  >
                    <h4 className="font-semibold text-foreground mb-1 text-right">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm text-right">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
