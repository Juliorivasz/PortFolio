import "../css/about_me.css";
import "react-medium-image-zoom/dist/styles.css";
import { useTheme } from "../context/useTheme";
import TimelineRuleta from "../Layout/components/About/TimelineRuleta";
import { Certificates } from "../Layout/components/About/Certificates";

export const About = () => {
  const { themeState } = useTheme();

  return (
    <section
      className={`container__section ${themeState.theme === "LightTheme" ? "bg__gray b" : "bg__black w"} min-h-screen`}
      id="about-me">
      <div className="flex flex-col md:flex-row justify-evenly w-full py-6 px-4 md:px-8 min-h-screen gap-8">
        <Certificates />
        <TimelineRuleta />
      </div>
    </section>
  );
};
