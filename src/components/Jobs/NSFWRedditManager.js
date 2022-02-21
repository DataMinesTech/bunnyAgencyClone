import React from "react";

const NSFWRedditManager = () => {
  return (
    <div>
      <div>
        <div class=" grid grid-cols-3">
          <div class="lg:col-span-2 col-span-3 bg-white space-y-8 px-12">
            <div className="my-8">
              <h1 className="text-lg font-semibold underline ">
                Position Title
              </h1>
              <h3 className="text-3xl font-semibold">NSFW Reddit Manager </h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold underline ">Description</h3>
              <p className="text-xl py-2">
                I am looking for an NSFW Reddit Assistant with experience. We
                will provide you with all the information, scripts and the best
                learnings.
                <br />
                We teach and show you how to do it properly. We also give you
                the content and everything else.
                <br />
                If that sounds interesting to you, let us know!
                <br />
                We're looking forward to work with you!
              </p>
              <br />
            </div>
            <div className="mx-2">
              <h3 className="text-lg font-semibold underline ">
                Responsibilities
              </h3>
              <li className="text-xl py-2 list-disc">
                research for good captions
              </li>
              <li className="text-xl py-2">
                follow all rules of the subreddits
              </li>
              <li className="text-xl py-2">
                posting into 55-80 subreddits 2-3 times a day
              </li>
            </div>
            <div>
              <h3 className="text-lg font-semibold underline ">
                Qualifications
              </h3>
              <li className="text-xl py-2 ">18+ years old</li>
              <li className="text-xl py-2 ">laptop / pc is required</li>
              <li className="text-xl py-2 ">
                past experience in doing reddit would be great
              </li>
            </div>

            <div>
              <h2 className="text-lg font-semibold underline ">Job Benefits</h2>
              <li className="text-xl py-2 ">
                Please only apply for this job when you're okay with working up
                to 4 hours a day and if you have experience. Salary will depend
                on how much experience you have and you will get a provision. Up
                to 1.000$/moth including provision is possible if you're good.
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
                <p className="py-2 text-xl ml-8">Full Time / Part-time</p>
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
                Working Hours
              </h3>
              <p className="py-2 text-xl ml-8">4-8 hours a day</p>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Base Salary
              </h3>
              <p className="py-2 text-xl ml-8">$1-$5 Per hour </p>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-semibold underline underline-offset-0 ml-8">
                Date Posted
              </h3>
              <p className="py-2 text-xl ml-8">January 26, 2022</p>
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

export default NSFWRedditManager;
