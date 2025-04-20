import { lazy, Suspense } from "react";
import { useTheme } from "../../../context/useTheme";
import profile from "../../../img/julioRivas.webp";

const OrbitReact = lazy(() => import("./OrbitReact"));

export const MePhoto = () => {
  const { themeState } = useTheme();
  return (
    <>
      <div className="relative">
        <div className={`div__img__about_me ${themeState.theme === "LightTheme" ? "" : "darkMode"}`}>
          <Suspense fallback={<div>Loading...</div>}>
            <img
              className="img__about_me"
              src={profile}
              alt="profile"
              title="profile"
              loading="lazy"
            />
          </Suspense>
        </div>
        <div className="perspective-container">
          <div className="orbit-container">
            <Suspense fallback={""}>
              <OrbitReact />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};
