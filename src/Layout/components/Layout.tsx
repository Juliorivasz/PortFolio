import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";

import { useTheme } from "../../context/useTheme";
import MenuMobile from "./MenuMobile";
import Footer from "./Footer";

export const Layout = () => {
  const { themeState } = useTheme();
  const location = useLocation();

  const mostrarFooter = location.pathname === "/projects";

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={`${themeState.theme === "LightTheme" ? "bg__black" : "bg__gray"}`}>
        <Outlet />
        <MenuMobile />
      </main>
      {mostrarFooter &&<Footer />}
    </>
  );
};
