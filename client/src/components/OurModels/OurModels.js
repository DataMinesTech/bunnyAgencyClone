import React from "react";
import BeforeAfter from "../Layout/BeforeAfter";
import MetaData from "../Layout/MetaData/MetaData";
import ModelsAbout from "../Layout/ModelsAbout/ModelsAbout";
import Statistics from "../Layout/Statistics";

const OurModels = () => {
  return (
    <>
      <MetaData title="Bunny Agency | Our Models" />
      <div>
        <div className="relative md:mb-20">
          <h1 class="text-4xl md:text-5xl pt-10 text-center text-gray-800 font-black leading-7 md:leading-10">
            About Our
            <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              {" "}
              Models
            </span>
          </h1>
          <p class="mt-5 text-gray-900 font-normal text-center text-base md:text-lg">
            Find out what our Models say about The Bunny Agency.
          </p>
        </div>

        <div className="py-8">
          <ModelsAbout />
          <Statistics />
        </div>
        <div>
          <h1 class="text-4xl md:text-5xl py-10 text-center text-gray-800 font-black leading-7 md:leading-10">
            Before And
            <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              {" "}
              After&nbsp;
            </span>
            <p class="mt-5 text-gray-900 font-normal text-center text-base md:text-lg">
              Before and After Images of Joining Bunny Agency
            </p>
          </h1>
          <BeforeAfter />
        </div>
        <div className="py-8"></div>
      </div>
    </>
  );
};

export default OurModels;
