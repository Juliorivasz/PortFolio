import { useTheme } from "../../../context/useTheme";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type Project = {
  id?: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  isPrivate: boolean;
  repoUrl: string;
  tech: string[];
};

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const { themeState } = useTheme();
  const { t } = useTranslation();
  const isLight = themeState.theme === "LightTheme";

  // Use translation if id exists, otherwise fallback to prop
  const title = project.id ? t(`projects.${project.id}.title`) : project.title;
  const description = project.id ? t(`projects.${project.id}.description`) : project.description;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`group w-full max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border ${
        isLight ? "bg-white border-gray-100" : "bg-gray-800 border-gray-700"
      }`}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={`Screenshot of ${title}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${isLight ? 'bg-black' : 'bg-white'}`}></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold mb-2 ${isLight ? "text-gray-900" : "text-white"}`}>
          {title}
        </h3>
        
        <p className={`text-sm mb-4 line-clamp-3 flex-grow ${isLight ? "text-gray-600" : "text-gray-300"}`}>
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                isLight 
                  ? "bg-blue-50 text-blue-700 border border-blue-100" 
                  : "bg-blue-900/30 text-blue-300 border border-blue-800/50"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors duration-300 border ${
              project.isPrivate || !project.repoUrl
                ? "opacity-50 cursor-not-allowed border-gray-300 text-gray-400"
                : isLight
                ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-gray-900"
            }`}
            aria-disabled={project.isPrivate || !project.repoUrl}
            onClick={(e) => (project.isPrivate || !project.repoUrl) && e.preventDefault()}
          >
            <GitHubIcon fontSize="small" />
            {t('projects.code')}
          </a>

          <a
            href={project.demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all duration-300 transform hover:-translate-y-0.5 ${
              !project.demoUrl
                ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700"
            }`}
            aria-disabled={!project.demoUrl}
            onClick={(e) => !project.demoUrl && e.preventDefault()}
          >
            <OpenInNewIcon fontSize="small" />
            {t('projects.demo')}
          </a>
        </div>
      </div>
    </motion.article>
  );
};
