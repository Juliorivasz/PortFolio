export interface ThemeContextProps {
  themeState: { theme: string };
  onMenu: boolean;
  setOnMenu: (value: boolean) => void;
  handleDark: () => void;
  handleLight: () => void;
}
