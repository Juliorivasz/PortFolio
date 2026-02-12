
import { useState } from "react";
import { certificates } from "../../../helpers/certificates";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../context/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export type Category = keyof typeof certificates;

export const Certificates = () => {
  const { t } = useTranslation();
  const { themeState } = useTheme();
  const [activeTab, setActiveTab] = useState<Category>("careers");
  const isLight = themeState.theme === "LightTheme";

  const tabs = [
    { id: "careers", label: t("certificates.tabs.careers", "Careers") },
    { id: "courses", label: t("certificates.tabs.courses", "Courses") },
    { id: "internships", label: t("certificates.tabs.internships", "Internships") },
  ];

  const currentCertificates = certificates[activeTab] || [];

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className={`inline-flex flex-wrap justify-center gap-2 rounded-lg p-1 ${isLight ? "bg-gray-100" : "bg-gray-800"}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? isLight
                    ? "bg-white text-blue-600 shadow-sm"
                    : "bg-gray-700 text-blue-400 shadow-md"
                  : isLight
                  ? "text-gray-500 hover:text-gray-900"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        >
          {currentCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -5 }}
              className={`w-full max-w-xs overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 ${
                isLight ? "bg-white shadow-gray-200/50" : "bg-gray-800 shadow-black/30"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-blue-50"
                    aria-label={`View ${cert.title}`}
                  >
                    <OpenInNewIcon />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`font-bold text-lg mb-1 leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
                  {cert.title}
                </h3>
                <p className={`text-sm mb-3 ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                  {cert.institution}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    isLight ? "bg-blue-50 text-blue-700" : "bg-blue-900/30 text-blue-300"
                  }`}>
                    {cert.issueDate}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
