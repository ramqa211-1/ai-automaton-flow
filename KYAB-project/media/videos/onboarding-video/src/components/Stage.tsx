import React from "react";
import { AbsoluteFill } from "remotion";
import { CAPTION_BAND, COLORS } from "../theme";
import { TopCaption } from "./Caption";

/**
 * Shared beat frame: tinted Neural-Velocity background + faint grid, the top
 * caption band, and a centered focal area where the cropped card piece lives.
 * Scenes pass the caption text and render their Slice + cursor/glow as children;
 * children sit in a `position: relative` box so cursor coords are card-local.
 */
export const Stage: React.FC<{
  caption: React.ReactNode;
  staticCaption?: boolean;
  children: React.ReactNode;
  subtitle?: React.ReactNode;
}> = ({ caption, staticCaption, children, subtitle }) => {
  return (
    <AbsoluteFill style={{ background: COLORS.bg }}>
      {/* tinted radial + faint grid */}
      <AbsoluteFill style={{ background: COLORS.bgGradient }} />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(900px 900px at 50% 40%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(900px 900px at 50% 40%, #000 0%, transparent 75%)",
        }}
      />

      {/* focal area — centered below the caption band */}
      <AbsoluteFill
        style={{
          paddingTop: CAPTION_BAND,
          paddingBottom: 520,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative" }}>{children}</div>
      </AbsoluteFill>

      <TopCaption staticEntry={staticCaption}>{caption}</TopCaption>

      {/* subtitle rendered here so its AbsoluteFill is relative to the full 1080×1920 frame */}
      {subtitle}
    </AbsoluteFill>
  );
};
