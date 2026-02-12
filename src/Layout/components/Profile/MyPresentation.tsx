import { useTheme } from "../../../context/useTheme";
import { ListSocial } from "../social_networks/ListSocial";
import { DownloadButton } from "./DownloadButton";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const COLORS = [
  "#8b22d6",
  "#1466ff",
  "#ff5e00",
  "#f82b2b",
];

export const MyPresentation = () => {
  const { themeState } = useTheme();
  const { t, i18n } = useTranslation();

  const [titleIndex, setTitleIndex] = useState(0);
  const [iterationCount, setIterationCount] = useState(0);

  // Get titles from translation
  const titles = t('hero.titles', { returnObjects: true }) as string[];
  
  // Reset index when language changes to avoid out of bounds or mixed languages
  useEffect(() => {
    setTitleIndex(0);
    setIterationCount(0);
  }, [i18n.language]);

  const currentTitle = titles[titleIndex] || titles[0];
  const currentColor = COLORS[titleIndex % COLORS.length];
  const titleLength = currentTitle.length;

  const handleAnimationIteration = () => {
    const newCount = iterationCount + 1;
    setIterationCount(newCount);

    if (newCount % 2 === 0) {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
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
            key={`${currentTitle}-${i18n.language}`} // Add language to key to force re-render
          >
            {currentTitle}
          </h2>
        </div>
        <p className={`text__portfolio ${themeState.theme === "LightTheme" ? "b" : "w"}`}>
          {t('hero.greeting')}
        </p>
        <ListSocial />
        <DownloadButton
          englishCvUrl="https://drive.google.com/uc?export=download&id=1nt7iZ1wsMDJ12GzpCK0DsuV_cGqUqk56"
          spanishCvUrl="https://drive.google.com/uc?export=download&id=1ZMg51_PyEuSQcDMyi6Vy5zPlG9OcsbcT"
          fileName="CV_Julio_Rivas.pdf" // Fallback name
        />
      </div>
    </>
  );
};
