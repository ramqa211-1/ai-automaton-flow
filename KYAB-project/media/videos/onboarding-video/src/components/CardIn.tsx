import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Spring push-in for a card piece: scales up from 0.95, slides up a touch,
 * fades in. Gives each beat a UI-like "settle" instead of a hard appear.
 */
export const CardIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 2,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200, mass: 0.7 },
    durationInFrames: 26,
  });
  const scale = 0.95 + s * 0.05;
  const translateY = (1 - s) * 26;
  return (
    <div
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: Math.min(1, s * 1.2),
      }}
    >
      {children}
    </div>
  );
};
