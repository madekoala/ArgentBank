import Footer from "../components/footer";
import Formulaire from "../components/formulaire";
import Header from "../components/header";
import React from "react";

/**
 * The Connexion Page
 * with header,
 * form to connect at your personnal espace
 * and footer of Argent Bank
 * @component
 */
function Connexion() {
  return (
    <div className="connexion">
      <Header />
      <main>
        <Formulaire />
      </main>
      <Footer />
    </div>
  );
}

export default Connexion;
