import React from "react";
import { Img, staticFile } from "remotion";

/**
 * Crops a source rectangle (sx, sy, sw, sh — natural pixels of the screenshot)
 * out of a still and renders just that piece as a rounded "card" of `width`.
 * Everything outside the rect is clipped — this is how we show a *piece* of the
 * UI, not the whole screen.
 *
 * Card-local coordinate space: (0,0) is the card's top-left, the card is
 * `width` wide and `width * sh/sw` tall. To target a source pixel (px,py),
 * map it to card-local with: localX = width*(px-sx)/sw, localY = h*(py-sy)/sh.
 * The `mapX` / `mapY` helpers below do exactly that.
 */
export const Slice: React.FC<{
  src: string;
  sx: number;
  sy: number;
  sw: number;
  sh: number;
  width: number;
  radius?: number;
}> = ({ src, sx, sy, sw, sh, width, radius = 28 }) => {
  const scale = width / sw;
  const height = sh * scale;
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        overflow: "hidden",
        borderRadius: radius,
        border: "1px solid rgba(52, 211, 153, 0.22)",
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(15,23,42,0.4), 0 0 60px rgba(16,185,129,0.10)",
      }}
    >
      <Img
        src={staticFile(src)}
        style={{
          position: "absolute",
          left: -sx * scale,
          top: -sy * scale,
          width: "auto",
          height: "auto",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          maxWidth: "none",
        }}
      />
    </div>
  );
};

/** Map a source-pixel X into card-local X for a given Slice crop. */
export const mapX = (px: number, sx: number, sw: number, width: number) =>
  (width * (px - sx)) / sw;

/** Map a source-pixel Y into card-local Y for a given Slice crop. */
export const mapY = (py: number, sy: number, sh: number, width: number, sw: number) => {
  const scale = width / sw;
  return (py - sy) * scale;
};
