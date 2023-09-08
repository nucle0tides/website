import { createTheme } from "@vanilla-extract/css";
import { light } from "../generated/blog.css";

export const [blogLightTheme, blogLightThemeVars] = createTheme({
  color: light,
});