import { useTheme } from "../../context/useTheme";
import { ListSocial } from "./social_networks/ListSocial";
import { useTranslation } from "react-i18next";

function Footer() {
  const { themeState } = useTheme();
  const { t } = useTranslation();
  
  return (
    <footer className={`flex flex-col justify-center ${themeState.theme === "LightTheme" ? "bg__black" : "bg__gray"} w-full`}>
      <div className="flex py-0.5 bg-gray-500"></div>
      <div
        className={`flex flex-col pb-4 items-center justify-center w-full text-white ${
          themeState.theme === "LightTheme" ? "bg__gray" : "bg__black"
        }`}>
        <ListSocial />
        <p className={`${themeState.theme === "LightTheme" ? "b" : "w"} font-bold hover:opacity-75 text-center`}>
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
