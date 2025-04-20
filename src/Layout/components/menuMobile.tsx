import { Link } from "react-router-dom";
import { useTheme } from "../../context/useTheme";
import { useEffect } from "react";
import { DownloadButton } from "./Profile/DownloadButton";

function MenuMobile() {
  const { themeState, onMenu, setOnMenu } = useTheme();

  useEffect(() => {
    document.body.style.overflow = onMenu ? "hidden" : "auto";
  }, [onMenu]);

  const toggleMenu = () => setOnMenu(!onMenu);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
  ];

  return (
    <nav
      className={`md:hidden fixed top-0 left-0 w-full z-50 ${
        themeState.theme === "LightTheme" ? "bg__black" : "bg__gray"
      }`}>
      <aside
        className={`fixed pt-2 top-0 left-0 h-screen w-3/4 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          onMenu ? "translate-x-0" : "-translate-x-full"
        } ${themeState.theme === "LightTheme" ? "bg__black" : "bg__gray"}`}>
        <ul className="flex flex-col p-6 space-y-6 mt-12">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={toggleMenu}
                className={`text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  themeState.theme === "LightTheme" ? "w" : "b"
                }`}>
                {label}
              </Link>
            </li>
          ))}
          <DownloadButton
            fileUrl="https://drive.google.com/uc?export=download&id=18VyAYkD0bz7YBKD4VFjHC_XjuVmi2vqe"
            fileName="Julio_Portfolio.pdf"
          />
        </ul>
      </aside>

      {onMenu && (
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}

export default MenuMobile;
