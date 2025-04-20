import { stateProps } from "../../context/reducer/ThemeReducer";

export interface ThemeContextProps {
  themeState: stateProps;
  onMenu: boolean;
  setOnMenu: (value: boolean) => void;
  handleDark: () => void;
  handleLight: () => void;
}
