import { ReactNode, useState } from "react";
import { themeContext } from "./ThemeContex";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProviderP = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("LightTheme");
  const [onMenu, setOnMenu] = useState<boolean>(false);

  const handleDark = () => {
    setTheme("DarkTheme");
  };

  const handleLight = () => {
    setTheme("LightTheme");
  };

  const themeState = { theme };

  return (
    <themeContext.Provider value={{ themeState, onMenu, setOnMenu, handleDark, handleLight }}>
      {children}
    </themeContext.Provider>
  );
};
