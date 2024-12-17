import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./ArgentBank-Frontend/src/pages/accueil";
import Connexion from "./ArgentBank-Frontend/src/pages/connexion";
import User from "./ArgentBank-Frontend/src/pages/user";
import { Provider } from "react-redux";
import store from "./ArgentBank-Frontend/src/redux/store";
import "./ArgentBank-Frontend/src/Sass/main.scss"
import history from "./ArgentBank-Frontend/src/redux/history";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // Utilisation du composant Provider de react-redux pour fournir le store Redux à l'application
  <Provider store={store}>
    {/* Utilisation de React.StrictMode pour détecter les problèmes potentiels dans l'application */}
    <React.StrictMode>
      {/* Utilisation du Router pour gérer les routes de l'application */}
      <Router history={history}>
        {/* Utilisation de Routes pour définir les différentes routes de l'application */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Accueil />} />
          {/* Route pour la page de connexion */}
          <Route path="/Login" element={<Connexion />} />
          {/* Route pour la page de profil utilisateur */}
          <Route path="/Profile/*" element={<User />} />
          {/* Route par défaut en cas d'URL inconnue */}
          <Route path="/*" element={<Connexion />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
