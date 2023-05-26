import React from "react";
import AccomodationDatas from "../../Datas/Accomodation.json";
import Cards from "../Cards/Cards";

export default function Gallery() {
  return (
    <section className="gallery">
      {AccomodationDatas.map((datas) => (
        <Cards
          key={datas.id}
          title={datas.title}
          cover={datas.cover}
          id={datas.id}
        />
      ))}
    </section>
  );
}
