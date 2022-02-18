import React from "react";

const Jobs = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-purple-500 py-2">
      <h1 className="text-2xl ml-4 text-white font-bold my-2">
        Jobs At Bunny Agency
      </h1>
      <h2 className="text-2xl ml-4 font-semibold my-4">
        The following job positions are currently available at The Bunny Agency:
      </h2>
      <h3 className="text-2xl ml-4 font-normal my-4">
        Please read every jobs description carefully and apply with the required
        information.
      </h3>
      <div class="flex items-center justify-center h-40 mt-16 my-4">
        <div class="bg-white rounded-3xl border hover:shadow-2xl shadow-xl p-8 w-3/6 mx-4">
          <div class="flex justify-between items-center mb-4">
            <h2 className="font-bold text-2xl">Account Manager</h2>
            <div>
              <button class="font-bold p-2 pl-5 pr-5 bg-green-500 hover:bg-green-600 rounded-lg focus:border-4 border-green-300">
                View
              </button>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-xl text-gray-400">Full Time</h3>
          </div>
        </div>
      </div>

      {/* Second Card */}

      <div class="flex items-center justify-center h-40 my-4">
        <div class="bg-white rounded-3xl border hover:shadow-2xl shadow-xl p-8 w-3/6">
          <div class="flex justify-between items-center mb-4">
            <h2 className="font-bold text-2xl">Account Manager</h2>
            <div>
              <button class="font-bold p-2 pl-5 pr-5 bg-green-500 hover:bg-green-600 rounded-lg focus:border-4 border-green-300">
                View
              </button>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-xl text-gray-400">Full Time</h3>
          </div>
        </div>
      </div>

      {/* Third Card */}

      <div class="flex items-center justify-center h-40 my-4    ">
        <div class="bg-white rounded-3xl border hover:shadow-2xl shadow-xl p-8 w-3/6">
          <div class="flex justify-between items-center mb-4">
            <h2 className="font-bold text-2xl">Account Manager</h2>
            <div>
              <button class="font-bold p-2 pl-5 pr-5 bg-green-500 hover:bg-green-600 rounded-lg focus:border-4 border-green-300">
                View
              </button>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-xl text-gray-400">Full Time</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
