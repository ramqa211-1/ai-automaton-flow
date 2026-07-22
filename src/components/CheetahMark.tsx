import { motion } from "framer-motion";

interface CheetahMarkProps {
  size?: number;
  opacity?: number;
  glow?: boolean;
  spin?: boolean;
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  className?: string;
  style?: React.CSSProperties;
}

const radiusMap = {
  none: "0",
  sm: "8px",
  md: "16px",
  lg: "24px",
  full: "9999px",
};

/**
 * Decorative cheetah mark — brain-ram-mark.png is the square crop of the brand
 * logo (cheetah only, wordmark excluded).
 * Used as a recurring brand motif across sections.
 */
const CheetahMark = ({
  size = 80,
  opacity = 1,
  glow = false,
  spin = false,
  rounded = "lg",
  className = "",
  style,
}: CheetahMarkProps) => {
  const glowStyle = glow
    ? { boxShadow: "0 0 40px rgba(16,185,129,0.5), 0 0 80px rgba(16,185,129,0.2)" }
    : {};

  const inner = (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radiusMap[rounded],
        overflow: "hidden",
        flexShrink: 0,
        ...glowStyle,
        ...style,
      }}
      className={className}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/brain-ram-mark.png`}
        alt=""
        aria-hidden="true"
        style={{ width: "100%", height: "auto", display: "block", opacity }}
      />
    </div>
  );

  if (spin) {
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ display: "inline-flex" }}
      >
        {inner}
      </motion.div>
    );
  }

  return inner;
};

export default CheetahMark;
