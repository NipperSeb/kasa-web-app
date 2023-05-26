import React from "react";
import { Link } from "react-router-dom";

export default function Cards({ cover, title, id }) {
  return (
    <Link className="container-cards" to={`/accomodations/${id}`}>
      <img className="container-cards__img" src={cover} alt={title} />
      <h3 className="container-cards__title">{title}</h3>
    </Link>
  );
}
