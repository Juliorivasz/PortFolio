import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TerminalIcon from "@mui/icons-material/Terminal";
import { useTheme } from "../../../../context/useTheme";
import { Category } from "../Certificates";

interface NavCategoryProps {
  value: string;
  setValue: (newValue: Category) => void;
}

export default function NavCategory({ value, setValue }: NavCategoryProps) {
  const { themeState } = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: Category) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%", maxWidth: 500 }}
      className={`${themeState.theme === "LightTheme" ? "bg__black" : "bg__gray"}`}
      value={value}
      onChange={handleChange}>
      <BottomNavigationAction
        className={`${themeState.theme === "LightTheme" ? "w" : "b"}`}
        label="Careers"
        value="careers"
        icon={<WorkspacePremiumIcon className={`${themeState.theme === "LightTheme" ? "w" : "b"}`} />}
      />
      <BottomNavigationAction
        className={`${themeState.theme === "LightTheme" ? "w" : "b"}`}
        label="Courses"
        value="courses"
        icon={<MenuBookIcon className={`${themeState.theme === "LightTheme" ? "w" : "b"}`} />}
      />
      <BottomNavigationAction
        className={`${themeState.theme === "LightTheme" ? "w" : "b"}`}
        label="Internships"
        value="internships"
        icon={<TerminalIcon className={`${themeState.theme === "LightTheme" ? "w" : "b"}`} />}
      />
    </BottomNavigation>
  );
}
