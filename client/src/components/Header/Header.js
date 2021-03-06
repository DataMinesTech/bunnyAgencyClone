import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <nav class="bg-white shadow-lg">
      <div class=" mx-auto px-4">
        <div class="flex ">
          <div className="flex-none">
            {/* <!-- Website Logo --> */}
            <NavLink
              to="/"
              onClick={() => {
                setActive(false);
              }}
              class="flex items-center py-4 px-2"
            >
              <span class="font-semibold text-black text-lg">
                THE BUNNY AGENCY
              </span>
            </NavLink>
          </div>
          <div class="flex-auto w-32 justify-end space-x-7">
            {/* <!-- Primary Navbar items --> */}
            <div class="hidden md:flex  justify-end flex-end items-center space-x-1">
              <NavLink
                to="/models"
                activeClassName="py-4 px-2 text-purple-500 border-b-4 border-purple-500 font-semibold "
                className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-400"
              >
                Our Models
              </NavLink>
              <NavLink
                to="/about-us"
                activeClassName="py-4 px-2 text-purple-500 border-b-4 border-purple-500 font-semibold "
                className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
              >
                About us
              </NavLink>
              <NavLink
                to="/apply-now"
                activeClassName="py-4 px-2 text-purple-500 border-b-4 border-purple-500 font-semibold "
                className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
              >
                Apply Now
              </NavLink>
            </div>
          </div>

          <div class="md:hidden flex items-center">
            <button
              class="outline-none mobile-menu-button "
              onClick={() => {
                setActive(!active);
              }}
            >
              <svg
                class=" w-6 h-6 text-gray-500 hover:text-purple-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={active ? "mobile-menu" : "hidden mobile-menu"}>
        <ul class="">
          <li>
            <Link
              onClick={() => setActive(false)}
              to="/models"
              class="block text-sm px-2 py-4 hover:bg-purple-500 transition duration-300"
            >
              Our Models
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setActive(false)}
              to="/about-us"
              class="block text-sm px-2 py-4 hover:bg-purple-500 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/apply-now"
              onClick={() => setActive(false)}
              class="block text-sm px-2 py-4 hover:bg-purple-500 transition duration-300"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>

      {/* <script>
      const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    </script> */}
    </nav>
  );
};

export default Header;
