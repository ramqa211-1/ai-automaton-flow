import React from "react";
import { Stage } from "../components/Stage";
import { Slice } from "../components/Slice";
import { CardIn } from "../components/CardIn";
import { GlowRing } from "../components/Cursor";
import { SubtitleBar } from "../components/SubtitleBar";

// landing.png (1885x899) — headline "איך לשלב AI בעסק שלך?" + profession grid.
const SX = 560,
  SY = 90,
  SW = 760,
  SH = 480;
const W = 980;

/** Beat 1 — establishing shot. Illustrative: glow pulses on the grid. No cursor. */
export const Beat1Landing: React.FC = () => {
  return (
    <Stage
      caption="גלה איך לשלב AI בעסק שלך"
      subtitle={<SubtitleBar totalFrames={105}>בעל עסק קטן נכנס לאפליקציה ורואה את המקצועות הזמינים</SubtitleBar>}
    >
      <CardIn>
        <Slice src="landing.png" sx={SX} sy={SY} sw={SW} sh={SH} width={W} />
        {/* glow around the profession grid (card-local coords) */}
        <GlowRing x={70} y={300} width={840} height={300} startAt={34} duration={40} radius={26} />
        <GlowRing x={70} y={300} width={840} height={300} startAt={78} duration={40} radius={26} />
      </CardIn>
    </Stage>
  );
};
