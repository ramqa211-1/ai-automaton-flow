import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            ראה את זה בפעולה
          </h2>
          <p className="text-muted-foreground text-lg">
            הדגמה חיה של יכולות האוטומציה
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10"
        >
          <video
            ref={videoRef}
            src="/videos/marketing.mov"
            muted
            loop
            playsInline
            controls
            className="w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
