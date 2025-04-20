import { motion } from "framer-motion";
import { useTheme } from "../../../../context/useTheme";

type TimelineDotsProps = {
  currentIndex: number;
  total: number;
};

export default function TimelineDots({ currentIndex, total }: TimelineDotsProps) {
  const { themeState } = useTheme();
  const isDark = themeState.theme === "DarkTheme";

  return (
    <div className="flex justify-center mt-4 space-x-1 sm:space-x-2">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          layout
          className={`w-2 h-2 rounded-full transition-transform ${
            i === currentIndex ? "bg-indigo-600 scale-125" : isDark ? "bg-gray-300" : "bg-gray-600"
          }`}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      ))}
    </div>
  );
}
