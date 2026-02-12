
import { motion } from "framer-motion";
import { timelineData } from "../../../helpers/timeline";
import { useTheme } from "../../../context/useTheme";
import { useTranslation } from "react-i18next";

export const VerticalTimeline = () => {
  const { themeState } = useTheme();
  const { t } = useTranslation();
  const isLight = themeState.theme === "LightTheme";

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      <div className="relative border-l-2 border-blue-500 ml-3 md:ml-6 space-y-10">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 md:pl-8"
          >
            {/* Dot */}
            <span
              className={`absolute -left-[9px] top-6 h-4 w-4 rounded-full border-2 ${
                isLight ? "bg-white border-blue-500" : "bg-gray-900 border-blue-400"
              }`}
            ></span>

            {/* Content Card */}
            <div
              className={`p-5 rounded-lg shadow-sm border transition-all hover:shadow-md ${
                isLight ? "bg-white border-gray-100" : "bg-gray-800 border-gray-700"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className={`text-lg font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                  {t(`timeline.${item.id}.title`, item.title)}
                </h3>
                <span className={`text-xs font-mono px-2 py-1 rounded ${isLight ? "bg-gray-100 text-gray-600" : "bg-gray-700 text-gray-300"}`}>
                  {item.date}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-base font-semibold ${isLight ? "text-gray-700" : "text-gray-200"}`}>
                  {item.company}
                </span>

                <div className="flex items-center gap-2">
                  {/* Location - More visible */}
                  <span className={`text-sm font-medium px-2.5 py-0.5 rounded border ${
                    isLight 
                      ? "bg-gray-50 border-gray-200 text-gray-700" 
                      : "bg-gray-700/50 border-gray-600 text-gray-300"
                  }`}>
                    📍 {item.location}
                  </span>

                  {/* Modality - Professional Colors */}
                  <span className={`text-sm font-medium px-2.5 py-0.5 rounded border ${
                    item.modality === "Remote"
                      ? isLight 
                        ? "bg-teal-50 border-teal-200 text-teal-700" 
                        : "bg-teal-900/20 border-teal-800 text-teal-300"
                      : item.modality === "Hybrid"
                      ? isLight 
                        ? "bg-indigo-50 border-indigo-200 text-indigo-700" 
                        : "bg-indigo-900/20 border-indigo-800 text-indigo-300"
                      : isLight 
                        ? "bg-slate-50 border-slate-200 text-slate-700" 
                        : "bg-slate-800 border-slate-700 text-slate-300"
                  }`}>
                    {item.modality === "Remote" 
                      ? (t("timeline.remote", "Remote")) 
                      : item.modality === "Hybrid" 
                        ? (t("timeline.hybrid", "Hybrid")) 
                        : (t("timeline.onsite", "On-site"))}
                  </span>
                </div>
              </div>
              <p className={`${isLight ? "text-gray-600" : "text-gray-300"}`}>
                {t(`timeline.${item.id}.description`, item.description)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
