import { CardContent, CardMedia, Chip, Button, Typography, Stack } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "../../../context/useTheme";

type Project = {
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
  const isDark = themeState.theme === "DarkTheme";

  return (
    <article
      className={`w-full max-w-sm transition-transform flex flex-col justify-between duration-300 hover:scale-[1.02] min-h-[24rem] ${
        isDark ? "bg__gray" : "bg__black"
      } shadow-lg`}
      style={{ borderRadius: "1rem" }}>
      <figure className="overflow-hidden rounded-t-[1rem] h-1/2">
        <CardMedia
          component="img"
          image={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-50 object-cover object-top"
        />
        <figcaption className="sr-only">{project.title} preview</figcaption>
      </figure>

      <CardContent className="my-auto">
        <header>
          <Typography
            variant="h6"
            component="h3"
            className={isDark ? "b" : "w"}>
            {project.title}
          </Typography>
        </header>

        <Typography
          variant="body2"
          className={`my-2 ${isDark ? "b" : "w"}`}>
          {project.description}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          className="my-2 gap-2"
          aria-label="Technologies used">
          {project.tech.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                bgcolor: isDark ? "#3f3f46" : "#e0e0e0",
                color: isDark ? "#fff" : "#000",
                fontSize: "0.75rem",
              }}
            />
          ))}
        </Stack>

        <nav
          className="flex justify-between my-2"
          aria-label="Project links">
          <Button
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            size="small"
            variant={isDark ? "contained" : "outlined"}
            disabled={project.isPrivate}
            sx={{
              color: isDark ? "#fff" : "#10172f",
              backgroundColor: isDark ? "#00196b" : "#dbe9ed",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: isDark ? "#10172f" : "#b9c9ff",
              },
            }}>
            Code
          </Button>

          <Button
            href={project.demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNewIcon />}
            size="small"
            variant="contained"
            disabled={!project.demoUrl}
            sx={{
              color: isDark ? "#fff" : "#10172f",
              backgroundColor: isDark ? "#00196b" : "#dbe9ed",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: isDark ? "#10172f" : "#b9c9ff",
              },
              "&.Mui-disabled": {
                color: isDark ? "#ccc" : "#aaa",
                backgroundColor: isDark ? "#3a3a3a" : "#f0f0f0",
                opacity: 1,
              },
            }}>
            Demo
          </Button>
        </nav>
      </CardContent>
    </article>
  );
};
