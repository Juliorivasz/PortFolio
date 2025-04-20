import Zoom from "react-medium-image-zoom";
import { Certificate } from "../../../types/certificate";

interface ImageCardProps {
  certificate: Certificate;
  isLoaded: boolean;
  setIsLoaded: (value: boolean) => void;
}

export const ImageCard = ({ certificate, isLoaded, setIsLoaded }: ImageCardProps) => {
  return (
    <Zoom>
      <div className="w-full min-h-screen h-full relative">
        {!isLoaded && <div className="absolute inset-0 w-full h-full bg-gray-300 animate-pulse rounded-2xl z-0" />}
        <img
          src={certificate.img}
          alt={certificate.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover cursor-zoom-in transition-opacity duration-300 rounded-2xl z-10 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </Zoom>
  );
};
