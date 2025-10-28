import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useTheme } from "../../context/useTheme";
import MenuMobile from "./menuMobile";
import Footer from "./footer";

export const Layout = () => {
  const { themeState } = useTheme();
  const location = useLocation();

  const rutasSinFooter = ["/", "/about"];

  const mostrarFooter = !rutasSinFooter.includes(location.pathname);

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
