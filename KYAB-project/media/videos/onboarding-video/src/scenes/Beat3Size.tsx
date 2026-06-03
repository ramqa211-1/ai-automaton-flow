import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Stage } from "../components/Stage";
import { Slice } from "../components/Slice";
import { CardIn } from "../components/CardIn";
import { Pointer, TapDot } from "../components/Cursor";
import { SubtitleBar } from "../components/SubtitleBar";

// q_size.png (990x671) — "מה גודל העסק שלך?" + 4 size options.
const SX = 245,
  SY = 108,
  SW = 660,
  SH = 385;
const W = 980;
const k = W / SW; // 1.485
const H = SH * k;

// "2-5 עובדים" — 2nd option row.
const TARGET = { x: W / 2 - 10, y: 262 };
const CENTER = { x: W / 2, y: H / 2 };
const tapAt = 52;

/** Beat 3 — answer the first question. Single tap (pattern A). */
export const Beat3Size: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [6, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [tapAt + 12, tapAt + 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = fadeIn * (1 - fadeOut);

  const moveProgress = interpolate(frame, [16, tapAt], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const px = interpolate(moveProgress, [0, 1], [CENTER.x, TARGET.x]);
  const py = interpolate(moveProgress, [0, 1], [CENTER.y, TARGET.y]);

  return (
    <Stage
      caption="עונים על כמה שאלות קצרות"
      subtitle={<SubtitleBar totalFrames={115}>שאלה 1: מה גודל העסק? — בוחרים מבין 4 אפשרויות</SubtitleBar>}
    >
      <CardIn>
        <Slice src="q_size.png" sx={SX} sy={SY} sw={SW} sh={SH} width={W} />
        <Pointer x={px} y={py} opacity={opacity} />
        <TapDot tapAt={tapAt} x={TARGET.x} y={TARGET.y} size={130} />
      </CardIn>
    </Stage>
  );
};
