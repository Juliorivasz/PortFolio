import { useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTranslation } from "react-i18next";

type Props = {
  text?: string;
  fileUrl?: string; // Optional legacy
  fileName?: string; // Optional legacy
  englishCvUrl?: string; // New
  spanishCvUrl?: string; // New
  onClick?: () => void;
  className?: string; // New
  children?: ReactNode; // New
  openInNewTab?: boolean; // New
};

export const DownloadButton = ({ 
  text, 
  fileUrl, 
  fileName, 
  englishCvUrl, 
  spanishCvUrl, 
  onClick,
  className,
  children,
  openInNewTab = false
}: Props) => {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const displayText = text || t("cv.download");

  const handleAction = (url: string, name: string) => {
    if (openInNewTab) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setShowModal(false);
    } else {
      startDownload(url, name);
    }
  };

  const startDownload = (url: string, name: string) => {
    setIsDownloading(true);
    setShowModal(false); // Close modal if open

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = url;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setIsDownloaded(true);

      setTimeout(() => setIsDownloaded(false), 4000);
    }, 2000);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
    e.preventDefault(); 

    if (englishCvUrl && spanishCvUrl) {
      setShowModal(true);
    } else if (fileUrl && fileName) {
      handleAction(fileUrl, fileName);
    }
  };

  const ModalContent = () => (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4 top-0 left-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { e.stopPropagation(); setShowModal(false); }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-sm relative z-50 border border-gray-100 dark:border-gray-700"
          >
              <button 
                  onClick={(e) => { e.stopPropagation(); setShowModal(false); }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <CloseIcon />
              </button>
            
            <h3 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              {t("cv.selectLanguage")}
            </h3>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleAction(spanishCvUrl!, "CV_Julio_Rivas_ES.pdf")}
                className="w-full py-3 px-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 font-semibold transition-colors flex items-center justify-between group"
              >
                <span>🇪🇸 {t("cv.spanish")}</span>
                {openInNewTab ? (
                   <VisibilityIcon className="opacity-0 group-hover:opacity-100 transition-opacity" />
                ) : (
                   <CloudDownloadIcon className="opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
              
              <button
                onClick={() => handleAction(englishCvUrl!, "CV_Julio_Rivas_EN.pdf")}
                className="w-full py-3 px-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 font-semibold transition-colors flex items-center justify-between group"
              >
                <span>🇺🇸 {t("cv.english")}</span>
                 {openInNewTab ? (
                   <VisibilityIcon className="opacity-0 group-hover:opacity-100 transition-opacity" />
                ) : (
                   <CloudDownloadIcon className="opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <button
                  onClick={(e) => { e.stopPropagation(); setShowModal(false); }}
                  className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 underline"
              >
                  {t("cv.cancel")}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {children ? (
        <button onClick={handleClick} className={className}>
          {children}
        </button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          disabled={isDownloading}
          className="relative overflow-hidden rounded-2xl mx-auto cursor-pointer px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 shadow-xl flex items-center gap-2 font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        >
          <AnimatePresence mode="wait">
            {isDownloading ? (
              <motion.div
                key="downloading"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2">
                <CloudDownloadIcon className="animate-pulse" fontSize="large" />
                {t("cv.downloading")}
              </motion.div>
            ) : isDownloaded ? (
              <motion.div
                key="done"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center gap-2">
                <CheckCircleIcon className="text-green-300" fontSize="large" />
                {t("cv.downloaded")}
              </motion.div>
            ) : (
              <motion.div
                key="initial"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                className="flex items-center gap-2">
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="flex items-center justify-center gap-2">
                  <PictureAsPdfIcon fontSize="large" className="animate-pulse" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg">
                    {displayText}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      {createPortal(<ModalContent />, document.body)}
    </>
  );
};
