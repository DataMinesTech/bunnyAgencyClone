import React from "react";
import Benifits from "../Layout/Benifits";
import TeamStats from "../Layout/TeamStats";

const AboutUs = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-4xl title-font font-bold mb-3">
                  About Us
                </h2>
                <p class="leading-relaxed text-md font-sans">
                  2 years ago, we started Only Fans because a few friends
                  approached us and said that they needed help to grow OnlyFans
                  because we knew a lot about marketing and branding. We then
                  did a test run with her and were able to achieve quite good
                  results, but it wasn’t enough for us. Then we got the best
                  mentors to help us, and through their strategies, we grew
                  enormously.
                  <br />
                  <br />A little bit more about The Bunny Agency: However, we
                  quickly realized that some of our mentors‘ methods were very
                  shortterm and not sustainable. So we took those strategies and
                  improved them over the course of a year so that we now have a
                  proof of concept that can help virtually all women on Only
                  Fans get into the top 0.1% and generate high 5 to low 6 figure
                  monthly sales.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamStats />
      <Benifits />
      <div className="mx-48 mt-12 my-24">
        <div class="p-6 bg-gradient-to-r from-green-400 to-purple-500 text-gray-500 bg-white shadow-2xl border border-gray-100 rounded-2xl font-medium">
          <h1 class="text-5xl text-center text-gray-800 font-black leading-7 md:leading-10">
            <span class="block w-full py-2  bg-clip-text leading-12 lg:inline">
              {" "}
              `` Make dreams become Reality ´´&nbsp;
            </span>
          </h1>
          <h2 className="font-bold text-2xl pr-8 flex justify-end text-white ">
            - Marc
          </h2>
          <p className="flex justify-end text-black">Ceo & Co-Founder</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
