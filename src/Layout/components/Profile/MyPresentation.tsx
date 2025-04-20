import { useTheme } from "../../../context/useTheme";
import { ListSocial } from "../social_networks/ListSocial";
import { DownloadButton } from "./DownloadButton";

export const MyPresentation = () => {
  const { themeState } = useTheme();
  return (
    <>
      <div className="container__home__title">
        <div className="container__title">
          <h1 className={`title__portfolio ${themeState.theme === "LightTheme" ? "b" : "w"}`}>Julio Rivas</h1>
          <h2 className={`subtitle__portfolio ${themeState.theme === "LightTheme" ? "b br__black" : "w br__gray"}`}>
            Front End Developer
          </h2>
        </div>
        <p className={`text__portfolio ${themeState.theme === "LightTheme" ? "b" : "w"}`}>
          Hi there! 👋 Welcome to my portfolio. Feel free to take a look at my work and experience. Thanks for stopping
          by!
        </p>
        <ListSocial />
        <DownloadButton
          fileUrl="https://drive.google.com/uc?export=download&id=18VyAYkD0bz7YBKD4VFjHC_XjuVmi2vqe"
          fileName="Julio_Portfolio.pdf"
        />
      </div>
    </>
  );
};
