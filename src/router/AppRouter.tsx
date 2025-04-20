import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/components/Layout";
import { routes } from "./routes";
import "../App.css";
import "../css/animate.css";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};
