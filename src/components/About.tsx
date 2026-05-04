import { motion } from "framer-motion";
import LogoAccent from "./LogoAccent";

const About = () => {
  return (
    <section id="about" className="py-24 px-8 surface-alt relative overflow-hidden">
      <LogoAccent position="top-left" size="md" opacity={0.05} animated={true} />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inter mb-2">אודותיי</h2>
          <div className="kinetic-line max-w-xs mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-bento rounded-3xl p-8 md:p-12 gradient-border electric-glow-hover"
        >
          <p className="font-mono text-sm md:text-base text-foreground/75 leading-relaxed mb-6 text-right">
            אני פריק של טכנולוגיה ו-AI, אבל לפני הכל – אני מאמין ביעילות. בשנים האחרונות אני חי ונושם את עולמות ה-Generative AI, וממיר כמעט כל תהליך ידני לאוטומציה חכמה.
          </p>
          <p className="font-mono text-sm md:text-base text-foreground/75 leading-relaxed mb-6 text-right">
            מהנדס QA Automation עם למעלה מ-10 שנות ניסיון, מתמחה כיום בבדיקות מונחות AI ואוטומציה חכמה.
            מומחה ב-Playwright, TypeScript, Selenium, ו-CI/CD. מוביל חדשנות בתחום Vision AI UI Validation,
            AI Agents וצ'אט בוטים, ומניע את עתיד האוטומציה עם פתרונות AI בעולם האמיתי.
          </p>
          <p className="font-mono text-sm md:text-base text-foreground/75 leading-relaxed text-right">
            "בין אם זה לבנות אפליקציה מורכבת ב-Loveable, לכתוב קוד מדויק ב-Cursor או להקים מערך סוכנים ב-n8n,
            המטרה שלי היא אחת: לקחת את הכלים החזקים ביותר שיש היום ולרתום אותם לטובת עסקים, אנשים ומשפחות."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
