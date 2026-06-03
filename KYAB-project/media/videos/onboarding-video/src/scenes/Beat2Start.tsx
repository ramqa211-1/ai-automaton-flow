import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Stage } from "../components/Stage";
import { Slice } from "../components/Slice";
import { CardIn } from "../components/CardIn";
import { Pointer, TapDot } from "../components/Cursor";
import { SubtitleBar } from "../components/SubtitleBar";

// landing.png — zoomed to "מה המקצוע שלך?" grid + green "בוא נתחיל" button.
const SX = 555,
  SY = 185,
  SW = 765,
  SH = 470;
const W = 980;
const k = W / SW; // 1.281

// crop-local (native px) → card-local
const cl = (x: number) => x * k;

// taps: pick "שיווק" chip, then tap "בוא נתחיל"
const A = { x: cl(175), y: cl(185) }; // profession chip
const B = { x: cl(378), y: cl(378) }; // start button
const CENTER = { x: W / 2, y: (SH * k) / 2 };

const tapA = 48;
const tapB = 100;

/** Beat 2 — pick a profession + start. Two taps on the same UI (pattern B). */
export const Beat2Start: React.FC = () => {
  const frame = useCurrentFrame();

  const pointerOpacity = interpolate(
    frame,
    [8, 20, tapB + 15, tapB + 28],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const pathFrames = [20, tapA, tapA + 20, tapB];
  const ease = {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
  };
  const px = interpolate(frame, pathFrames, [CENTER.x, A.x, A.x, B.x], ease);
  const py = interpolate(frame, pathFrames, [CENTER.y, A.y, A.y, B.y], ease);

  return (
    <Stage
      caption="בוחרים מקצוע ומתחילים"
      subtitle={<SubtitleBar totalFrames={135}>בוחרים מקצוע מהרשימה ולוחצים &quot;בוא נתחיל&quot;</SubtitleBar>}
    >
      <CardIn>
        <Slice src="landing.png" sx={SX} sy={SY} sw={SW} sh={SH} width={W} />
        <Pointer x={px} y={py} opacity={pointerOpacity} />
        <TapDot tapAt={tapA} x={A.x} y={A.y} size={110} />
        <TapDot tapAt={tapB} x={B.x} y={B.y} size={150} />
      </CardIn>
    </Stage>
  );
};
