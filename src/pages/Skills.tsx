import { motion } from "framer-motion";
import { skillData, iconMap } from "../helpers/skills";
import { useTheme } from "../context/useTheme";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { themeState } = useTheme();
  const { t } = useTranslation();
  const isLight = themeState.theme === "LightTheme";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section
      className={`container__section mx-auto px-4 sm:px-6 py-20 ${
        isLight ? "bg__gray b" : "bg__black w"
      }`}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        {t("skills.title")}
      </motion.h2>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {skillData.map((category, idx) => (
          <motion.article 
            key={category.title}
            variants={item}
            className={`rounded-2xl p-8 shadow-sm border transition-all hover:shadow-xl hover:-translate-y-1 ${
              isLight 
                ? "bg-white border-gray-100" 
                : "bg-gray-800 border-gray-700"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
              isLight ? "text-gray-800" : "text-white"
            }`}>
              {/* Optional: Add category icons here if available, or just keeping text */}
              <span className={`h-8 w-1 rounded-full ${
                idx === 0 ? "bg-blue-500" : 
                idx === 1 ? "bg-green-500" : 
                idx === 2 ? "bg-purple-500" : "bg-orange-500"
              }`}></span>
              {t(`skills.categories.${category.title}`, { defaultValue: category.title })}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl transition-colors ${
                    isLight 
                      ? "bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700" 
                      : "bg-gray-900/50 hover:bg-gray-700 text-gray-300 hover:text-white"
                  }`}
                >
                  <img 
                    src={iconMap[skill.name] || ""} 
                    alt={skill.name}
                    className="w-10 h-10 mb-2 object-contain filter drop-shadow-sm" 
                  />
                  <span className="text-sm font-medium text-center">{t(`skills.names.${skill.name}`, { defaultValue: skill.name })}</span>
                  {/* Optional: Level indicator */}
                  {/* <span className="text-[10px] opacity-70 mt-1">{t(`skills.levels.${skill.level}`)}</span> */}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};
