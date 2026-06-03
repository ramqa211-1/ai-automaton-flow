// src/components/Cursor.tsx — copied from the skill's resources/cursor-component.md.
import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

/**
 * iOS-style touch indicator — a translucent circle that appears at a tap
 * point and pulses outward.
 */
export const TapDot: React.FC<{
  tapAt: number;
  x: number;
  y: number;
  size?: number;
  color?: string;
}> = ({ tapAt, x, y, size = 110, color = "rgba(52, 211, 153, 0.55)" }) => {
  const frame = useCurrentFrame();
  const fade = interpolate(
    frame,
    [tapAt - 4, tapAt, tapAt + 18, tapAt + 28],
    [0, 1, 0.35, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const ringScale = interpolate(frame, [tapAt, tapAt + 24], [0.4, 1.8], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ringFade = interpolate(frame, [tapAt, tapAt + 24], [0.7, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dotScale = interpolate(
    frame,
    [tapAt - 4, tapAt, tapAt + 8],
    [1, 0.78, 1],
    {
      easing: Easing.bezier(0.34, 1.56, 0.64, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  return (
    <div
      style={{
        position: "absolute",
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: `3px solid ${color}`,
          opacity: ringFade,
          transform: `scale(${ringScale})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: color,
          opacity: fade,
          transform: `scale(${dotScale})`,
        }}
      />
    </div>
  );
};

/**
 * Persistent translucent dot. Use to *lead* the eye to the tap target.
 * Required on any beat that has a tap or selection.
 */
export const Pointer: React.FC<{
  x: number;
  y: number;
  size?: number;
  opacity?: number;
}> = ({ x, y, size = 64, opacity = 1 }) => (
  <div
    style={{
      position: "absolute",
      left: x - size / 2,
      top: y - size / 2,
      width: size,
      height: size,
      borderRadius: "50%",
      background: "rgba(15, 23, 42, 0.42)",
      border: "4px solid rgba(255, 255, 255, 0.85)",
      boxShadow: "0 8px 24px rgba(15, 23, 42, 0.28)",
      opacity,
      pointerEvents: "none",
    }}
  />
);

/**
 * Look-here pulse for *illustrative* beats. No tap implied.
 */
export const GlowRing: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  startAt: number;
  duration?: number;
  color?: string;
  radius?: number;
}> = ({
  x,
  y,
  width,
  height,
  startAt,
  duration = 36,
  color = "rgba(52, 211, 153, 0.85)",
  radius = 999,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame,
    [startAt, startAt + duration / 2, startAt + duration],
    [0, 1, 0],
    {
      easing: Easing.bezier(0.45, 0, 0.55, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const scale = 1 + progress * 0.08;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        borderRadius: radius,
        boxShadow: `0 0 0 4px ${color}, 0 0 30px 6px ${color}`,
        opacity: progress,
        transform: `scale(${scale})`,
        transformOrigin: "center",
        pointerEvents: "none",
      }}
    />
  );
};
