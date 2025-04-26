import playerzone from "../img/projects/playerZone.png";
import metabici from "../img/projects/metabici.webp";
import tkk from "../img/projects/TKK.webp";
import classkit from "../img/projects/classkit.webp";

export const projectList = [
  {
    title: "E-commerce - PlayerZone",
    description: "Online store with login, registration, and cart",
    image: playerzone,
    demoUrl: "https://playerzone.netlify.app/",
    isPrivate: false,
    repoUrl: "https://github.com/Juliorivasz/PlayerZone",
    tech: ["Html", "Firebase", "Css", "JavaScript"],
  },
  {
    title: "Content manager - MetaBici",
    description: "Landing page with company news, Dashboard with user and news control",
    image: metabici,
    demoUrl: "",
    isPrivate: true,
    repoUrl: "https://github.com/Juliorivasz/Metabici2",
    tech: ["JavaScript", "SpringBoot", "MySQL", "Figma", "Html", "Css"],
  },
  {
    title: "E-commerce - The Krusty Krab",
    description:
      "Online store with login, registration, cart, payment gateway, dashboard with full control of products, users, accounting",
    image: tkk,
    demoUrl: "",
    isPrivate: false,
    repoUrl: "https://github.com/Juliorivasz/ProyectoTKK",
    tech: ["React", "SpringBoot", "MySQL", "Figma", "TypeScript", "Tailwind", "Express"],
  },
  {
    title: "Inventory manager - Classkit",
    description: "Dashboard with user and inventory control",
    image: classkit,
    demoUrl: "https://techbooker.netlify.app/",
    isPrivate: false,
    repoUrl: "https://github.com/Juliorivasz/TechBooker",
    tech: ["React", "SpringBoot", "MySQL", "Figma", "TypeScript", "Tailwind"],
  },
];
