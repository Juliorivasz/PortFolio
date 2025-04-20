import { useContext } from "react";
import { themeContext } from "./ThemeContex";

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProviderP");
  }
  return context;
};
