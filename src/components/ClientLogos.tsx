import { motion } from "framer-motion";

const clients = [
  { name: "ביטוח ישיר", initials: "BI", color: "from-blue-500 to-blue-700" },
  { name: "מכללת ניו מדיה", initials: "NM", color: "from-violet-500 to-purple-700" },
  { name: "תיכון עמל חדרה", initials: "EC", color: "from-emerald-500 to-teal-700" },
  { name: "קהילת VIBE HUB", initials: "VH", color: "from-orange-500 to-rose-600" },
  { name: "מכללת SVCOLLEGE", initials: "SV", color: "from-primary to-accent" },
];

// Duplicate for seamless loop
const doubled = [...clients, ...clients, ...clients];

const ClientLogos = () => (
  <section className="py-16 px-0 relative overflow-hidden bg-background">
    <div className="max-w-7xl mx-auto px-8 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="inline-block font-mono text-xs text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-3">
          לקוחות
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-foreground font-inter">
          ארגונים שעבדתי איתם
        </h2>
        <div className="kinetic-line max-w-xs mx-auto mt-2" />
      </motion.div>
    </div>

    {/* Fade edges */}
    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

    {/* Marquee track */}
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        className="flex gap-5 w-max"
      >
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex items-center gap-3 glass-bento rounded-2xl px-6 py-4 border border-white/30 shrink-0 min-w-[200px] group hover:border-primary/30 transition-all duration-300"
          >
            {/* Monogram avatar */}
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-inter font-black text-sm shrink-0 shadow-md`}>
              {client.initials}
            </div>
            <span className="font-inter font-semibold text-sm text-foreground/75 group-hover:text-foreground transition-colors whitespace-nowrap">
              {client.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ClientLogos;
