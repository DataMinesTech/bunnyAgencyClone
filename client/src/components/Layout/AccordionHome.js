import React, { useState } from "react";
import { AccordionHomeData } from "./AccordionHomeData";

const AccordionHome = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggle = (id) => {
    if (activeAccordion === id) {
      return setActiveAccordion(null);
    }

    setActiveAccordion(id);
  };

  return (
    <div>
      <div className="w-full">
        <section class="shadow min-w-full">
          {AccordionHomeData.map((data) => {
            console.log("data", data);

            return (
              <div className="">
                <article class="border-b min-w-full" key={data.id}>
                  <div
                    className={
                      activeAccordion === data.id
                        ? "border-l-2 bg-grey-400 border-indigo-700"
                        : "border-l-2 border-transparent min-w-max"
                    }
                  >
                    <header class="flex justify-between items-center p-5 pl-8 pr-8  cursor-pointer select-none">
                      <span
                        className={
                          activeAccordion === data.id
                            ? "text-indigo-800 font-semibold text-xl"
                            : "text-grey-darkest font-thin text-xl"
                        }
                      >
                        {data.question}
                      </span>
                      <div
                        className={
                          activeAccordion === data.id
                            ? "rounded-full border-2 border-purple-600 w-7 h-7 flex items-center justify-center bg-purple-700"
                            : "rounded-full border border-black w-7 h-7 flex items-center justify-center"
                        }
                      >
                        {activeAccordion === data.id ? (
                          <button
                            onClick={() => {
                              toggle(data.id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              toggle(data.id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </header>
                    {activeAccordion === data.id ? (
                      <p class="bg-gray-100 break-normal mx-16 text-center bg-opacity-50 p-3 pt-1 rounded-b-lg">
                        {data.answer}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default AccordionHome;
