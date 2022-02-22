import React, { useState } from "react";
import AccordionData from "./AccordianData";

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggle = (id) => {
    if (activeAccordion === id) {
      return setActiveAccordion(null);
    }

    setActiveAccordion(id);
  };

  return (
    <div className="w-full">
      <section class="shadow w-full">
        {AccordionData.map((data) => {
          console.log("data", data);

          return (
            <div className="">
              <article class="border-b w-full" key={data.id}>
                <div
                  className={
                    activeAccordion === data.id
                      ? "border-l-2 bg-grey-400 border-indigo-800 w-full p-2 mx-auto pl-8 pr-8"
                      : "border-l-2 border-transparent w-full p-2 mx-auto pl-8 pr-8"
                  }
                >
                  <header class="flex justify-between items-center p-2 mx-auto pl-8 pr-8  cursor-pointer select-none">
                    <span
                      className={
                        activeAccordion === data.id
                          ? "text-indigo-800 font-semibold text-xl"
                          : "text-grey-darkest font-thin text-xl"
                      }
                    >
                      {data.title}
                    </span>
                    <div
                      className={
                        activeAccordion === data.id
                          ? "rounded-full border-2 border-purple-800 w-7 h-7 flex items-center justify-center bg-purple-800"
                          : "rounded-full border border-grey w-7 h-7 flex items-center justify-center"
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
                              d="M5 15l7-7 7 7"
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
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </header>
                  {activeAccordion === data.id ? (
                    <div>
                      <div class="pl-8 pr-8 pb-5 text-grey-darkest min-w-full">
                        {data.desc.map((descripton) => {
                          return (
                            <ul class="pl-4">
                              <li class="pb-2">{descripton}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
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
  );
};

export default Accordion;
