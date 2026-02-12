import programacion from "../img/certificates/UTN-TUP.webp";
import frontend from "../img/certificates/Alura-certificado-Frontend.webp";
import bachelor from "../img/certificates/titulo-bachiller.webp";
import nodejs from "../img/certificates/nodeJs.webp";
import mern from "../img/certificates/react-MERN.webp";
import js from "../img/certificates/javascript-web.webp";
import arquitect from "../img/certificates/html5-css3.webp";
import controlVersion from "../img/certificates/git-and-github.webp";
import frontDeveloper from "../img/certificates/pasantia.webp";
import inncome from "../img/certificates/inncome.jpeg";

export const certificates = {
  careers: [
    {
      id: "1",
      title: "University Technician in Programming",
      institution: "National Technological University",
      issueDate: "2025",
      img: programacion,
      url: "https://www4.frm.utn.edu.ar/tecnicatura-superior-programacion/",
    },
    {
      id: "2",
      title: "Frontend Developer",
      institution: "Oracle + Alura",
      issueDate: "2022",
      img: frontend,
      url: "https://app.aluracursos.com/degree/certificate/295cb033-40a3-4f66-a9dc-99c002c55bbc",
    },
    {
      id: "3",
      title: "Bachelor of Science",
      institution: "UEC Mario Lezama Esquivel",
      issueDate: "2017",
      img: bachelor,
      url: bachelor, // Use the imported image variable
    },
  ],
  courses: [
    {
      id: "4",
      title: "NodeJs",
      institution: "Udemy - Fernando Herrera",
      issueDate: "2024",
      img: nodejs,
      url: "https://www.udemy.com/certificate/UC-918a15a9-b947-468e-b2c9-2769048bf895/",
    },
    {
      id: "5",
      title: "React (MERN)",
      institution: "Udemy - Fernando Herrera",
      issueDate: "2024",
      img: mern,
      url: "https://www.udemy.com/certificate/UC-a367ec0d-b509-4ec2-916b-4cc1aa47649a/",
    },
    {
      id: "6",
      title: "JavaScript",
      institution: "Alura Latam",
      issueDate: "2022",
      img: js,
      url: "https://app.aluracursos.com/user/julioandresrivas/course/javascript-parte2-introduccion-lenguaje-web/formalCertificate",
    },
    {
      id: "7",
      title: "Html5 & Css3",
      institution: "Alura Latam",
      issueDate: "2022",
      img: arquitect,
      url: "https://app.aluracursos.com/user/julioandresrivas/course/html5-css3-avanzando-css/formalCertificate",
    },
    {
      id: "8",
      title: "Git & Github",
      institution: "Alura Latam",
      issueDate: "2022",
      img: controlVersion,
      url: "https://app.aluracursos.com/user/julioandresrivas/course/git-github-control-version/formalCertificate",
    },
  ],
  internships: [
    {
      id: "9",
      title: "Software Developer",
      institution: "INNCOME",
      issueDate: "2025-2025",
      img: inncome,
      url: "https://inncome.net/",
    },
    {
      id: "10",
      title: "Frontend Developer",
      institution: "Semillero - Quinto Impacto",
      issueDate: "2023-2023",
      img: frontDeveloper,
      url: frontDeveloper, // Use imported image variable
    },
    {
      id: "11",
      title: "Computer Technician",
      institution: "Familia Andrada SAS",
      issueDate: "2020-2022",
      img: "https://www.franquiciasmendoza.com/admin/img/franquicias/Sin%20t%C3%ADtulo-7-02.jpg",
      url: "https://www.franquiciasmendoza.com/admin/img/franquicias/Sin%20t%C3%ADtulo-7-02.jpg",
    },
  ],
} as const;
