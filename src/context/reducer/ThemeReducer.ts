import { themes } from "../../Layout/types/theme";

export interface stateProps {
  theme: string;
}

export interface actionProps {
  type: string;
  payload: string;
}

export const ThemeReducer = (state: stateProps, action: actionProps) => {
  switch (action.type) {
    case themes.light:
      return { ...state, theme: action.payload };
    case themes.dark:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
};
