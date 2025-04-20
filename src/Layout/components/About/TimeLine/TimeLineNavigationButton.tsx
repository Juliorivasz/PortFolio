import { motion } from "framer-motion";
import { useTheme } from "../../../../context/useTheme";

type TimelineNavigationButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
};

export default function TimelineNavigationButton({ direction, onClick, disabled }: TimelineNavigationButtonProps) {
  const isLeft = direction === "left";
  const { themeState } = useTheme();
  const isLight = themeState.theme === "LightTheme";

  const baseStyles = disabled
    ? "opacity-30 cursor-not-allowed"
    : `hover:opacity-100 cursor-pointer transition-opacity duration-300 ${isLight ? "opacity-50" : "opacity-70"}`;

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      className={`absolute ${
        isLeft ? "left-2" : "right-2"
      } top-1/2 -translate-y-1/2 text-2xl sm:text-3xl ${baseStyles}`}
      onClick={onClick}
      disabled={disabled}>
      {isLeft ? "↑" : "↓"}
    </motion.button>
  );
}
