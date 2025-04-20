import { ReactNode, useReducer, useState } from "react";
import { themeContext } from "./ThemeContex";
import { ThemeReducer } from "./reducer/ThemeReducer";
import { DarkTheme, LightTheme } from "../Layout/components/theme/styled/themes";
import { ThemeProvider } from "styled-components";

interface ThemeProviderProps {
  children: ReactNode;
}

const init = () => {
  return { theme: "LightTheme" };
};

export const ThemeProviderP = ({ children }: ThemeProviderProps) => {
  const [themeState, dispatch] = useReducer(ThemeReducer, {}, init);
  const currentTheme = themeState.theme === "DarkTheme" ? DarkTheme : LightTheme;

  const [onMenu, setOnMenu] = useState<boolean>(false);

  const handleDark = () => {
    const action = {
      type: "DarkTheme",
      payload: "DarkTheme",
    };

    dispatch(action);
  };

  const handleLight = () => {
    const action = {
      type: "LightTheme",
      payload: "LightTheme",
    };

    dispatch(action);
  };
  console.log(currentTheme);

  return (
    <themeContext.Provider value={{ themeState, onMenu, setOnMenu, handleDark, handleLight }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </themeContext.Provider>
  );
};
