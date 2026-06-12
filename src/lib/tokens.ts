// COLORS — Nexloom brand palette (matches CSS custom properties in source HTML)
export const colors = {
  primary:      "hsl(230, 84%, 55%)",   // #3B5BDB — blue
  primaryDark:  "hsl(230, 84%, 42%)",   // darker blue for hover
  primaryLight: "hsl(230, 84%, 70%)",   // lighter blue
  accent:       "hsl(190, 95%, 50%)",   // #02D6F5 — cyan
  accentDark:   "hsl(190, 95%, 38%)",
  dark:         "#0a0a0f",
  darkSurface:  "#12121a",
  darkCard:     "#1a1a2e",
  text:         "#f0f0f5",
  textMuted:    "#8a8a9a",
  textDim:      "#6a6a7a",
  border:       "rgba(255,255,255,0.08)",
  borderHover:  "rgba(255,255,255,0.15)",
  glass:        "rgba(255,255,255,0.04)",
  glassHover:   "rgba(255,255,255,0.08)",
  white:        "#ffffff",
  success:      "#10b981",
  error:        "#ef4444",
} as const;

// GRADIENTS
export const gradients = {
  primary:    "linear-gradient(135deg, hsl(230,84%,55%), hsl(190,95%,50%))",
  primaryHex: "linear-gradient(135deg, #3B5BDB, #02D6F5)",
  text:       "linear-gradient(90deg, hsl(230,84%,70%), hsl(190,95%,60%))",
  glow:       "radial-gradient(ellipse at center, rgba(59,91,219,0.15) 0%, transparent 70%)",
} as const;

// SHADOWS
export const shadows = {
  primary: "0 8px 32px rgba(59,91,219,0.28)",
  card:    "0 4px 24px rgba(0,0,0,0.3)",
  large:   "0 20px 60px rgba(0,0,0,0.4)",
  glow:    "0 0 40px rgba(59,91,219,0.2)",
} as const;

// BORDER RADIUS
export const radius = {
  base: "0.75rem",   // 12px
  sm:   "0.5rem",    // 8px
  lg:   "1rem",      // 16px
  xl:   "1.5rem",    // 24px
  full: "9999px",
} as const;

// LAYOUT
export const layout = {
  maxWidth: "1400px",
  sideGap:  "clamp(1rem, 5vw, 4rem)",
} as const;

// BREAKPOINTS
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

// FONT
export const font = {
  family:  "Montserrat",
  weights: [300, 400, 500, 600, 700, 800, 900] as const,
} as const;

// TRANSITIONS
export const transitions = {
  base:   "all 0.3s ease",
  fast:   "all 0.15s ease",
  spring: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;
