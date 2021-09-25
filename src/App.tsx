import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main";
import "./index.css";
const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
