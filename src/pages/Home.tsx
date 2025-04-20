import { useTheme } from "../context/useTheme";
import { MePhoto } from "../Layout/components/Profile/MePhoto";
import { MyPresentation } from "../Layout/components/Profile/MyPresentation";

export const Home = () => {
  const { themeState } = useTheme();

  return (
    <div
      className={`container__presentation ${
        themeState.theme === "LightTheme" ? "bg__gray" : "bg__black"
      } min-h-screen`}>
      <div className="container__home">
        <MePhoto />
        <MyPresentation />
      </div>
    </div>
  );
};
