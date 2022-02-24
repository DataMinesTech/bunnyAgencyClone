import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="px-4 pt-12 mx-auto bg-gray-800 sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
      <div className="flex justify-between pb-10">
        <div className="sm:col-span-2">
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center text-white"
          >
            <img
              src="https://bunny-agency.com/wp-content/uploads/2021/12/Only-Fans-Managemnt-2.png"
              className="w-8 h-8"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              Bunny Agency
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm flex">
            <Link to="/models">
              <li className="list-none text-white font-semibold mx-4">
                Models
              </li>
            </Link>
            <Link to="/about-us">
              <li className="list-none text-white font-semibold mx-4">About</li>
            </Link>
            <Link to="/apply-now">
              <li className="list-none text-white font-semibold mx-4">
                Contact
              </li>
            </Link>
            <Link to="/jobs">
              <li className="list-none text-white font-semibold mx-4">
                Careers
              </li>
            </Link>
          </div>
        </div>
        <div className=" text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-white">Phone:</p>
            <a
              href="tel:+49 15906186279"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-white"
            >
              +49 15906186279
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a
              href="mailto:info@bunny-agency.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-white"
            >
              info@bunny-agency.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-white"
            >
              Sedanstraße 14 89077
              <br />
              Ulm Germany
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://twitter.com/AgencyBunny"
              className=" transition-colors hover:text-green-400 text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/the_bunny_agency/"
              className=" transition-colors duration-300 hover:text-green-400 text-white"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=4915906186279"
              className="transition-colors duration-300 hover:text-green-400 text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <a
              href="https://onlyfans.com/bunnyagency"
              className="transition-colors duration-300 hover:text-green-400 text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M14 9v2h-4v-2c0-1.104.897-2 2-2s2 .896 2 2zm10 3c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-8-1h-1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h-1v6h8v-6z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-white">
            Join us Today on our Social Media Platforms.
          </p>
        </div>
      </div>
      <div className=" justify-evenly pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-center text-white">
          © Copyright 2022 Bunny-Agency. All rights reserved.
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </a>
          </li>
          <li>
            <a className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};
