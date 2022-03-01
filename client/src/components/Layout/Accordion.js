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
      <section className="shadow w-full">
        {AccordionData.map((data) => {
          return (
            <div className="">
              <article className="border-b w-full" key={data.id}>
                <div
                  className={
                    activeAccordion === data.id
                      ? "border-l-2 bg-grey-400 border-indigo-800 w-full p-2 mx-auto px-5"
                      : "border-l-2 border-transparent w-full p-2 mx-auto px-5"
                  }
                >
                  <header className="flex justify-between items-center p-2 mx-auto px-5 cursor-pointer select-none">
                    <span
                      className={
                        activeAccordion === data.id
                          ? "text-indigo-800 text-left font-semibold md:text-xl"
                          : "text-grey-darkest text-left md:text-xl"
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
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#FFFFFF"
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
                            className="h-6 w-6"
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
                      <div className="text-left text-grey-darkest min-w-full px-5 py-5">
                        <ul className="space-y-4">
                          {data.desc.map((descripton) => {
                            return <li clas>{descripton}</li>;
                          })}
                        </ul>
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
