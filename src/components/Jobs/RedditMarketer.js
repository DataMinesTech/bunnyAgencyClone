import React from "react";

const RedditMarketer = () => {
  return (
    <div>
      <div>
        <div class=" grid grid-cols-3">
          <div class="lg:col-span-2 col-span-3 bg-white space-y-8 px-12">
            <div className="my-8">
              <h1 className="text-lg font-semibold underline ">
                Position Title
              </h1>
              <h3 className="text-3xl font-semibold">Reddit Marketer </h3>
            </div>

            <div className="mx-2">
              <h3 className="text-lg font-semibold underline ">
                Responsibilities
              </h3>
              <li className="text-xl py-2 list-disc">
                Post 4-8 times a day in 30-60 subreddits
              </li>
              <li className="text-xl py-2">
                Copy & Paste the Contentplan we give you
              </li>
              <li className="text-xl py-2">
                4-8 hours a day if you have 2 models
              </li>
            </div>
            <div>
              <h3 className="text-lg font-semibold underline ">
                Qualifications
              </h3>

              <li className="text-xl py-2 ">must be over 18</li>
              <li className="text-xl py-2 ">
                comfortable with sfw and nsfw videos / pictures
              </li>
              <li className="text-xl py-2 ">no reddit experience needed</li>
              <li className="text-xl py-2 ">5-10$ per day</li>
            </div>

            <div>
              <h2 className="text-lg font-semibold underline ">Job Benefits</h2>
              <li className="text-xl py-2 ">you will get full training</li>
              <li className="text-xl py-2 ">work in a innovative agency</li>
              <li className="text-xl py-2 ">
                Possibilities to manage more models and get higher job positions
              </li>
            </div>
          </div>
          <div class="col-span-1 bg-slate-100 lg:block hidden">
            <div className="flex justify-center">
              <h3 className="text-lg font-semibold underline justify-center">
                Hiring organization
              </h3>
            </div>
            <div>
              <div
                style={{ height: "350px" }}
                class="flex justify-center items-center mx-14 my-2 rounded overflow-hidden shadow-lg hover:bg-white bg-white"
              >
                <div class="space-y-10">
                  <div class="px-6 py-4">
                    <div class="px-10 max-w-2xl">
                      <img
                        class=""
                        src="https://bunny-agency.com/wp-content/uploads/2021/12/Only-Fans-Managemnt.png"
                        alt="bunny-agency logo"
                      />
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold underline underline-offset-0 ml-8">
                  Employment Type
                </h3>
                <p className="py-2 text-xl ml-8">Full Time</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Beginning of Employment
              </h3>
              <p className="py-2 text-xl ml-8">Immediately</p>
            </div>

            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Industry
              </h3>
              <p className="py-2 text-xl ml-8">Marketing & Social Media</p>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Job Location
              </h3>
              <p className="py-2 text-xl ml-8">Remote work possible</p>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Working Hours
              </h3>
              <p className="py-2 text-xl ml-8">4-8 hours a day</p>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Base Salary
              </h3>
              <p className="py-2 text-xl ml-8">$5-$10 Per day </p>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Date Posted
              </h3>
              <p className="py-2 text-xl ml-8">January 31, 2022</p>
            </div>
            <div className=" flex justify-center mx-4 my-8">
              <button className="bg-purple-700 px-5 py-3  shadow-sm font-medium tracking-wider text-xl  text-purple-100 rounded-full hover:shadow-2xl hover:bg-purple-800 ">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedditMarketer;
