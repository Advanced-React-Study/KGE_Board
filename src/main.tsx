import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </React.StrictMode>
  </ThemeProvider>
);
