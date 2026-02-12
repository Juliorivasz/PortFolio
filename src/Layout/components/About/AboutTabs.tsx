
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../../context/useTheme";
import { VerticalTimeline } from "./VerticalTimeline";
import { Certificates } from "./Certificates";

type Tab = "experience" | "certificates";

export const AboutTabs = () => {
  const { t } = useTranslation();
  const { themeState } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>("experience");
  const isLight = themeState.theme === "LightTheme";

  const tabs = [
    { id: "experience", label: t("about.experience") },
    { id: "certificates", label: t("about.certificates") },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Tabs Header */}
      <div className="flex justify-center mb-4">
        <div className={`inline-flex rounded-lg p-1 ${isLight ? "bg-gray-200" : "bg-gray-800"}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? isLight
                    ? "bg-white text-blue-600 shadow-sm"
                    : "bg-gray-700 text-blue-400 shadow-sm"
                  : isLight
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "experience" && <VerticalTimeline />}
            {activeTab === "certificates" && (
              <div className="flex justify-center">
                 {/* Width adjustment for Certificates component */}
                 <div className="w-full">
                    <Certificates />
                 </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
