import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img className="header-logo" src={logo} alt="Logo de Kasa" />
        </NavLink>

        <ul className="header-links">
          <li className="header-link">
            <NavLink
              to="/"
              className={(link) => (link.isActive ? "active" : null)}
            >
              Accueil
            </NavLink>
          </li>

          <li className="header-link">
            <NavLink
              to="/about"
              className={(link) => (link.isActive ? "active" : null)}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
