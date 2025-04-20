import { createContext } from "react";
import { ThemeContextProps } from "../Layout/types/themeContextProps";

export const themeContext = createContext<ThemeContextProps | null>(null);
