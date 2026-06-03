import React from "react";
import { Composition } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { loadFont } from "@remotion/google-fonts/Heebo";

import { FPS, WIDTH, HEIGHT } from "./theme";
import { Beat1Landing } from "./scenes/Beat1Landing";
import { Beat2Start } from "./scenes/Beat2Start";
import { Beat3Size } from "./scenes/Beat3Size";
import { Beat4Tools } from "./scenes/Beat4Tools";
import { Beat5Submit } from "./scenes/Beat5Submit";
import { Beat6Analyzing } from "./scenes/Beat6Analyzing";
import { Beat7Results } from "./scenes/Beat7Results";

loadFont();

const FADE = 15;
const D = {
  b1: 105,
  b2: 135,
  b3: 115,
  b4: 140,
  b5: 110,
  b6: 95,
  b7: 150,
};

// TransitionSeries total = sum(durations) - sum(transitions)
const TOTAL =
  D.b1 + D.b2 + D.b3 + D.b4 + D.b5 + D.b6 + D.b7 - 6 * FADE;

const KyabOnboarding: React.FC = () => {
  const t = () => (
    <TransitionSeries.Transition
      timing={linearTiming({ durationInFrames: FADE })}
      presentation={fade()}
    />
  );
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={D.b1}>
        <Beat1Landing />
      </TransitionSeries.Sequence>
      {t()}
      <TransitionSeries.Sequence durationInFrames={D.b2}>
        <Beat2Start />
      </TransitionSeries.Sequence>
      {t()}
      <TransitionSeries.Sequence durationInFrames={D.b3}>
        <Beat3Size />
      </TransitionSeries.Sequence>
      {t()}
      <TransitionSeries.Sequence durationInFrames={D.b4}>
        <Beat4Tools />
      </TransitionSeries.Sequence>
      {t()}
      <TransitionSeries.Sequence durationInFrames={D.b5}>
        <Beat5Submit />
      </TransitionSeries.Sequence>
      {t()}
      <TransitionSeries.Sequence durationInFrames={D.b6}>
        <Beat6Analyzing />
      </TransitionSeries.Sequence>
      {t()}
      <TransitionSeries.Sequence durationInFrames={D.b7}>
        <Beat7Results />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="KyabOnboarding"
      component={KyabOnboarding}
      durationInFrames={TOTAL}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
