import { ReactNode } from "react";
import "./App.css";
import "./css/animate.css";

import { ThemeProviderP } from "./context/ThemeProvider";

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <ThemeProviderP>
      <div className={`App`}>{children}</div>
    </ThemeProviderP>
  );
}

export default App;
