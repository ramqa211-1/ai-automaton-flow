import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            אודותיי
          </h2>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 gradient-border">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              מהנדס QA Automation עם למעלה מ-10 שנות ניסיון, מתמחה כיום בבדיקות מונחות AI ואוטומציה חכמה.
              מומחה ב-Playwright, TypeScript, Selenium, ו-CI/CD. מוביל חדשנות בתחום Vision AI UI Validation,
              AI Agents וצ'אט בוטים, ומניע את עתיד האוטומציה עם פתרונות AI מדרגיים בעולם האמיתי.
              בעל ניסיון מעשי עם Cursor IDE (custom rules), אוטומציות n8n, Supabase/Pinecone עבור זיכרון AI,
              ואינטגרציות Slack/WhatsApp, ומספק מערכות מקצה לקצה חדשניות.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
