import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-bento rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden gradient-border electric-glow"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-foreground font-inter leading-tight">
              רוצים להפוך רעיון למציאות<br />
              <span className="gradient-text">או להכניס AI לארגון שלכם?</span>
            </h2>

            <p className="font-mono text-sm text-foreground/60 max-w-xl mx-auto leading-relaxed">
              בואו נדבר. בין אם אתם צריכים פיתוח של מוצר חדש, אוטומציה שתחסוך לכם שעות עבודה,
              או הרצאה שתפתח לעובדים שלכם את הראש – אני כאן.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://wa.me/972548010190", "_blank")}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-xl font-inter font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#25D366]/25"
              >
                <MessageCircle className="w-5 h-5" />
                בוואטסאפ שלי
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 glass-bento text-primary px-8 py-4 rounded-xl font-inter font-semibold text-sm border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                קביעת שיחת ייעוץ
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
