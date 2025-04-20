import { FC } from "react";
import { useTheme } from "../../../context/useTheme";

interface CategoryButtonProps {
  title: string;
  selectedCategory: string;
  onClick: () => void;
}

const CategoryButton: FC<CategoryButtonProps> = ({ title, selectedCategory, onClick }) => {
  const { themeState } = useTheme();
  const isDark = themeState.theme === "DarkTheme";

  return (
    <li className="min-w-[205px]">
      <button
        onClick={onClick}
        className={`w-full text-left px-5 py-3 cursor-pointer rounded-lg font-semibold transition duration-300 ease-in-out flex items-center gap-2 min-h-[60px] overflow-wrap break-words ${
          selectedCategory === title
            ? isDark
              ? "bg-blue-600 text-white shadow-md scale-[1.02]"
              : "bg-blue-800 text-white shadow-md scale-[1.02]"
            : isDark
            ? "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
            : "bg-gray-700 text-gray-300 hover:bg-blue-700 hover:text-white"
        }`}>
        <span className="inline-block w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
        {title}
      </button>
    </li>
  );
};

export default CategoryButton;
