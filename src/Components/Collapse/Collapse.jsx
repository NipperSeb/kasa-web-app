import React from "react";
import { useState } from "react";

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  //switch open/close :
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse__container">
      <div className="collapse__button" onClick={toggle}>
        <h2>{title}</h2>
        {open ? (
          <ul>
            <i className="fa-solid fa-chevron-up"></i>
          </ul>
        ) : (
          <ul>
            <i className="fa-solid fa-chevron-down"></i>
          </ul>
        )}
      </div>
      {open && (
        <div className="collapse__content">
          {" "}
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
