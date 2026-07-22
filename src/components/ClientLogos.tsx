import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const base = import.meta.env.BASE_URL;

const clients = [
  {
    name: "ביטוח ישיר",
    initials: "BI",
    color: "from-blue-500 to-blue-700",
    logo: `${base}images/bituch-yashar.png`,
    note: "",
  },
  {
    name: "מכללת ניו מדיה",
    initials: "NM",
    color: "from-violet-500 to-purple-700",
    logo: `${base}images/new-media.png`,
    note: "סוכן AI לאיסוף לידים בוואטסאפ",
  },
  {
    name: "תיכון עמל חדרה",
    initials: "EC",
    color: "from-emerald-500 to-teal-700",
    logo: `${base}images/amal.png`,
    note: "",
  },
  {
    name: "קהילת VIBE HUB",
    initials: "VH",
    color: "from-orange-500 to-rose-600",
    logo: `${base}images/media-posts/vibehib.png`,
    note: "",
  },
  {
    name: "מכללת SVCOLLEGE",
    initials: "SV",
    color: "from-primary to-accent",
    logo: `${base}images/SVC.jpg`,
    note: "",
  },
  {
    name: "שמוליק אבוקסיס",
    initials: "SA",
    color: "from-slate-600 to-slate-800",
    logo: `${base}images/shmoulik.png`,
    note: "אתר עסקי + דף נחיתה ממיר",
  },
];

type Client = (typeof clients)[number];

const AUTOPLAY_MS = 4000;

const LogoAvatar = ({ client }: { client: Client }) => {
  const [imgError, setImgError] = useState(false);

  if (client.logo && !imgError) {
    return (
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-white flex items-center justify-center shrink-0 shadow-lg">
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain p-2.5"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-inter font-black text-3xl shrink-0 shadow-lg`}
    >
      {client.initials}
    </div>
  );
};

/**
 * Signed distance from `active` on a circular track, so the deck wraps
 * instead of snapping back to the start (e.g. index 5 sits at -1 of index 0).
 */
const circularOffset = (index: number, active: number, total: number) => {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
};

const ClientLogos = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  const total = clients.length;
  const visibleDepth = isMobile ? 1 : 2;

  const go = useCallback(
    (delta: number) => setActive((prev) => (prev + delta + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reduceMotion, go]);

  // RTL: ArrowRight moves toward the previous card, ArrowLeft toward the next.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(-1);
    }
  };

  // Native pointer swipe — framer-motion's `drag` would enable projection on the
  // deck and clobber the per-card animate transforms.
  const [swipeStart, setSwipeStart] = useState<number | null>(null);

  const onPointerUp = (e: React.PointerEvent) => {
    if (swipeStart === null) return;
    const delta = e.clientX - swipeStart;
    setSwipeStart(null);
    if (delta < -60) go(1);
    else if (delta > 60) go(-1);
  };

  return (
    <section
      className="py-20 px-0 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 scroll-mt-28"
      id="clients"
      aria-roledescription="carousel"
      aria-label="לקוחות שעבדו איתנו"
    >
      {/* Magenta glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block font-mono text-xs text-primary uppercase tracking-widest bg-primary/15 border border-primary/30 px-4 py-1.5 rounded-full mb-3">
            לקוחות
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white font-inter">
            לקוחות שעבדו איתנו
          </h3>
          <div className="kinetic-line max-w-xs mx-auto mt-2" />
        </motion.div>
      </div>

      {/* Coverflow deck */}
      <div
        className="relative z-10 h-[300px] md:h-[330px] flex items-center justify-center select-none"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onKeyDown={onKeyDown}
        onPointerDown={(e) => setSwipeStart(e.clientX)}
        onPointerUp={onPointerUp}
        onPointerCancel={() => setSwipeStart(null)}
        tabIndex={0}
      >
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {clients.map((client, i) => {
            const offset = circularOffset(i, active, total);
            const depth = Math.abs(offset);
            const isActive = depth === 0;
            const hidden = depth > visibleDepth;

            const spacing = isMobile ? 150 : 220;
            const tilt = reduceMotion ? 0 : depth === 1 ? 35 : 45;

            return (
              <motion.button
                key={client.name}
                type="button"
                onClick={() => !isActive && setActive(i)}
                aria-label={client.name}
                aria-hidden={hidden}
                tabIndex={hidden ? -1 : 0}
                className={`absolute top-1/2 left-1/2 w-[210px] md:w-[240px] h-[250px] md:h-[280px] rounded-3xl flex flex-col items-center justify-center gap-4 px-5 text-center backdrop-blur-md transition-colors duration-300 ${
                  isActive
                    ? "bg-white/10 border-2 border-primary shadow-2xl shadow-primary/40"
                    : "bg-white/5 border border-white/10 cursor-pointer"
                } ${hidden ? "pointer-events-none" : ""}`}
                style={{ transformStyle: "preserve-3d", marginTop: -140, marginLeft: -120 }}
                animate={{
                  x: offset * spacing,
                  rotateY: -Math.sign(offset) * tilt,
                  scale: isActive ? 1 : depth === 1 ? 0.82 : 0.68,
                  opacity: hidden ? 0 : isActive ? 1 : depth === 1 ? 0.55 : 0.3,
                  zIndex: total - depth,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
              >
                <LogoAvatar client={client} />

                <div className="flex flex-col gap-1 min-h-[42px] justify-start">
                  <span
                    className={`font-inter font-bold text-sm leading-tight ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {client.name}
                  </span>
                  {client.note && (
                    <span className="font-mono text-[11px] text-primary leading-tight">
                      {client.note}
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 flex items-center justify-center gap-5 mt-8">
        {/* RTL: first child renders rightmost, so "previous" sits on the right */}
        <button
          onClick={() => go(-1)}
          aria-label="הלקוח הקודם"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-200"
        >
          <ChevronRight size={18} />
        </button>

        <div className="flex items-center gap-2">
          {clients.map((client, i) => (
            <button
              key={client.name}
              onClick={() => setActive(i)}
              aria-label={`עבור אל ${client.name}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-primary" : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="הלקוח הבא"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-200"
        >
          <ChevronLeft size={18} />
        </button>
      </div>
    </section>
  );
};

export default ClientLogos;
