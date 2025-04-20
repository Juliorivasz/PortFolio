import { Link } from "react-router-dom";
import { NetworkProps } from "../../types/networkSocial";
import { useTheme } from "../../../context/useTheme";

export const ItemSocial = ({ name, img, link, size }: NetworkProps) => {
  const { themeState } = useTheme();
  return (
    <>
      <li>
        <Link
          className="social__networks"
          to={link}
          target="_blank"
          rel="noreferrer">
          <img
            className="img__social__networks"
            width={size.width}
            height={size.height}
            title={name}
            src={themeState.theme === "LightTheme" ? img.dark : img.light}
            alt={name}
            loading="lazy"
          />
        </Link>
      </li>
    </>
  );
};
