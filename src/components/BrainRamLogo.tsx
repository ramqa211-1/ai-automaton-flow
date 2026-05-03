import { motion } from "framer-motion";

interface BrainRamLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

const BrainRamLogo = ({
  size = "md",
  showText = true,
  className = "",
  onClick,
}: BrainRamLogoProps) => {
  const sizeConfig = {
    sm: { height: "h-8", img: "h-8" },
    md: { height: "h-10", img: "h-10" },
    lg: { height: "h-16", img: "h-16" },
    xl: { height: "h-20", img: "h-20" },
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
      className={`cursor-pointer flex items-center gap-3 group ${className}`}
    >
      <div className={`${config.img} flex-shrink-0 relative overflow-hidden rounded-lg`}>
        <img
          src="/images/brain-ram-logo.jpg"
          alt="Brain Ram Services"
          className="w-full h-full object-cover"
        />
      </div>

      {showText && size !== "sm" && (
        <div className="flex flex-col leading-tight">
          <span className="font-black text-xs md:text-sm tracking-wider text-foreground uppercase">
            Brain Ram
          </span>
          <span className="font-light text-xs text-primary">SERVICES</span>
        </div>
      )}
    </motion.div>
  );
};

export default BrainRamLogo;
