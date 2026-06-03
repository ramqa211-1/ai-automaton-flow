import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Stage } from "../components/Stage";
import { Slice } from "../components/Slice";
import { CardIn } from "../components/CardIn";
import { Pointer, TapDot } from "../components/Cursor";
import { SubtitleBar } from "../components/SubtitleBar";

// q_rating.png (694x510) — last question + green "קבל המלצות" submit button.
const SX = 55,
  SY = 85,
  SW = 600,
  SH = 360;
const W = 980;
const k = W / SW; // 1.633
const H = SH * k;

// "קבל המלצות" button — bottom-left of the crop.
const TARGET = { x: 163, y: 472 };
const CENTER = { x: W / 2, y: H / 2 };
const tapAt = 56;

/** Beat 5 — submit. The single tap that kicks off the AI. (pattern A) */
export const Beat5Submit: React.FC = () => {
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
      caption="לוחצים — וה-AI יוצא לעבודה"
      subtitle={<SubtitleBar totalFrames={110}>שאלה 9 מתוך 9 — לוחצים &quot;קבל המלצות&quot; ומסיימים את השאלון</SubtitleBar>}
    >
      <CardIn>
        <Slice src="q_rating.png" sx={SX} sy={SY} sw={SW} sh={SH} width={W} />
        <Pointer x={px} y={py} opacity={opacity} />
        <TapDot tapAt={tapAt} x={TARGET.x} y={TARGET.y} size={150} />
      </CardIn>
    </Stage>
  );
};
