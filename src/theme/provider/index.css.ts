import { style } from "@vanilla-extract/css";
import { t } from "../styles";

export const themeProviderStyles = style({
  fontFamily: `${t.font.face.body}, sans-serif`,
  fontWeight: t.font.weight.body.default,
  fontSize: t.font.size.body.sm,
  color: t.color.content.neutral.default,
});