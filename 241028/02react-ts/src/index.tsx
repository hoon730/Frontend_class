import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import App from "./App1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
