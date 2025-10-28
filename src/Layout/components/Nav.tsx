import "../../css/nav.css";
import homeLight from "../../img/svg/home-2.svg";
import homeDark from "../../img/svg/home.svg";
import { NavLink } from "react-router-dom";
import Switch from "./theme/switch";
import { useTheme } from "../../context/useTheme";

function Nav() {
  const { themeState, onMenu, setOnMenu } = useTheme();
  const isLight = themeState.theme === "LightTheme";
  const homeIcon = isLight ? homeLight : homeDark;

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
              alt="Inicio"
              className="nav__home-icon"
            />
            <span className="nav__title">Home</span>
          </NavLink>
        </div>

        <div className="nav__menu">
          {["about", "skills", "projects"].map((item, i) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? `nav__link ${isLight ? "nav__link--active" : "nav__link--active-dark"}` : "nav__link"
              }
              key={i}
              to={`/${item}`}>
              <span className="nav__item">{item.toUpperCase()}</span>
            </NavLink>
          ))}
          <NavLink
            to="https://drive.google.com/file/d/1nt7iZ1wsMDJ12GzpCK0DsuV_cGqUqk56/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__link">
            <span className="nav__cv">CV</span>
          </NavLink>
        </div>

        <Switch theme={themeState.theme} />

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
