import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "כמה עולה פרויקט אצלך?",
    a: "המחיר משתנה לפי היקף — אוטומציה קטנה (n8n flow, סוכן WhatsApp) מתחילה בכמה אלפי שקלים, פרויקט פיתוח מלא נע בטווח של עשרות אלפים. בשיחת הגילוי החינמית אני נותן הערכת ROI ומחיר מדויקת.",
  },
  {
    q: "כמה זמן לוקח לסיים פרויקט?",
    a: "אני עובד ב-Sprints שבועיים עם demos חיים. אוטומציה ספציפית — 1–2 שבועות. סוכן AI מורכב — 3–6 שבועות. אפליקציה מלאה — 6–12 שבועות. בכל שלב יש תוצר נראה לעין, לא חודשי 'ייעוץ'.",
  },
  {
    q: "אני לא טכני — תוכל לעבוד איתי?",
    a: "בוודאי. זו בדיוק ההתמחות שלי — לתרגם דרישות עסקיות לפתרון טכנולוגי. אני בונה ממשק שאתה והצוות שלך תוכלו להפעיל בלי תלות בי, כולל תיעוד והדרכה.",
  },
  {
    q: "אתה עובד מרחוק או באתר הלקוח?",
    a: "שתי האופציות פתוחות. רוב הפרויקטים מתקדמים מרחוק עם פגישות זום שבועיות. בפרויקטים ארגוניים אני מגיע לאתר הלקוח בנקודות מפתח — קיק-אוף, סקירת ארכיטקטורה והכשרת צוות.",
  },
  {
    q: "מה קורה אחרי שהפרויקט עולה לאוויר?",
    a: "כל פרויקט כולל תיעוד מלא, הדרכת הצוות שלך, ותקופת תמיכה לאחר ההשקה. המטרה: שתוכלו להמשיך בלעדיי. אם בכל זאת תרצה תחזוקה מתמשכת — יש חבילות retainer חודשיות.",
  },
  {
    q: "האם אתה חתום על NDA?",
    a: "בהחלט. אני עובד עם חברות ביטוח גדולות וארגונים שמטפלים בנתונים רגישים. NDA נחתם לפני כל שיחה מעמיקה, וכל קוד/דאטה של הלקוח נשארים שלו בלעדית.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 px-8 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <HelpCircle className="w-7 h-7 text-emerald-400" />
            <h2 className="text-3xl md:text-4xl font-black text-foreground font-inter">
              שאלות נפוצות
            </h2>
          </div>
          <div className="kinetic-line max-w-xs mx-auto" />
          <p className="font-mono text-sm text-foreground/55 mt-4">
            התשובות שאני מקבל הכי הרבה בשיחות הגילוי
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="glass-bento rounded-xl border border-primary/15 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-right hover:bg-primary/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                  <span className="font-inter font-semibold text-sm md:text-base text-foreground flex-1 text-right">
                    {faq.q}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pt-1 font-mono text-sm text-foreground/65 leading-relaxed text-right border-t border-primary/10">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
