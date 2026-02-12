import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter.tsx";
import "./i18n"; // Initialize i18n


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <AppRouter />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
);
