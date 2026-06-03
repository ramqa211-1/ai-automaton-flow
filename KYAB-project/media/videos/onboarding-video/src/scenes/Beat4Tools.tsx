import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Stage } from "../components/Stage";
import { Slice } from "../components/Slice";
import { CardIn } from "../components/CardIn";
import { Pointer, TapDot } from "../components/Cursor";
import { SubtitleBar } from "../components/SubtitleBar";

// q_tools.png (822x662) — "באילו כלים אתה משתמש?" multi-select.
const SX = 120,
  SY = 80,
  SW = 580,
  SH = 520;
const W = 900;
const k = W / SW; // 1.552
const H = SH * k;

// וואטסאפ (row 2) + Gmail/Outlook (row 3) — tapped toward their checkboxes.
const A = { x: 165, y: 326 }; // וואטסאפ
const B = { x: 165, y: 424 }; // Gmail/Outlook
const CENTER = { x: W / 2, y: H / 2 };

const tapA = 46;
const tapB = 92;

/** Beat 4 — two taps on the same multi-select (pattern B, continuous pointer). */
export const Beat4Tools: React.FC = () => {
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
      caption="מסמנים את הכלים והאתגרים שלך"
      subtitle={<SubtitleBar totalFrames={140}>מסמנים את הכלים שבשימוש יומי — וואטסאפ, Gmail, Excel ועוד</SubtitleBar>}
    >
      <CardIn>
        <Slice src="q_tools.png" sx={SX} sy={SY} sw={SW} sh={SH} width={W} />
        <Pointer x={px} y={py} opacity={pointerOpacity} />
        <TapDot tapAt={tapA} x={A.x} y={A.y} size={110} />
        <TapDot tapAt={tapB} x={B.x} y={B.y} size={110} />
      </CardIn>
    </Stage>
  );
};
