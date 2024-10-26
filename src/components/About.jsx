import React from "react";
import { CgQuote } from "react-icons/cg";
const About = () => {
  return (
    <div className="gap-10 font-body flex flex-col lg:flex-row justify-center mx-auto px-4 md:max-w-screen-lg mt-[10%]">
      <div className="w-full">
        <h1 className="leading-normal font-thin text-4xl md:text-5xl lg:text-[4rem] mb-[20px] text-[#9798E0]">
          Our <span className="font-medium"> Mission</span> <br />& Vision
        </h1>
        <p className="mt-[50px] text-[#7F7F7F] font-heading font-light">
          Riley's Way invests in and supports the next generation of kind
          leaders. We provide young people with the programs, leadership
          training, coaching and community they need to build a better world
          that values kindness, empathy and connection.
        </p>

        <div className="flex flex-col md:flex-row mt-[20%]">
        <div className="relative mr-4">
          <img src="https://www.rileysway.org/wp-content/uploads/2023/05/H3A1372-1024x683.jpg"
          alt=""
          className="w-[80px] h-[80px] rounded-full border-[3px] border-[#70C8FA]" />
          <CgQuote className="text-[30px] bg-[#70C8FA] rounded-full absolute bottom-0 -left-0"/>
        </div>
        <div className="mt-5">
          <p>Our Vision</p>
          <p className="text-[#7F7F7F] font-heading font-light text-[13px]">We envision a future where kind leaders build a better world.</p>
        </div>
        </div>
        {/* MORE OF MISSION AND VISSION BUTTON */}
        <a
            href="#_"
            class="relative inline-flex items-center px-10 py-2 mt-[50px] overflow-hidden text-lg font-medium text-[#9798E0] border-2 border-[#9798E0] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-[#9798E0] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-3 h-3"
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
            <span class="relative font-light text-[13px]">Read more</span>
          </a>
      </div>

      {/* IMAGE DIV */}
      <div className="w-full">
        <img
          src="https://media.istockphoto.com/id/1479798765/photo/vertical-group-of-happy-friends-posing-for-a-selfie-on-a-spring-day-as-they-party-together.jpg?s=612x612&w=0&k=20&c=3ch9k6zg71DfVtWzf1Q-TgJXPeQyoflY7fCpiPLmoZs="
          alt=""
          className="w-full rounded-[20px] shadow"
        />
        
      </div>
    </div>
  );
};

export default About;
