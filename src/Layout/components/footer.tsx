import { useTheme } from "../../context/useTheme";
import { ListSocial } from "./social_networks/ListSocial";

function Footer() {
  const { themeState } = useTheme();
  return (
    <footer className={`flex justify-center ${themeState.theme === "LightTheme" ? "bg__black" : "bg__gray"} w-full`}>
      <div
        className={`flex flex-col pb-4 items-center justify-center w-full text-white ${
          themeState.theme === "LightTheme" ? "bg__gray" : "bg__black"
        }`}>
        <ListSocial />
        <p className={`${themeState.theme === "LightTheme" ? "b" : "w"} font-bold hover:opacity-75 text-center`}>
          Julio A. Rivas Garcia. © Copyright 2022 - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
