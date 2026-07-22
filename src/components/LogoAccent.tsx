import { motion } from "framer-motion";

interface LogoAccentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "sm" | "md" | "lg";
  opacity?: number;
  animated?: boolean;
}

const LogoAccent = ({
  position = "top-right",
  size = "md",
  opacity = 0.08,
  animated = true,
}: LogoAccentProps) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  const logoContent = (
    <img
      src={`${import.meta.env.BASE_URL}images/brain-ram-mark.png`}
      alt="Brain Ram Logo Accent"
      className="w-full h-full object-cover rounded-lg filter grayscale"
      style={{ opacity }}
    />
  );

  if (animated) {
    return (
      <motion.div
        className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none -z-0`}
        initial={{ opacity: opacity * 0.5, rotate: 0 }}
        animate={{ opacity: opacity, rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {logoContent}
      </motion.div>
    );
  }

  return (
    <div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none -z-0`}
    >
      {logoContent}
    </div>
  );
};

export default LogoAccent;
