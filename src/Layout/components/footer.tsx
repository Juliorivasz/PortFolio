import { useTheme } from "../../context/useTheme";
import { ListSocial } from "./social_networks/ListSocial";

function Footer() {
  const { themeState } = useTheme();
  return (
    <footer
      className={`flex justify-center ${themeState.theme === "LightTheme" ? "bg__black" : "bg__gray"} w-full`}
      style={{ paddingTop: "1rem" }}>
      <div
        className={`flex flex-col px-4 pb-4 mx-4 items-center justify-center rounded-t-xl w-[calc(100%-3rem)] text-white ${
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
