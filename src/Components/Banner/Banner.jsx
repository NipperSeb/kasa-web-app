import React from "react";
import { useState, useEffect } from "react";
import BannerCoast from "../../Assets/banner-coast.png";
import BannerMountain from "../../Assets/banner-mountain.png";

export default function Banner() {
  const urlHome = document.location.pathname === "/";
  const bannerImg = urlHome ? BannerCoast : BannerMountain;
  const bannerAlt = urlHome ? "Paysage côtier" : "Paysage de montagne";

  const [windowSize, setWindowSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowSize[0] > 768) {
    return (
      <div className="banner">
        <img src={bannerImg} alt={bannerAlt} className="banner__img" />
        {urlHome && (
          <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        )}
      </div>
    );
  } else {
    return (
      <div className="banner">
        <img src={bannerImg} alt={bannerAlt} className="banner__img" />
        {urlHome && (
          <h1 className="banner__title">
            Chez vous,
            <br />
            partout et ailleurs
          </h1>
        )}
      </div>
    );
  }
}
