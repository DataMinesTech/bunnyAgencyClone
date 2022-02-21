import React from "react";

const TinderAssistant = () => {
  return (
    <div>
      <div>
        <div class=" grid grid-cols-3">
          <div class="lg:col-span-2 col-span-3 bg-white space-y-8 px-12">
            <div className="my-8">
              <h1 className="text-lg font-semibold underline ">
                Position Title
              </h1>
              <h3 className="text-3xl font-semibold">Tinder Assistant</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold underline ">Description</h3>
              <p className="text-xl py-2">
                We're searching for a reliable worker who manage Tinder for our
                models. We teach and show you how to do it properly.
                <br />
                We also give you the content and everything else. If that sounds
                interesting to you, let us know!
                <br />
                We're looking forward to work with you!
              </p>
              <br />
            </div>
            <div className="mx-2">
              <h3 className="text-lg font-semibold underline ">
                Responsibilities
              </h3>
              <li className="text-xl py-2 list-disc">reply fast</li>
              <li className="text-xl py-2">1-2 hour per day, per model</li>
            </div>

            <div>
              <h3 className="text-lg font-semibold underline ">
                Skills And Qualifications
              </h3>
              <li className="text-xl py-2 ">over 18 years old</li>
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
                <p className="py-2 text-xl ml-8">Part-Time</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Beginning of Employment
              </h3>
              <p className="py-2 text-xl ml-8">Immediately After Training</p>
            </div>

            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Job Location
              </h3>
              <p className="py-2 text-xl ml-8">Remote work possible</p>
            </div>

            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Base Salary
              </h3>
              <p className="py-2 text-xl ml-8">$2-$5 </p>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Date Posted
              </h3>
              <p className="py-2 text-xl ml-8">January 26,22</p>
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

export default TinderAssistant;
