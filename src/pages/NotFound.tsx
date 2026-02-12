import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/useTheme";
import notFound from "../img/svg/not-found.svg";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
  const navigate = useNavigate();
  const { themeState } = useTheme();
  const { t } = useTranslation();
  const isDark = themeState.theme === "DarkTheme";

  return (
    <div
      className={`container__section min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 ${
        isDark ? "bg__black" : "bg__gray"
      }`}>
      {/* Fondo decorativo SVG animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://www.transparenttextures.com/patterns/cubes.png"
          alt="bg-pattern"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-center flex flex-col items-center gap-6 max-w-2xl">
        {/* Imagen */}
        <motion.img
          src={notFound}
          alt="Not Found"
          className="w-full max-w-md mx-auto"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Título */}
        <Typography
          variant="h4"
          className={`font-semibold ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>
          {t("notfound.title")}
        </Typography>

        {/* Descripción */}
        <Typography className={`text-base leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
          {t("notfound.description")}
        </Typography>

        {/* Botón */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: 3,
            backgroundColor: isDark ? "#ffffff" : "#1976d2",
            color: isDark ? "#000000" : "#ffffff",
            fontWeight: 600,
            boxShadow: isDark ? "0 0 12px rgba(255,255,255,0.2)" : "none",
            "&:hover": {
              backgroundColor: isDark ? "#e4e4e7" : "#1565c0",
            },
          }}>
          {t("notfound.button")}
        </Button>
      </motion.div>
    </div>
  );
};
