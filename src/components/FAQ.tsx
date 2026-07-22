import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="faq" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-[860px] mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold tracking-[-0.5px] text-center mb-12 text-[clamp(34px,4.6vw,60px)]"
        >
          כל מה שרציתם לשאול
        </motion.h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 px-1 text-right group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-right flex-1 transition-colors group-hover:text-primary text-[clamp(19px,2.2vw,24px)]">
                    {faq.q}
                  </span>
                  <span className="text-primary text-[26px] font-light shrink-0 leading-none">
                    {isOpen ? "−" : "+"}
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
                      <p className="pb-6 px-1 font-heebo font-light text-base text-muted-foreground leading-[1.7] text-right max-w-[660px]">
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
