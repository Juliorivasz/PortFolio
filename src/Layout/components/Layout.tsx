import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useTheme } from "../../context/useTheme";
import MenuMobile from "./menuMobile";
import Footer from "./footer";

export const Layout = () => {
  const { themeState } = useTheme();

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={`${themeState.theme === "LightTheme" ? "bg__black" : "bg__gray"}`}>
        <Outlet />
        <MenuMobile />
      </main>
      <Footer />
    </>
  );
};
