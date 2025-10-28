import { useTheme } from "../../../context/useTheme";
import { ListSocial } from "../social_networks/ListSocial";
import { DownloadButton } from "./DownloadButton";
import { useState } from "react";

const TITLES = [
  "Front End Developer",
  "Software Developer",
  "Back End Developer",
  "Full Stack Developer",
];

const COLORS = [
  "#8b22d6",
  "#1466ff",
  "#ff5e00",
  "#f82b2b",
];

export const MyPresentation = () => {
  const { themeState } = useTheme();

  const [titleIndex, setTitleIndex] = useState(0);

  const [iterationCount, setIterationCount] = useState(0);
  
  const currentTitle = TITLES[titleIndex];
  const currentColor = COLORS[titleIndex];
  const titleLength = currentTitle.length;

  const handleAnimationIteration = () => {
    const newCount = iterationCount + 1;
    setIterationCount(newCount);

    if (newCount % 2 === 0) {
      setTitleIndex((prevIndex) => (prevIndex + 1) % TITLES.length);
    }
  };


  return (
    <>
      <div className="container__home__title">
        <div className="container__title">
          <h1 className={`title__portfolio ${themeState.theme === "LightTheme" ? "b" : "w"}`}>Julio Rivas</h1>
          <h2
            className={`subtitle__portfolio ${themeState.theme === "LightTheme" ? " br__black" : "br__gray"}`}
            style={{ "--typewriter-chars": `${titleLength}ch`, color: currentColor, borderColor: currentColor } as React.CSSProperties}
            onAnimationIteration={handleAnimationIteration}
            key={currentTitle}
          >
            {currentTitle}
          </h2>
        </div>
        <p className={`text__portfolio ${themeState.theme === "LightTheme" ? "b" : "w"}`}>
          Hi there! 👋 Welcome to my portfolio. Feel free to take a look at my work and experience. Thanks for stopping
          by!
        </p>
        <ListSocial />
        <DownloadButton
          fileUrl="https://drive.google.com/uc?export=download&id=1nt7iZ1wsMDJ12GzpCK0DsuV_cGqUqk56"
          fileName="cv-software-developer.pdf"
        />
      </div>
    </>
  );
};
