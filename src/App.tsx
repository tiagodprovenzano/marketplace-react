import { ApolloProvider } from "@apollo/client";
import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main";
import { AuthContext, initialValue } from "./contexts/AuthContext";
import "./index.css";
import client from "./services/apollo";
const App = () => {
  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={initialValue}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </AuthContext.Provider>
      </ApolloProvider>
    </CookiesProvider>
  );
};

export default App;
