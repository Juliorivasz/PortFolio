import "../css/about_me.css";
import "react-medium-image-zoom/dist/styles.css";
import { useTheme } from "../context/useTheme";
import { AboutTabs } from "../Layout/components/About/AboutTabs";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { themeState } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      className={`container__section ${
        themeState.theme === "LightTheme" ? "bg__gray b" : "bg__black w"
      } min-h-screen py-20`} // Added py-20 for spacing
      id="about-me">
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t("about.title")}</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            {t("about.description")}
          </p>
        </div>

        <AboutTabs />
      </div>
    </section>
  );
};
