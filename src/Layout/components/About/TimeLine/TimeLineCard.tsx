import { useTheme } from "../../../../context/useTheme";

type TimelineCardProps = {
  date: string;
  title: string;
  description: string;
  showInitialHelp: boolean;
};

export default function TimelineCard({ date, title, description, showInitialHelp }: TimelineCardProps) {
  const { themeState } = useTheme();

  const isDark = themeState.theme === "DarkTheme";

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 rounded-2xl items-center mx-2 md:mx-4">
      <div className="md:w-1/3 w-full">
        <div
          className={`rounded-xl p-4 text-center shadow-lg text-2xl uppercase tracking-wider font-medium ${
            isDark ? "bg-indigo-600 text-white" : "bg-indigo-500 text-white"
          }`}>
          {date}
        </div>
      </div>
      <div className="md:w-2/3 w-full">
        <div
          className={`rounded-xl p-5 shadow-lg space-y-3 ${
            isDark ? "bg-white text-gray-800" : "bg-gray-800 text-white"
          }`}>
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          <p className={`text-sm md:text-base leading-relaxed ${isDark ? "text-gray-600" : "text-gray-300"}`}>
            {description}
          </p>
        </div>

        {showInitialHelp ? (
          <div
            className={`flex items-center gap-2 mt-2 animate-pulse ${isDark ? "text-indigo-200" : "text-indigo-900"}`}>
            <span className="text-2xl">🖱️</span>
            <span className="text-base">Swipe down to start</span>
          </div>
        ) : (
          <div className={`${isDark ? "text-gray-400" : "text-gray-500"} mt-2 text-sm`}>Swipe or use the arrows</div>
        )}
      </div>
    </div>
  );
}
