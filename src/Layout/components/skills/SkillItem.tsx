import { FC } from "react";
import { useTheme } from "../../../context/useTheme";

interface SkillItemProps {
  name: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  icon: string;
}

const SkillItem: FC<SkillItemProps> = ({ name, level, icon }) => {
  const { themeState } = useTheme();
  const isDark = themeState.theme === "DarkTheme";

  return (
    <li
      className={`flex justify-between items-center rounded-lg p-3 border border-gray-100 ${
        isDark ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      } shadow-sm`}>
      <div className="flex items-center gap-3">
        <img
          src={icon}
          alt={name}
          className="w-6 h-6"
        />
        <span>{name}</span>
      </div>
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-full uppercase ${
          level === "Básico"
            ? "bg-orange-100 text-orange-700"
            : level === "Intermedio"
            ? "bg-blue-100 text-blue-700"
            : "bg-green-100 text-green-700"
        }`}>
        {level}
      </span>
    </li>
  );
};

export default SkillItem;
