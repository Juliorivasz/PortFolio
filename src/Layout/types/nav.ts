type ThemeType = "LightTheme " | "DarkTheme";

export interface NavProps {
  theme: ThemeType;
  urlLink: string;
  diss: string;
  dissemble: () => void;
  setDissemble: (value: string) => void;
  changes: string;
  setChanges: (value: string) => void;
  swap: () => void;
}
