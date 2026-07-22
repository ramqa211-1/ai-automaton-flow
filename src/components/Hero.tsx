import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

// The headline is split so each line can stagger in on its own, and so the
// last line can carry the marker-pen highlight from the design.
const headline = ["AI שגורם", "לארגון שלכם"];
const highlighted = "לעצור נשימה";

const stack = ["CLAUDE", "GPT", "n8n", "PLAYWRIGHT", "TYPESCRIPT", "LLM"];

const lineIn = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden"
  >
    <div className="relative z-10 max-w-[1240px] w-full mx-auto">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        {/* ---------- Copy ---------- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-sm tracking-[3px] text-muted-foreground mb-9"
          >
            <span className="w-[34px] h-px bg-primary" />
            הרצאות · הטמעה · אוטומציות AI
          </motion.div>

          <h1 className="font-display font-extrabold text-foreground leading-[0.98] tracking-[-1px] mb-8 text-[clamp(46px,7vw,104px)]">
            {headline.map((line, i) => (
              <motion.span
                key={line}
                variants={lineIn}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            ))}

            <motion.span
              variants={lineIn}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.8, delay: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
              className="block relative w-fit"
            >
              {/* marker swipe behind the words */}
              <span
                aria-hidden
                className="anim-marker absolute top-[8%] bottom-[2%] -inset-x-2 bg-primary"
                style={{ transform: "skewX(-4deg) rotate(-1deg)" }}
              />
              <span className="relative text-primary-foreground px-1">{highlighted}</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-[520px] font-heebo font-light leading-[1.7] text-muted-foreground mb-10 text-[clamp(17px,1.8vw,20px)]"
          >
            לא עוד "כלי AI". אני בונה איתכם שינוי אמיתי — מהרצאה שמדליקה את הצוות, דרך הטמעה
            מאפס, ועד אוטומציות מותאמות שרצות בשקט ומחזירות לכם את הזמן.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex gap-5 items-center flex-wrap"
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-9 py-4 rounded-full bg-primary text-primary-foreground font-heebo font-bold text-[17px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(var(--brand-rgb)/0.35)] active:scale-95"
            >
              קבעו שיחת ייעוץ
            </button>
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="font-heebo font-semibold text-[17px] text-foreground border-b border-foreground/30 pb-1 transition-colors duration-300 hover:text-primary hover:border-primary"
            >
              תיק עבודות ←
            </button>
          </motion.div>
        </div>

        {/* ---------- Portrait ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative order-first lg:order-none max-w-sm mx-auto lg:max-w-none w-full"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[200px] rounded-b-3xl border border-primary/20">
            <img
              src={heroImage}
              alt="Ram Walastal"
              className="anim-pan absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background/70" />
          </div>

          <div className="absolute bottom-6 -right-2 md:-right-[18px] bg-card border border-primary/25 rounded-2xl px-5 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div dir="ltr" className="font-display text-3xl font-extrabold text-primary leading-none">
              10+
            </div>
            <div className="text-xs text-muted-foreground mt-1">שנות הנדסה ואוטומציה</div>
          </div>
        </motion.div>
      </div>

      {/* ---------- Stack strip ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex gap-x-6 gap-y-3 flex-wrap mt-16 text-sm tracking-[1px] text-muted-foreground/70"
      >
        {stack.map((tech, i) => (
          <span key={tech} className="flex items-center gap-6">
            {tech}
            {i < stack.length - 1 && <span className="opacity-30">/</span>}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
