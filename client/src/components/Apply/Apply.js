import React, { useState } from "react";
import Feedback from "../Layout/Feedback";
import axios from "axios";
import CTA from "../Layout/CTA/CTA";
import MetaData from "../Layout/MetaData/MetaData";

const Apply = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    twitter: "",
    instagram: "",
    phone: "",
    country: "",
    time: "",
    comfortableWith: "",
    okWithTiktoks: "",
  });

  let name, value;

  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      twitter,
      instagram,
      phone,
      country,
      time,
      comfortableWith,
      okWithTiktoks,
    } = user;

    if (name && email && country && phone) {
      const res = await fetch("/api/v1/contact/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          twitter,
          instagram,
          phone,
          country,
          time,
          comfortableWith,
          okWithTiktoks,
        }),
      });

      if (res) {
        setUser({
          name: "",
          email: "",
          twitter: "",
          instagram: "",
          phone: "",
          country: "",
          time: "",
          comfortableWith: "",
          okWithTiktoks: "",
        });

        alert("Data sent successfully");
      }
    } else {
      alert("Please fill required details ");
    }
  };

  return (
    <>
      <MetaData title="Bunny Agency | Apply Now" />
      <div>
        <div class="min-h-screen p-6 bg-slate-100 flex items-center justify-center">
          <div class="container max-w-screen-lg mx-auto">
            <div>
              <h1 class="text-5xl py-10 text-center text-gray-800 font-black leading-7 md:leading-10">
                <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                  {" "}
                  Apply Now
                </span>
              </h1>

              <form
                class="bg-white md:mx-40 rounded shadow-lg p-4 px-4 md:p-8 mb-6"
                method="POST"
                onSubmit={submitHandler}
              >
                <div class="grid gap-4 gap-y-2 text-sm">
                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm ">
                      <div class="md:col-span-5">
                        <label for="full_name">
                          Full Name{" "}
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="full_name"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={user.name}
                          onChange={getUserData}
                          required
                        />
                      </div>

                      <div class="md:col-span-5">
                        <label for="email">
                          Email Address{" "}
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={user.email}
                          onChange={getUserData}
                          placeholder="email@domain.com"
                          required
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="twitter">Twitter</label>
                        <input
                          type="text"
                          name="twitter"
                          id="twitter"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={user.twitter}
                          onChange={getUserData}
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="instagram">Instagram</label>
                        <input
                          type="text"
                          name="instagram"
                          id="instagram"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={user.instagram}
                          onChange={getUserData}
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="phone">
                          Phone No{" "}
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={user.phone}
                          onChange={getUserData}
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="country">
                          Country / region{" "}
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="country"
                            id="country"
                            placeholder="Country"
                            class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={user.country}
                            onChange={getUserData}
                          />
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="timenvest">
                          Time you can invest per day
                        </label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            type="number"
                            name="time"
                            id="timenvest"
                            value={user.time}
                            onChange={getUserData}
                            placeholder="hours"
                            class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          />
                        </div>
                      </div>

                      <div class="md:col-span-5 p-2">
                        <div class="inline-flex items-center">
                          <label for="billing_same" class="ml-2">
                            What are you comfortable to show
                          </label>
                          <select
                            name="comfortableWith"
                            onChange={getUserData}
                            value={user.comfortableWith}
                            className="pl-2 border-2 ml-2"
                          >
                            <option value="">Select</option>
                            <option value="everything">Everything</option>
                            <option value="softnude">SoftNude</option>
                            <option value="bikini/lingerie">
                              Bikini /Lingerie
                            </option>
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-5 p-2">
                        <div class="inline-flex items-center">
                          <label for="billing_same" class="ml-2">
                            Are you Ready to Make 10-30 tiktoks a day?
                          </label>
                          <select
                            name="okWithTiktoks"
                            value={user.okWithTiktoks}
                            onChange={getUserData}
                            className="pl-2 border-2 ml-2"
                          >
                            <option value="">Select</option>
                            <option value="yes"> Yes</option>
                            <option value="no"> No</option>
                          </select>
                        </div>
                      </div>

                      <div class="md:col-span-5 text-right">
                        <div class="inline-flex items-end">
                          <button
                            type="submit"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <CTA /> */}
        {/* <Feedback /> */}
      </div>
    </>
  );
};

export default Apply;
