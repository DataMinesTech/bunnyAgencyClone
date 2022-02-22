import React, { useRef, useState } from "react";
import "./BeforeAfter.css";

const BeforeAfter = () => {
  const [imageReveal, setImageReveal] = useState(0.5);

  const imageContainer = useRef();

  const slide = (xPos) => {
    const containerBoundRect = imageContainer.current.getBoundingClientRect();
    setImageReveal(() => {
      if (xPos < containerBoundRect.left) {
        return 0;
      } else if (xPos > containerBoundRect.right) {
        return 1;
      }

      return (xPos - containerBoundRect.left) / containerBoundRect.width;
    });
  };

  const handleTouchMove = (e) => {
    slide(e.touches.item(0).clientX);
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (e) => {
    slide(e.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };

  return (
    <div class="grid min-h-screen  place-items-center">
      <div
        ref={imageContainer}
        class="mx-auto h-[712px] w-[350px] bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl select-none group"
      >
        <img
          class="absolute inset-0 h-full w-full object-cover pointer-events-none"
          src="https://bunny-agency.com/wp-content/uploads/2021/12/1.png"
        />
        <img
          style={{
            clipPath: `polygon(0 0,${imageReveal * 100}% 0,${
              imageReveal * 100
            }% 100%,0 100%)`,
          }}
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          src="https://bunny-agency.com/wp-content/uploads/2022/02/Screenshot-2022-02-04-at-13.14.33.png"
        />
        <div
          style={{ left: `${imageReveal * 100}%` }}
          className="absolute inset-0 group-hover:opacity-100 sm:opacity:0 "
        >
          <div className="relative h-full opacity-50 hover:opacity-100">
            <div className="absolute inset-y-0 bg-black w-0.5 -ml-px "></div>
            <div
              style={{ touchAction: "none" }}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center cursor-grabbing"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="absolute top-0 inset-x-0">
          <div class="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
