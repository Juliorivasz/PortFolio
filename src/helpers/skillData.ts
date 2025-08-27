// data/skills.ts
import ReactIcon from "../img/skills/bxl-react.svg";
import TypeScriptIcon from "../img/skills/bxl-typescript.svg";
import HTMLIcon from "../img/skills/bxl-html5.svg";
import CSSIcon from "../img/skills/bxl-css3.svg";
import JavaScriptIcon from "../img/skills/bxl-javascript.gif";
import TailwindIcon from "../img/skills/bxl-tailwind-css.svg";
import MaterialUIIcon from "../img/skills/bxl-material-ui.svg";
import SpringBootIcon from "../img/skills/bxl-spring-boot.svg";
import NodeIcon from "../img/skills/bxl-nodejs.svg";
import ExpressIcon from "../img/skills/bxl-express.svg";
import FirebaseIcon from "../img/skills/bxl-firebase.svg";
import MySQLIcon from "../img/skills/bxl-mysql.svg";
import MongoDBIcon from "../img/skills/bxl-mongodb.svg";
import GitIcon from "../img/skills/bxl-git.svg";
import GitHubIcon from "../img/skills/bxl-github.svg";
import PostmanIcon from "../img/skills/bxl-postman.png";
import FigmaIcon from "../img/skills/bxl-figma.svg";
import Group from "../img/skills/Group.svg";
import Chat from "../img/skills/chat.gif";
import Solved from "../img/skills/solved.svg";
import WordPressIcon from "../img/skills/bxl-wordPress.svg";
import { SkillCategory } from "../Layout/types/skill";

export const iconMap: Record<string, string> = {
  React: ReactIcon,
  TypeScript: TypeScriptIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  JavaScript: JavaScriptIcon,
  Tailwind: TailwindIcon,
  "Material-UI": MaterialUIIcon,
  "Spring Boot": SpringBootIcon,
  "Node.js": NodeIcon,
  Express: ExpressIcon,
  Firebase: FirebaseIcon,
  MySQL: MySQLIcon,
  MongoDB: MongoDBIcon,
  Git: GitIcon,
  GitHub: GitHubIcon,
  Postman: PostmanIcon,
  Figma: FigmaIcon,
  "Trabajo en equipo": Group,
  Comunicación: Chat,
  "Resolución de problemas": Solved,
  WordPress: WordPressIcon,
};

export const skillData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Avanzado" },
      { name: "TypeScript", level: "Intermedio" },
      { name: "HTML", level: "Avanzado" },
      { name: "CSS", level: "Avanzado" },
      { name: "JavaScript", level: "Avanzado" },
      { name: "Tailwind", level: "Avanzado" },
      { name: "Material-UI", level: "Intermedio" },
      { name: "WordPress", level: "Intermedio" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: "Intermedio" },
      { name: "Node.js", level: "Intermedio" },
      { name: "Express", level: "Intermedio" },
      { name: "Firebase", level: "Avanzado" },
      { name: "MySQL", level: "Avanzado" },
      { name: "MongoDB", level: "Intermedio" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: "Avanzado" },
      { name: "GitHub", level: "Avanzado" },
      { name: "Postman", level: "Avanzado" },
      { name: "Figma", level: "Avanzado" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Trabajo en equipo", level: "Avanzado" },
      { name: "Comunicación", level: "Avanzado" },
      { name: "Resolución de problemas", level: "Avanzado" },
    ],
  },
];
