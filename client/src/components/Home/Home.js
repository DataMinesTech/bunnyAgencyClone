import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import AccordionHome from "../Layout/AccordionHome";
import CTA from "../Layout/CTA/CTA";
import MetaData from "../Layout/MetaData/MetaData";
import MidContainer from "../MidContainer/MidContainer";
import TopContainer from "../TopContainer/TopContainer";

const Home = () => {
  return (
    <>
      <div>
        <MetaData title="Bunny Agency | Home Page" />
        <TopContainer />
        <MidContainer />

        {/* <div className="mx-12 mb-10">
        <AccordionHome />
      </div> */}
        <CTA />
      </div>
    </>
  );
};

export default Home;
