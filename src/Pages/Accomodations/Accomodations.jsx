import React from "react";
import { useParams } from "react-router-dom";
import AccomodationData from "../../Datas/Accomodation.json";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Tags from "../../Components/Tags/Tags";
import Collapse from "../../Components/Collapse/Collapse";

const Accomodations = () => {
  // fetch id image url and datas
  const { id } = useParams();
  const Datas = AccomodationData.find((index) => index.id === id);
  const {
    title,
    location,
    tags,
    host,
    rating,
    pictures,
    description,
    equipments,
  } = Datas;
  const range = [1, 2, 3, 4, 5];

  return (
    <main>
      <Carrousel id={id} pictures={pictures} title={title} />

      <section className="reference">
        <div className="reference__container">
          <h1>{title}</h1>
          <address>{location}</address>
          <ul className="tags">
            {tags.map((tag) => {
              return (
                <Tags key={`${tag}`} className="tag">
                  {tag}
                </Tags>
              );
            })}
          </ul>
        </div>

        <div className="identity">
          <div className="identity__items">
            <p className="identity__items--name">{host.name}</p>
            <img
              className="identity__items--image"
              src={host.picture}
              alt="{host.name}"
            />
          </div>

          <div className="rate__container">
            {range.map((rangeElem) =>
              rating >= rangeElem ? (
                <svg
                  key={rangeElem.toString()}
                  className="star"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="star--filled"
                    fill="#FF6060"
                    d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  />
                </svg>
              ) : (
                <svg
                  key={rangeElem.toString()}
                  className="star"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="star--empty"
                    fill="#E3E3E3"
                    d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  />
                </svg>
              )
            )}
          </div>
        </div>
      </section>
      <section className="collapse">
        <Collapse title={"Description"} content={description} />

        <Collapse
          title={"Equipements"}
          content={equipments.map((items) => (
            <ul>
              <li key={`${items}`}>{items}</li>
            </ul>
          ))}
        />
      </section>
    </main>
  );
};

export default Accomodations;
