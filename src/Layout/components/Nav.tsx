import "../../css/nav.css";
import homeLight from "../../img/svg/home-2.svg";
import homeDark from "../../img/svg/home.svg";
import { NavLink } from "react-router-dom";
import Switch from "./theme/switch";
import { useTheme } from "../../context/useTheme";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { DownloadButton } from "./Profile/DownloadButton";

function Nav() {
  const { themeState, onMenu, setOnMenu } = useTheme();
  const { t } = useTranslation();
  const isLight = themeState.theme === "LightTheme";
  const homeIcon = isLight ? homeLight : homeDark;

  const navItems = [
    { path: "about", label: t("header.about") },
    { path: "skills", label: t("header.skills") },
    { path: "projects", label: t("header.projects") },
  ];

  return (
    <nav className={`nav ${isLight ? "nav__dark" : "nav__light"}`}>
      <div className="nav__container">
        <div
          className="nav__logo"
          onClick={() => setOnMenu(!onMenu)}>
          <NavLink
            className={({ isActive }) => isActive ? `nav__link ${isLight ? "nav__link--active" : "nav__link--active-dark"}` : "nav__link"}
            to="/"
            end>
            <img
              src={homeIcon}
              alt={t("header.home")}
              className="nav__home-icon"
            />
            <span className="nav__title">{t("header.home")}</span>
          </NavLink>
        </div>

        <div className="nav__menu">
          {navItems.map((item, i) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? `nav__link ${isLight ? "nav__link--active" : "nav__link--active-dark"}` : "nav__link"
              }
              key={i}
              to={`/${item.path}`}>
              <span className="nav__item">{item.label.toUpperCase()}</span>
            </NavLink>
          ))}
          <DownloadButton
            className="nav__link bg-transparent border-none cursor-pointer"
            englishCvUrl="https://drive.google.com/file/d/1nt7iZ1wsMDJ12GzpCK0DsuV_cGqUqk56/view?usp=sharing"
            spanishCvUrl="https://drive.google.com/file/d/1ZMg51_PyEuSQcDMyi6Vy5zPlG9OcsbcT/view?usp=sharing"
            openInNewTab={true}
          >
            <span className="nav__cv">CV</span>
          </DownloadButton>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Switch theme={themeState.theme} />
        </div>

        <div
          className={`nav__toggle ${onMenu ? "open" : ""}`}
          onClick={() => setOnMenu(!onMenu)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
