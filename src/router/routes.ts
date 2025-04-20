import { Route } from "../Layout/types/route";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Projects } from "../pages/Projects";
import { Skills } from "../pages/Skills";

export const routes: Route[] = [
  {
    name: "Home",
    path: "/",
    element: Home,
  },
  {
    name: "About me",
    path: "/about",
    element: About,
  },
  {
    name: "Skills",
    path: "/skills",
    element: Skills,
  },
  {
    name: "projects",
    path: "/projects",
    element: Projects,
  },
  {
    name: "Not Found",
    path: "*",
    element: NotFound,
  },
];
