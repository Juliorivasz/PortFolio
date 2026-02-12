
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/useTheme';
import { motion } from 'framer-motion';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { themeState } = useTheme();
  const isLight = themeState.theme === 'LightTheme';

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={`flex items-center rounded-full p-1 border ${isLight ? 'border-gray-300 bg-gray-100' : 'border-gray-700 bg-gray-800'}`}>
      {['es', 'en'].map((lang) => (
        <button
          key={lang}
          onClick={() => toggleLanguage(lang)}
          className={`relative px-3 py-1 rounded-full text-xs font-bold transition-colors z-10 ${
            i18n.language === lang
              ? isLight ? 'text-blue-600' : 'text-blue-400'
              : isLight ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          {lang === 'es' ? 'ES' : 'EN'}
          {i18n.language === lang && (
            <motion.div
              layoutId="lang-active"
              className={`absolute inset-0 rounded-full shadow-sm -z-10 ${
                isLight ? 'bg-white' : 'bg-gray-700'
              }`}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
