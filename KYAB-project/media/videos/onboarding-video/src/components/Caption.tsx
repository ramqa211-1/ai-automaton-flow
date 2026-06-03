import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, WIDTH } from "../theme";

/**
 * The single caption wrapper used on every beat. Anchored to a fixed
 * top-of-frame band, rises up + fades in from ~60px below, big headline size.
 *
 * Pass `staticEntry` on a continuation beat that shares the EXACT same text as
 * the previous beat, so the caption doesn't re-animate across the cut.
 */
export const TopCaption: React.FC<{
  children: React.ReactNode;
  staticEntry?: boolean;
}> = ({ children, staticEntry = false }) => {
  const frame = useCurrentFrame();

  const rise = staticEntry
    ? 0
    : interpolate(frame, [6, 22], [60, 0], {
        easing: Easing.bezier(0.16, 1, 0.3, 1),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
  const opacity = staticEntry
    ? 1
    : interpolate(frame, [6, 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        dir="rtl"
        style={{
          position: "absolute",
          top: 110,
          left: 0,
          width: WIDTH,
          display: "flex",
          justifyContent: "center",
          transform: `translateY(${rise}px)`,
          opacity,
        }}
      >
        <div
          style={{
            maxWidth: 880,
            textAlign: "center",
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: 60,
            lineHeight: 1.18,
            color: COLORS.text,
            textShadow: "0 6px 30px rgba(0,0,0,0.55)",
            padding: "0 40px",
          }}
        >
          {children}
        </div>
      </div>
    </AbsoluteFill>
  );
};
