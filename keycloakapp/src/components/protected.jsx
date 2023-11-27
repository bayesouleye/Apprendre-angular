import React from "react";

const Protected = () => {

    return (
      <div className="home-container">
      <header>
        <h1>Bienvenue sur la page des élèves</h1>
        <p>Gérez facilement vos emplois du temps et vos notes</p>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Emploi du Temps de l'élève</h2>
        </div>
        <div className="feature">
          <h2>Verifiez vos notes</h2>
        </div>
        <div className="feature">
          <h2>Contacter l'administration</h2>
        </div>
      </section>

      <section className="get-started">
        <div className="buttons">
       
          <button className="login-button">Connexion</button>
        </div>
      </section>

      <footer>
        <p>© 2023 Gestion de l'Emploi du Temps</p>
      </footer>
    </div>
  );
}



export default Protected;