import { breakpoints, sharedTheme } from "../globalThemes/shared.css";
import { fontTheme } from "../globalThemes/fonts.css";
import { blogLightThemeVars } from "../globalThemes/color.css";


export const t = {
    ...sharedTheme,
    ...fontTheme,
    ...blogLightThemeVars,
    breakpoints,
} as const;