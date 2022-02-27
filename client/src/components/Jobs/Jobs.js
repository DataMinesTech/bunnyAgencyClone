import React from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-purple-500 py-2 px-5">
      <h1 className="text-2xl text-white font-bold my-2">
        Jobs At Bunny Agency
      </h1>
      <h2 className="text-2xl font-semibold my-4">
        The following job positions are currently available at The Bunny Agency:
      </h2>
      <h3 className="text-xl font-normal my-4">
        Please read every jobs description carefully and apply with the required
        information.
      </h3>
      <div className="space-y-5 md:space-y-10">
        {/* First Card */}

        <div class="flex items-center justify-center">
          <div class="bg-white rounded-3xl border hover:shadow-2xl shadow-xl p-8 w-full md:w-3/6">
            <div class="flex justify-between items-center mb-4">
              <h2 className="font-bold text-2xl w-4/5">Account Manager</h2>
              <div>
                <Link to="/job/accountmanager">
                  <button class="font-bold p-2 pl-5 pr-5 bg-green-500 hover:bg-green-600 rounded-lg focus:border-4 border-green-300">
                    View
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-xl text-gray-400">Full Time</h3>
            </div>
          </div>
        </div>

        {/* Second Card */}

        <div class="flex items-center justify-center">
          <div class="bg-white rounded-3xl border hover:shadow-2xl shadow-xl p-8 w-full md:w-3/6">
            <div class="flex justify-between items-center mb-4">
              <h2 className="font-bold text-2xl">Tinder Assistant</h2>
              <div>
                <Link to="/job/tinder-assistant">
                  <button class="font-bold p-2 pl-5 pr-5 bg-green-500 hover:bg-green-600 rounded-lg focus:border-4 border-green-300">
                    View
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-xl text-gray-400">Full Time</h3>
            </div>
          </div>
        </div>

        {/* Third Card */}

        <div class="flex items-center justify-center">
          <div class="bg-white rounded-3xl border hover:shadow-2xl shadow-xl p-8 w-full md:w-3/6">
            <div class="flex justify-between items-center mb-4">
              <h2 className="font-bold text-2xl"> Reddit Marketer</h2>
              <div>
                <Link to="/job/reddit-marketer">
                  <button class="font-bold p-2 pl-5 pr-5 bg-green-500 hover:bg-green-600 rounded-lg focus:border-4 border-green-300">
                    View
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-xl text-gray-400">Full Time</h3>
            </div>
          </div>
        </div>

        {/* Fourth Card */}

        <div class="flex items-center justify-center">
          <div class="bg-white rounded-3xl border hover:shadow-2xl shadow-xl p-8 w-full md:w-3/6">
            <div class="flex justify-between items-center mb-4">
              <h2 className="font-bold text-2xl">NSFW Reddit Manager</h2>
              <div>
                <Link to="/job/reddit-manager">
                  <button class="font-bold p-2 pl-5 pr-5 bg-green-500 hover:bg-green-600 rounded-lg focus:border-4 border-green-300">
                    View
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-xl text-gray-400">Full Time</h3>
            </div>
          </div>
        </div>

        {/* Fifth Card  */}

        <div class="flex items-center justify-center">
          <div class="bg-white rounded-3xl border hover:shadow-2xl shadow-xl p-8 w-full md:w-3/6">
            <div class="flex justify-between items-center mb-4">
              <h2 className="font-bold text-2xl">NSFW Chatter for OnlyFans</h2>
              <div>
                <Link to="/job/chatter-only-fans">
                  <button class="font-bold p-2 pl-5 pr-5 bg-green-500 hover:bg-green-600 rounded-lg focus:border-4 border-green-300">
                    View
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-xl text-gray-400">Full Time</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div>
          <h3 className=" text-3xl font-bold text-white">
            We dont offer the job at The Bunny Agency which you are currently
            looking for?
          </h3>

          <h3 className=" text-2xl font-bold text-black my-2">
            No Problem, we take job applications initiative application.
          </h3>

          <p className="text-xl font-normal my-2">
            Please send the applications to this email: team@bunny-agency.com
          </p>
          <p className="text-lg font-normal my-2">
            One of our staffmembers will check it and if we like your
            application and the job position makes sense, we invite you for a
            job interview.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
