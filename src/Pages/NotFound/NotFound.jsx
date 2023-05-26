import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="error">
      <section className="error__container">
        <h1 className="error__container--title">404</h1>
        <p className="error__container--text">
          Oups! La page que vous demandez n'existe pas.
        </p>

        <div
          className="error__container--navigate"
          onClick={() => navigate("/")}
        >
          Retourner sur la page d'accueil
        </div>
      </section>
    </main>
  );
}
