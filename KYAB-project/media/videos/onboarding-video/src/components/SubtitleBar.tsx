import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, WIDTH } from "../theme";

/**
 * Subtitle strip anchored to the bottom of the frame.
 * Fades in quickly at the start of each beat, stays visible, fades out near end.
 */
export const SubtitleBar: React.FC<{ children: React.ReactNode; totalFrames: number }> = ({
  children,
  totalFrames,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [4, 14, totalFrames - 20, totalFrames - 6],
    [0, 1, 1, 0],
    {
      easing: Easing.bezier(0.16, 1, 0.3, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 0,
          width: WIDTH,
          display: "flex",
          justifyContent: "center",
          opacity,
        }}
      >
        <div
          dir="rtl"
          style={{
            maxWidth: 880,
            textAlign: "center",
            fontFamily: FONT,
            fontWeight: 600,
            fontSize: 40,
            lineHeight: 1.4,
            color: COLORS.text,
            background: "rgba(7, 11, 20, 0.72)",
            backdropFilter: "blur(6px)",
            borderRadius: 18,
            padding: "18px 36px",
            border: "1px solid rgba(52, 211, 153, 0.18)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {children}
        </div>
      </div>
    </AbsoluteFill>
  );
};
