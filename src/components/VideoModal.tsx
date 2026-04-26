import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX } from "lucide-react";

const DELAY_MS = 3500;

const VideoModal = () => {
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      videoRef.current?.play().catch(() => {});
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  const close = () => {
    videoRef.current?.pause();
    setVisible(false);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-3xl mx-4"
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary transition-all duration-200 shadow-lg"
              aria-label="סגור"
            >
              <X size={18} />
            </button>

            {/* Video container */}
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20">
              <video
                ref={videoRef}
                src="/videos/marketing.mp4"
                muted
                playsInline
                loop
                className="w-full block"
              />

              {/* Mute toggle */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200"
                aria-label={muted ? "הפעל שמע" : "השתק"}
              >
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            {/* Skip hint */}
            <p className="text-center text-sm text-muted-foreground mt-3">
              לחץ על ✕ או על הרקע כדי לסגור
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
