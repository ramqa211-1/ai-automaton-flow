import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 cyber-grid opacity-60" />

      {/* Soft radial gradient overlay */}
      <div className="absolute inset-0 z-0 [background:radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(182,0,89,0.06)_0%,transparent_80%)]" />

      {/* Kinetic animated nodes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#b60059]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#b60059]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#b60059]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <svg className="absolute inset-0 w-full h-full stroke-primary opacity-10" fill="none">
          <motion.path
            d="M200 300 Q 500 100 900 420"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M900 420 Q 1100 600 1400 250"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20 mb-6">
                <span className="font-mono text-xs font-medium tracking-widest uppercase">AI Automation Specialist</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-4 gradient-text leading-tight font-inter">
                הופך טכנולוגיה מורכבת לפתרונות חכמים
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/50 font-inter">
                פיתוח, אוטומציה והדרכת AI
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed font-mono"
            >
              משלבים עוצמה של סוכני AI עם מהירות פיתוח מודרנית כדי לבנות את מה שחשוב באמת.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex gap-4 justify-end flex-wrap"
            >
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-white px-8 py-3.5 rounded-xl font-inter font-semibold text-sm flex items-center gap-2 electric-glow hover:bg-accent transition-all duration-300 active:scale-95"
              >
                צור קשר
                <span>←</span>
              </button>
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="glass-bento text-foreground px-8 py-3.5 rounded-xl font-inter font-semibold text-sm border border-primary/25 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                תיק עבודות
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative glass-bento rounded-3xl p-3 electric-glow">
                <img
                  src={heroImage}
                  alt="Ram Walastal"
                  className="rounded-2xl w-full max-w-md mx-auto shadow-xl border border-white/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
