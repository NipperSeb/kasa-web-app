import React, { useState } from "react";

const Carrousel = ({ pictures, title }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <section className="slide-container">
      {/* remove chevron if just one picture*/}
      {pictures.length > 1 && (
        <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
      )}
      {pictures.length > 1 && (
        <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
      )}

      {pictures.map((picture, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={picture}
                alt={title}
                className="slide-container__image"
              />
            )}
            {index === current && (
              <span className="slide-container__number">
                {current + 1}/{pictures.length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carrousel;
