import React from "react";

const TeamStats = () => {
  return (
    <div>
      <div class="flex items-center  my-20 ">
        <div class="container px-5 mx-auto ">
          <h1 class="text-5xl py-10 text-center text-gray-800 font-black leading-7 md:leading-10">
            Some Numbers of
            <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              {" "}
              Bunny Agency&nbsp;
            </span>
          </h1>

          <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            <div class="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
              <div class="text-base text-gray-400 dark:text-gray-300">
                Employees
              </div>
              <div class="flex items-center pt-1">
                <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  42+
                </div>
                <span class="flex items-center px-2 py-0.5 mx-2 text-sm rounded-full text-green-600 bg-green-100 dark:bg-green-900 dark:text-emerald-400">
                  <svg
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>1.8%</span>
                </span>
              </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
              <div class="text-base text-gray-400 dark:text-gray-300">
                Models
              </div>
              <div class="flex items-center pt-1">
                <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  16+
                </div>
                <span class="flex items-center px-2 py-0.5 mx-2 text-sm rounded-full text-green-600 bg-green-100 dark:bg-green-900 dark:text-emerald-400">
                  <svg
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>2.2%</span>
                </span>
              </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
              <div class="text-base text-gray-400 dark:text-gray-300">
                Average Earning per Month
              </div>
              <div class="flex items-center pt-1">
                <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  $20.000
                </div>
                <span class="flex items-center px-2 py-0.5 mx-2 text-sm rounded-full text-green-600 bg-green-100 dark:bg-green-900 dark:text-emerald-400">
                  <svg
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>5.2%</span>
                </span>
              </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
              <div class="text-base text-gray-400 dark:text-gray-300">
                Experience
              </div>
              <div class="flex items-center pt-1">
                <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  ≈2 years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
