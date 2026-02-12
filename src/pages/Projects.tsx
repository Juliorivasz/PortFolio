import { useTheme } from "../context/useTheme";
import { projectList } from "../helpers/projects";
import { ProjectCard } from "../Layout/components/Projects/ProjectCard";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Projects = () => {
  const { themeState } = useTheme();
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`container__section py-20 px-6 md:px-16 ${
        themeState.theme === "LightTheme" ? "bg__gray b" : "bg__black w"
      }`}>
      <header>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="projects-heading"
          className={`text-3xl font-bold mb-10 text-center ${themeState.theme === "LightTheme" ? "b" : "w"}`}>
          {t("projects.title")}
        </motion.h2>
      </header>

      <main>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        >
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </motion.div>
      </main>
    </section>
  );
};
