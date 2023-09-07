import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { t } from ".";

const conditions = {
  conditions: {
    // responsive
    initial: {},
    xs: { "@media": t.breakpoints.xs },
    sm: { "@media": t.breakpoints.sm },
    md: { "@media": t.breakpoints.md },
    lg: { "@media": t.breakpoints.lg },
    xl: { "@media": t.breakpoints.xl },
    xxl: { "@media": t.breakpoints.xxl },
  },
  defaultCondition: "initial",
} as const;

export const properties = {
  size: defineProperties({
    ...conditions,
    properties: {
      width: { ...t.size, "fit-content": "fit-content" },
      height: { ...t.size, "fit-content": "fit-content" },
      minHeight: t.size,
      minWidth: t.size,
      maxHeight: t.size,
      maxWidth: t.size,
    },
    shorthands: {
      w: ["width"],
      h: ["height"],
    },
  }),
  space: defineProperties({
    ...conditions,
    properties: {
      padding: t.space,
      paddingTop: t.space,
      paddingBottom: t.space,
      paddingLeft: t.space,
      paddingRight: t.space,
    },
    shorthands: {
      p: ["padding"],
      px: ["paddingLeft", "paddingRight"],
      py: ["paddingTop", "paddingBottom"],
      pl: ["paddingLeft"],
      pr: ["paddingRight"],
      pb: ["paddingBottom"],
      pt: ["paddingTop"],
    },
  }),
  flex: defineProperties({
    ...conditions,
    properties: {
      gap: t.space,
      flexDirection: ["row", "column", "row-reverse", "column-reverse"],
      flexWrap: ["wrap", "wrap-reverse"],
      justifyContent: {
        initial: "initial",
        start: "flex-start",
        end: "flex-end",
        center: "center",
        "space-between": "space-between",
        "space-evenly": "space-evenly",
      },
      alignItems: {
        initial: "initial",
        stretch: "stretch",
        start: "flex-start",
        end: "flex-end",
        center: "center",
        baseline: "baseline",
      },
    },
    shorthands: {
      direction: ["flexDirection"],
      wrap: ["flexWrap"],
      justify: ["justifyContent"],
      align: ["alignItems"],
    },
  }),
};

export const sprinkles = createSprinkles(
  properties.size,
  properties.space,
  properties.flex
);
