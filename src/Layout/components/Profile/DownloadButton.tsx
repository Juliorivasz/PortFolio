import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Éxito

type Props = {
  text?: string;
  fileUrl: string;
  fileName: string;
  onClick?: () => void;
};

export const DownloadButton = ({ text = "Download cv", fileUrl, fileName, onClick }: Props) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();
    setIsDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setIsDownloaded(true);

      setTimeout(() => setIsDownloaded(false), 4000);
    }, 2000);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      disabled={isDownloading}
      className="relative overflow-hidden rounded-2xl mx-auto cursor-pointer px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 shadow-xl flex items-center gap-2 font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
      <AnimatePresence mode="wait">
        {isDownloading ? (
          <motion.div
            key="downloading"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-2">
            <CloudDownloadIcon
              className="animate-pulse"
              fontSize="large"
            />
            Dowloading...
          </motion.div>
        ) : isDownloaded ? (
          <motion.div
            key="done"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-center gap-2">
            <CheckCircleIcon
              className="text-green-300"
              fontSize="large"
            />
            Downloaded!
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
              <PictureAsPdfIcon
                fontSize="large"
                className="animate-pulse"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg">
                {text}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
