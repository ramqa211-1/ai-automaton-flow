/**
 * Neural Velocity theme — matches the KYAB ("Know Your AI Business") web app.
 * Dark emerald palette pulled from the supplied screenshots.
 */
export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

/** Top caption band height — captions are anchored here on every beat. */
export const CAPTION_BAND = 300;

export const COLORS = {
  // App background is a near-black slate with a faint emerald grid.
  bg: "#070b14",
  bgGradient:
    "radial-gradient(1200px 1200px at 50% 18%, #0c1a1f 0%, #080d16 55%, #05080e 100%)",
  brand: "#10b981",
  brandGlow: "#34d399",
  accent: "#facc15",
  text: "#f1f5f9",
  textDim: "#94a3b8",
};

/** Heebo is the closest free Hebrew face to the app's UI font. */
export const FONT = "Heebo, system-ui, sans-serif";

/** frame helper — author beats in "logical" frames, all at FPS. */
export const p = (frames: number) => frames;
