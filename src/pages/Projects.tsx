import { useTheme } from "../context/useTheme";
import { projectList } from "../helpers/projectsData";
import { ProjectCard } from "../Layout/components/Projects/ProjectCard";

export const Projects = () => {
  const { themeState } = useTheme();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`container__section py-20 px-6 md:px-16 ${
        themeState.theme === "LightTheme" ? "bg__gray b" : "bg__black w"
      }`}>
      <header>
        <h2
          id="projects-heading"
          className={`text-3xl font-bold mb-10 text-center ${themeState.theme === "LightTheme" ? "b" : "w"}`}>
          Projects I have worked on
        </h2>
      </header>

      <main>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>
      </main>
    </section>
  );
};
