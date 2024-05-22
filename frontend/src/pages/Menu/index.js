import React from "react";
import Card from "../../components/Card";

import unnamed from "../../images/unnamed.png";
import item1 from "../../images/22859c4f20fd2e627ce4dfb3390c23e3.jpg";
import av from "../../images/av.avif";
import aaIcon from "../../images/cropped-AA-Fav-icon-transparent.png";

const Menu = () => {
  return (
    <main>
      <section className="cards-container">
        <Card imageSrc={unnamed} title="Moon" rating="4.2" />
        <Card imageSrc={item1} title="VOOM" rating="5.0" />
        <Card imageSrc={av} title="AVENUE 48" rating="4.8" />
        <Card imageSrc={aaIcon} title="Auntie Annes" rating="4.2" />
      </section>
    </main>
  );
};

export default Menu;
