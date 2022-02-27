import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div class="bg-white dark:bg-gray-800 mb-12 ">
        <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">Want to Join the Team ?</span>
            <span class="block text-indigo-500">It&#x27;s today or never.</span>
          </h2>
          <div class="mt-5 lg:mt-0 lg:flex-shrink-0">
            <div class=" inline-flex rounded-md shadow">
              <Link to="/apply-now">
                <button
                  type="button"
                  class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
