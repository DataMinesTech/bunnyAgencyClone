import React, { useState } from "react";
import Feedback from "../Layout/Feedback";

const Contact = () => {
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
      const res = await fetch("firebaseDetails", {
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
    <div>
      <div class="min-h-screen p-6 bg-gradient-to-r from-green-400 to-purple-500 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <h2 class="font-semibold text-2xl text-black mb-6">
              Connect with us
            </h2>

            <form
              class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
              method="POST"
              onSubmit={submitHandler}
            >
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-black">
                  <p class="font-medium text-lg">Fill Up these Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
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
                      <label for="timenvest">Time you can invest per day</label>
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
      <Feedback />
    </div>
  );
};

export default Contact;
