import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import AccordionHome from "../Layout/AccordionHome";
import MidContainer from "../MidContainer/MidContainer";
import TopContainer from "../TopContainer/TopContainer";

const Home = () => {
  return (
    <div>
      <TopContainer />
      <MidContainer />

      <div className="mx-12">
        <AccordionHome />
      </div>
    </div>
  );
};

export default Home;
