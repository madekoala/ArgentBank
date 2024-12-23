import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./src/pages/accueil";
import Connexion from "./src/pages/connexion";
import User from "./src/pages/user";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import "./src/Sass/main.scss";
import history from "./src/redux/history";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    {/* Utilisation de React.StrictMode pour détecter les problèmes potentiels dans l'application */}
    <React.StrictMode>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Login" element={<Connexion />} />
          <Route path="/Profile/*" element={<User />} />
          <Route path="/*" element={<Connexion />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
