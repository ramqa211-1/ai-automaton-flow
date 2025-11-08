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
              אני מאמין שאוטומציה לא נועדה להחליף אנשים – היא נועדה לשחרר אותם ממה שלא דורש אנושיות.
              בעשור האחרון אני מלווה עסקים ואנשים בבנייה של מערכות חכמות שמשלבות טכנולוגיה ותובנה אנושית.
              התמחותי היא בפיתוח פתרונות אוטומציה מתקדמים המשלבים AI, אינטגרציות מורכבות, וחשיבה מערכתית
              כדי להביא לתוצאות מדידות ומשמעותיות.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
