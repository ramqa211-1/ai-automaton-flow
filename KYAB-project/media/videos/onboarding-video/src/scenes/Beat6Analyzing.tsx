import React from "react";
import { Stage } from "../components/Stage";
import { Slice } from "../components/Slice";
import { CardIn } from "../components/CardIn";
import { GlowRing } from "../components/Cursor";
import { SubtitleBar } from "../components/SubtitleBar";

// analyzing.png (845x461) — "מנתח תשובות ומאמת ברות-יישום בפועל..."
const SX = 150,
  SY = 95,
  SW = 560,
  SH = 330;
const W = 980;

/** Beat 6 — the AI working. Kept short to sell the instant transition. No cursor. */
export const Beat6Analyzing: React.FC = () => {
  return (
    <Stage
      caption="ה-AI מנתח את העסק שלך בזמן אמת"
      subtitle={<SubtitleBar totalFrames={95}>ה-AI בונה המלצות מותאמות אישית — מנתח תשובות ומאמת ברות-יישום</SubtitleBar>}
    >
      <CardIn>
        <Slice src="analyzing.png" sx={SX} sy={SY} sw={SW} sh={SH} width={W} />
        {/* pulse around the processor chip icon (card-local) */}
        <GlowRing x={410} y={105} width={160} height={160} startAt={14} duration={34} radius={999} />
        <GlowRing x={410} y={105} width={160} height={160} startAt={52} duration={34} radius={999} />
      </CardIn>
    </Stage>
  );
};
