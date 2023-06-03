import React from "react";
import Banner from "../../Components/Banner/Banner";
import DataAbout from "../../Datas/About.json";
import Collapse from "../../Components/Collapse/Collapse";

export default function About() {
  return (
    <main>
      <Banner />
      <section className="collapse about">
        {DataAbout.map((items) => (
          <Collapse key={items.id} title={items.label}>
            <p>{items.content}</p>
          </Collapse>
        ))}
      </section>
    </main>
  );
}
