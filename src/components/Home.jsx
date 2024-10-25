import React from "react";

const Home = () => {

  return (
    <div>
      <img src="/bg.jpg" alt="" className="object-cover w-full h-[100vh] relative" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="flex flex-col justify-center mx-auto px-4 md:max-w-screen-lg font-body">
        <div className="absolute bottom-[100px] md:bottom-[150px] md:w-[60%] flex flex-col justify-center mt-[15%] text-left place-items-start">
          <h1 className="leading-normal font-thin text-4xl md:text-5xl lg:text-[5rem] mb-[20px] text-[#70C8FA]">
            <span className="font-medium">Riley's</span> Way <br /> Foundation
          </h1>
          <p className="font-body text-slate-300">
            Through our programs, leadership training, and supportive community,
            we inspire the next generation to lead with compassion and create
            lasting impact in their communities and beyond.
          </p>
          <a
            href="#_"
            class="relative inline-flex items-center px-12 py-2 mt-[50px] overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
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
            <span class="relative">Our Impact Report</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
