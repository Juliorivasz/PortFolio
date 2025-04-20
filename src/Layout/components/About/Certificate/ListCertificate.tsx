import { useState } from "react";
import { ImageCard } from "./ImageCard";
import { Certificate } from "../../../types/certificate";
import { OverlayCard } from "./OverlayCard";

interface ListCertificateProps {
  currentCertificates: Certificate[];
}

export const ListCertificate = ({ currentCertificates }: ListCertificateProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="flex justify-center items-center md:justify-evenly gap-6 flex-wrap w-full h-screen max-h-100 max-w-140"
      id="certification"
      style={{ padding: "0 1rem" }}>
      {currentCertificates.map((cert) => {
        return (
          <div
            key={cert.id}
            className="relative w-60 h-50 max-h-45 rounded-2xl overflow-hidden shadow-md group transition transform hover:scale-105 hover:shadow-xl">
            <ImageCard
              certificate={cert}
              setIsLoaded={setIsLoaded}
              isLoaded={isLoaded}
            />
            <OverlayCard {...cert} />
          </div>
        );
      })}
    </div>
  );
};
