import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-15 backdrop-blur fixed z-50 flex justify-center w-full">
      <header className=" mx-auto px-4 md:max-w-screen-lg text-slate-700 container relative flex flex-col overflow-hidden  py-4 lg:flex-row lg:items-center">
        <a
          href="#"
          className="flex items-center whitespace-nowrap text-2xl font-black"
        >
          <img src="/logo.svg" alt="" className="w-[100px] lg:w-[150px]" />
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-5 cursor-pointer lg:hidden"
          for="navbar-open"
        >
          <svg
            className="h-7 w-7 text-indigo-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
        >
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li className="lg:mr-12">
              <a
                className="rounded text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#"
              >
                HOME
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#"
              >
                ABOUT
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#"
              >
                PROGRAMS
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#"
              >
                MEDIA
              </a>
            </li>
          </ul>
          <hr className="mt-4 w-full lg:hidden" />

          <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <a
            href="#_"
            className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Donate</span>
          </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
