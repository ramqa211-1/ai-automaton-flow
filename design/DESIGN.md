---
name: Neural Velocity System
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#bacbb9'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849585'
  outline-variant: '#3b4b3d'
  surface-tint: '#00e477'
  primary: '#f4fff1'
  on-primary: '#003919'
  primary-container: '#2aff8a'
  on-primary-container: '#007238'
  inverse-primary: '#006d36'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#fffaff'
  on-tertiary: '#3e008f'
  tertiary-container: '#e7d9ff'
  on-tertiary-container: '#7825fa'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#61ff98'
  primary-fixed-dim: '#00e477'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005227'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d2bcff'
  on-tertiary-fixed: '#24005a'
  on-tertiary-fixed-variant: '#5900c7'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  container-max: 1280px
---

## Brand & Style

The design system is engineered to evoke a sense of high-performance intelligence and rapid technological evolution. It targets a professional audience that values efficiency, cutting-edge AI services, and computational power. The aesthetic is rooted in **Futuristic Minimalism** with **Glassmorphism** accents, utilizing high-contrast neon elements against a deep, void-like background to represent the clarity of data emerging from the dark.

The visual language communicates speed through directional motifs—arrows, slanted forms, and "speed streak" lines—while circuit-like patterns emphasize the "brain" and "RAM" aspects of the brand. The UI feels alive, reactive, and precise.

## Colors

The palette is anchored in a monochromatic dark range to ensure the vibrant accents possess maximum luminosity. 

- **Primary (Neon Green):** Used for primary calls to action, active states, and "success" messaging. It represents the cheetah’s energy and biological speed.
- **Secondary (Cyan):** Used for interactive data visualizations, links, and secondary accents. It represents technological precision and the "RAM" components.
- **Backgrounds:** A deep `#0A0C10` serves as the base, with slightly lighter grays used for container elevation to maintain a clean, layered look without losing the "dark mode" intensity.
- **Gradients:** Use linear gradients from Secondary to Primary (45-degree angle) for high-impact elements like buttons or progress bars.

## Typography

This design system utilizes a dual-font approach to balance technical character with readability.

**Space Grotesk** is the voice of the brand. Its geometric, slightly eccentric letterforms mirror the "high-tech" nature of the logo. It is used for all headings and UI labels where a sense of innovation is required.

**Inter** is the functional workhorse. It is used for all long-form body text and data tables to ensure maximum legibility at smaller sizes, providing a clean, neutral counterpoint to the aggressive headline style.

## Layout & Spacing

The design system employs a **12-column fluid grid** with generous internal gutters to allow the complex visual motifs (circuit lines) room to breathe without cluttering the interface. 

The spacing rhythm is based on a **4px base unit**. Margins between logical sections should be large (64px+) to emphasize the premium, minimalist atmosphere. Elements that imply movement—like arrows or decorative streaks—should be aligned to the grid but allowed to break "safe zones" to create a sense of dynamic flow.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Glassmorphism**, rather than traditional heavy shadows.

- **Surface 0:** The primary background (`#0A0C10`).
- **Surface 1:** A slightly lighter dark gray (`#161B22`) for cards and containers.
- **Surface 2 (Glass):** Semi-transparent surfaces (10-20% opacity) with a `20px` backdrop blur. 
- **Accents:** Use thin (1px) borders in a low-opacity cyan or green to define edges. For "active" elements, use a "Neon Glow" effect—a soft, diffused outer glow matching the color of the element (e.g., a green button with a 15px blur green shadow at 30% opacity).

## Shapes

The shape language is sharp and precise. A **Soft (0.25rem)** border radius is the default for most components to maintain a technical, "hardware" feel. 

However, functional decorative elements like arrows and circuit-path terminations should utilize **angled cuts (chamfers)** instead of curves. This reinforces the "speed" and "digital intelligence" motifs found in the cheetah logo. Iconography should use a mix of hard angles and circular terminal points, mimicking a PCB (Printed Circuit Board) layout.

## Components

### Buttons
Primary buttons use the Green-to-Cyan gradient with white or black text depending on legibility. They should feature a slight "italic" skew or an arrow icon on hover to suggest forward motion. Secondary buttons use a "ghost" style with a 1px neon border.

### Input Fields
Inputs are dark-filled with a bottom-only border that glows cyan when focused. The cursor should be a custom neon block.

### Cards
Cards utilize the Surface 1 color with a subtle circuit-pattern watermark in the background (at 5% opacity). Corners should be sharp or have a very small radius.

### Chips & Tags
Small, high-contrast labels with `label-sm` typography. These should have a slight "speed streak" graphic (2-3 horizontal lines) preceding the text.

### Progress Indicators
Progress bars should be stylized as "data streams," using the primary gradient and a "glow" head that leads the bar as it fills.

### Decorative Dividers
Replace standard line dividers with "circuit lines"—thin paths that occasionally have 90-degree bends or small circular "nodes" at the ends.