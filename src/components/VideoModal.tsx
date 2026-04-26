import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DELAY_MS = 3500;
const VIDEO_ID = "9tZDZXcpWIA";
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&playsinline=1`;

const VideoModal = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  const close = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
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

          {/* Modal — portrait for Shorts */}
          <motion.div
            className="relative z-10 w-full max-w-sm"
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

            {/* 9:16 aspect ratio container */}
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20" style={{ aspectRatio: "9/16" }}>
              <iframe
                src={EMBED_URL}
                title="סרטון שיווקי"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

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
