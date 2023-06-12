import React from "react";
import { useState, useRef } from "react";

export default function Collapse(props) {
  const [open, setOpen] = useState(false);
  //keep the height of the collapse
  const refHeight = useRef();
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse__container">
      <div className="collapse__button" onClick={toggle}>
        <h2>{props.title}</h2>
        {open ? (
          <ul>
            <i className="fa-solid fa-chevron-up rotate"></i>
          </ul>
        ) : (
          <ul>
            <i className="fa-solid fa-chevron-up"></i>
          </ul>
        )}
      </div>

      <div
        className="collapse__content"
        ref={refHeight}
        style={
          open
            ? { height: refHeight.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div>{props.children}</div>
      </div>
    </div>
  );
}
