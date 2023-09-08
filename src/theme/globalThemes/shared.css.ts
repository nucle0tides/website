import { createGlobalTheme } from "@vanilla-extract/css";

export const breakpoints = {
  // The screen sizes are:
  //   xs   = 440px
  //   sm   = 576px
  //   md   = 768px
  //   lg   = 992px
  //   xl   = 1200px
  //   xxl  = 1440px
  //   xxxl = 1920px
  // each breakpoint sits in between screen sizes
  xs: "(min-width: 508px)",
  sm: "(min-width: 672px)",
  md: "(min-width: 880px)",
  lg: "(min-width: 1092px)",
  xl: "(min-width: 1320px)",
  xxl: "(min-width: 1680px)",
} as const;

const space = {
    "0": "0px",
    "4": '4px',
    "8": '8px',
    "16": '16px'
    // add more later
} as const;

export const sharedTheme = createGlobalTheme(":root", {
  size: {
    ...space,
    full: "100%",
  },
  space: {
    ...space,
    full: "100%",
  },
  media: breakpoints,
});