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
                          ? "rounded-full border-2 border-indigo-800 w-7 h-7 flex items-center justify-center bg-indigo-800"
                          : "rounded-full border border-grey w-7 h-7 flex items-center justify-center"
                      }
                    >
                      {activeAccordion === data.id ? (
                        <button
                          onClick={() => {
                            toggle(data.id);
                          }}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            toggle(data.id);
                          }}
                        >
                          +
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
