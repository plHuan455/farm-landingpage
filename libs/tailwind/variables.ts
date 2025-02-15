// Common Screen Sizes Config
export const screenSizes = {
  zero: "0px",
  xs: "400px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const

export const extraKeyframes = {
  pulse: {
    "0%": { transform: "scale(var(--scale-down, 0.95))", opacity: "100%" },
    "50%": { transform: "scale(1)", opacity: "100%" },
    "100%": { transform: "scale(var(--scale-down, 0.95))", opacity: "100%" },
  },
  loadingDot: {
    "0%": {
      transform: "translateY(0)",
    },
    "25%": {
      transform: "translateY(-100%)",
    },
    "50%": {
      transform: "translateY(16%)",
    },
    "60%": {
      transform: "translateY(-16%)",
    },
    "70%": {
      transform: "translateY(4%)",
    },
    "75%": {
      transform: "translateY(0px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
} as const

export const extraAnimations = {
  loadingDot: "loadingDot .75s linear infinite",
  pulse: "pulse 2s infinite ease-in-out",
  // "slide-in-left": "slide-in 1s cubic-bezier(0.25, 0.8, 0.25, 1) 1 forwards",
  // "slide-in-right": "slide-in-right 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards",
} as const
