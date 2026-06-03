import React from "react";
import { Stage } from "../components/Stage";
import { Slice } from "../components/Slice";
import { CardIn } from "../components/CardIn";
import { GlowRing } from "../components/Cursor";
import { SubtitleBar } from "../components/SubtitleBar";

// results.png (1132x880) — "3 אוטומציות שמתאימות לך" + two recommendation cards.
const SX = 60,
  SY = 60,
  SW = 1020,
  SH = 760;
const W = 1000;

/** Beat 7 — the payoff: concrete AI automations land instantly. No cursor. */
export const Beat7Results: React.FC = () => {
  return (
    <Stage
      caption="ומקבלים אוטומציות AI — מיידי, לעסק שלך"
      subtitle={<SubtitleBar totalFrames={150}>3–4 אוטומציות AI מסודרות לפי דחיפות — כולן ברות-יישום בפועל</SubtitleBar>}
    >
      <CardIn>
        <Slice src="results.png" sx={SX} sy={SY} sw={SW} sh={SH} width={W} radius={22} />
        {/* highlight each recommendation card in turn (card-local) */}
        <GlowRing x={515} y={120} width={460} height={580} startAt={24} duration={42} radius={20} />
        <GlowRing x={30} y={120} width={460} height={580} startAt={60} duration={42} radius={20} />
      </CardIn>
    </Stage>
  );
};
