import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import Accordion from "../Layout/Accordion";
import CardCarousel from "../Layout/CardCarousel.js/CardCarousel";

const MidContainer = () => {
  return (
    <div>
      <div
        class="relative flex flex-col items-center justify-center min-h-screen bg-cover min-w-screen"
        style={{
          backgroundImage: `url(
            "https://images.unsplash.com/photo-1536869338989-e7ffd2297454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          )`,
        }}
      >
        <div class="absolute inset-0 w-full h-full bg-black bg-opacity-75"></div>

        <div class="flex max-w-6xl mx-auto">
          <div class="container relative flex flex-col w-1/2 px-10 pb-1 pr-12 text-2xl font-hairline text-white">
            <h2 className="font-serif text-4xl text-gray-400">About</h2>
            <h2 class="relative z-20 text-5xl font-extrabold leading-tight text-white">
              <br /> Who We Are
            </h2>
            <p class="relative z-20 block mt-4 text-xl">
              We've created the ultimate resource for turning your culture into
              a super-powered productivity machine by encouraging collaboration
              growth, and incentives! The Bunny Agency is a German Only
              FansAgency / Management that has made it its mission to get its
              models into the top 0.5% of creators in order to earn 5-6 figures
              a month.
            </p>
            {/* <div class="flex mt-4">
              <a
                href="#_"
                class="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-lg shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-8"
              >
                Get Started
              </a>
              <a
                href="#_"
                class="flex items-center self-start justify-center px-5 py-3 mt-5 ml-5 text-base font-medium leading-tight text-indigo-500 transition duration-150 ease-in-out bg-gray-200 border-transparent rounded-lg shadow hover:bg-white focus:outline-none focus:border-gray-100 focus:shadow-outline-gray md:py-4 md:text-lg md:px-8"
              >
                How It Works
              </a>
            </div> */}
          </div>
          <div class="relative w-1/2 overflow-hidden rounded-lg shadow-2xl cursor-pointer group">
            <div class="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-25">
              <span class="flex items-center justify-center w-20 h-20 bg-white bg-opacity-75 rounded-full">
                <svg
                  class="w-auto h-8 ml-1 text-indigo-600 fill-current"
                  viewBox="0 0 52 66"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z"
                    fill-rule="nonzero"
                  />
                </svg>
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center text-center mb-24 mt-12">
        <div class="w-full lg:w-6/12 px-4">
          <h1 class="text-gray-900 text-4xl font-bold mb-8">Our Core Values</h1>

          <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-18">
            Through years of experience as an OnlyFans Agency, we know exactly
            how we can fully fulfill your potential and conquer the world of men
            for you.
          </p>
        </div>
      </div>
      <div class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        <div class="max-w-xs mx-auto bg-white shadow-2xl drop-shadow-2xl shadow-green-500/50  rounded-xl p-5 py-3 m-2">
          <div class="ml-3">
            <h1 class="text-2xl font-bold my-3 py-2 text-center"> Loyalty </h1>
          </div>
          <p className="text-gray-700 text-lg  font-semibold">
            {" "}
            Loyalty is indispensable to us. We need loyality to offer you
            maximum success and to reach your full potential. Loyality is the
            most important thing for us. If we have any doubt that you are not
            loyal we wont work together.
          </p>
        </div>
        <div class="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl drop-shadow-2xl shadow-cyan-500/50  m-2">
          <div class="ml-3">
            <h2 class="text-2xl font-bold my-3 py-2 text-center">
              {" "}
              Individuality{" "}
            </h2>
          </div>
          <p className="text-gray-700 text-lg font-semibold">
            {" "}
            No matter where you come from or how successful you already are, we
            can always help you become more successful & find your perfect
            niche.
          </p>
        </div>
        <div class="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl drop-shadow-2xl shadow-blue-500/50  m-2">
          <div class="ml-3">
            <h2 class="text-2xl font-bold my-3 py-2 text-center">
              {" "}
              Discretion{" "}
            </h2>
          </div>
          <p className="text-gray-700 text-lg font-semibold">
            {" "}
            To reach your full potential and achieve maximum success, we will
            make you a promise. We’d sabotage ourself if we would took advantage
            of content and work. Therefore, all photos, videos, data and
            everything remains between us. You can count on our promise
          </p>
        </div>
        <div class="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl drop-shadow-2xl shadow-indigo-500/50  m-2">
          <div class="ml-3">
            <h2 class="text-2xl font-bold my-3 py-2 text-center">
              {" "}
              Professionality{" "}
            </h2>
          </div>

          <p className="text-gray-700 text-lg font-semibold">
            {" "}
            Because of many years of experience, we know exactly what matters
            and how to dominate this business. So that you too can master this
            business perfectly, we will show you exactly what to do and take go
            with you hand in hand professionally.
          </p>
        </div>
      </div>
      <div className="py-10">
        <div class="flex bg-white" style={{ height: "600px" }}>
          <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
                Build Your New <span class="text-green-400">Idea</span>
              </h2>

              <Accordion />
            </div>
          </div>
          <div
            class="hidden lg:block lg:w-1/2"
            style={{ clipPath: `polygon(10% 0, 100% 0%, 100% 100%, 0 100%)` }}
          >
            <div
              class="h-full object-cover"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80")`,
                backgroundSize: "cover",
              }}
            >
              <div class=" bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
      <CardComponent />
      <CardCarousel />
    </div>
  );
};

export default MidContainer;
