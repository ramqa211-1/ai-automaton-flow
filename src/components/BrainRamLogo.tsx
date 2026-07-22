import { motion } from "framer-motion";

interface BrainRamLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

const sizes = {
  sm: { mark: 44, titleCls: "text-xs", subtitleCls: "text-[9px]" },
  md: { mark: 60, titleCls: "text-sm", subtitleCls: "text-[10px]" },
  lg: { mark: 80, titleCls: "text-base", subtitleCls: "text-xs" },
  xl: { mark: 104, titleCls: "text-xl", subtitleCls: "text-sm" },
};

const BrainRamLogo = ({ size = "md", showText = true, className = "", onClick }: BrainRamLogoProps) => {
  const { mark, titleCls, subtitleCls } = sizes[size];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`cursor-pointer flex items-center gap-3 select-none ${className}`}
    >
      {/* Cheetah mark — brain-ram-mark.png is already a square crop of the brand logo */}
      <div
        style={{ width: mark, height: mark }}
        className="overflow-hidden rounded-xl flex-shrink-0 ring-1 ring-emerald-500/40 shadow-[0_0_16px_rgba(16,185,129,0.25)]"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/brain-ram-mark.png`}
          alt="Brain Ram Services"
          className="w-full h-auto block"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none gap-1">
          <span className={`font-black tracking-[0.12em] text-white uppercase ${titleCls}`}>
            BRAIN RAM
          </span>
          <span className={`font-semibold tracking-[0.28em] text-emerald-400 uppercase ${subtitleCls}`}>
            SERVICES
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default BrainRamLogo;
