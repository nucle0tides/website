import clsx from "clsx";
import { themeProviderStyles } from "./index.css";
import { sprinkles } from "../styles/sprinkles.css";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className={clsx(
        themeProviderStyles,
        sprinkles({ width: "full", height: "full" })
      )}
    >
      {children}
    </div>
  );
};
