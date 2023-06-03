import React from "react";
import { useState, useRef } from "react";

export default function Collapse(props) {
  const [open, setOpen] = useState(false);
  // const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();
  if (refHeight.current) console.log(refHeight.current.scrollHeight);
  const toggle = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  //   setHeightEl(`${refHeight.current.scrollHeight}px`);
  // }, []);

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
