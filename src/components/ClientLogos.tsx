import { motion } from "framer-motion";
import { useState } from "react";

const base = import.meta.env.BASE_URL;

const clients = [
  {
    name: "ביטוח ישיר",
    initials: "BI",
    color: "from-blue-500 to-blue-700",
    logo: `${base}images/bituch-yashar.png`,
  },
  {
    name: "מכללת ניו מדיה",
    initials: "NM",
    color: "from-violet-500 to-purple-700",
    logo: `${base}images/new-media.png`,
  },
  {
    name: "תיכון עמל חדרה",
    initials: "EC",
    color: "from-emerald-500 to-teal-700",
    logo: `${base}images/amal.png`,
  },
  {
    name: "קהילת VIBE HUB",
    initials: "VH",
    color: "from-orange-500 to-rose-600",
    logo: `${base}images/media-posts/vibehib.png`,
  },
  {
    name: "מכללת SVCOLLEGE",
    initials: "SV",
    color: "from-primary to-accent",
    logo: `${base}images/SVC.jpg`,
  },
  {
    name: "שמוליק אבוקסיס",
    initials: "SA",
    color: "from-slate-600 to-slate-800",
    logo: `${base}images/shmoulik.png`,
  },
];

const doubled = [...clients, ...clients, ...clients];

const LogoAvatar = ({
  client,
}: {
  client: (typeof clients)[0];
}) => {
  const [imgError, setImgError] = useState(false);

  if (client.logo && !imgError) {
    return (
      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white flex items-center justify-center shrink-0 shadow-md border border-white/50">
        <img
          src={client.logo}
          alt={client.name}
          className="w-full h-full object-contain p-1"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-inter font-black text-lg shrink-0 shadow-md`}
    >
      {client.initials}
    </div>
  );
};

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
          לקוחות מרוצים (:
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
            className="flex flex-col items-center gap-2 glass-bento rounded-2xl px-5 py-4 border border-white/30 shrink-0 w-[120px] group hover:border-primary/30 transition-all duration-300"
          >
            <LogoAvatar client={client} />
            <span className="font-inter font-medium text-[10px] text-foreground/60 group-hover:text-foreground/90 transition-colors text-center leading-tight">
              {client.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ClientLogos;
