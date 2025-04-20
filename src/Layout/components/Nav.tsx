import "../../css/nav.css";
import homeLight from "../../img/svg/home-2.svg";
import homeDark from "../../img/svg/home.svg";
import { Link } from "react-router-dom";
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
          <Link
            className="nav__link"
            to="/">
            <img
              src={homeIcon}
              alt="Inicio"
              className="nav__home-icon"
            />
            <span className="nav__title">Home</span>
          </Link>
        </div>

        <div className="nav__menu">
          {["about", "skills", "projects"].map((item, i) => (
            <Link
              className="nav__link"
              key={i}
              to={`/${item}`}>
              <span className="nav__item">{item.toUpperCase()}</span>
            </Link>
          ))}
          <Link
            to="https://drive.google.com/file/d/18VyAYkD0bz7YBKD4VFjHC_XjuVmi2vqe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__link">
            <span className="nav__cv">CV</span>
          </Link>
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
