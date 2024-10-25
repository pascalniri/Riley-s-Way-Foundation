import React from "react";

const About = () => {
  return (
    <div className="gap-10 font-body flex flex-col md:flex-row justify-center mx-auto px-4 md:max-w-screen-lg mt-[10%]">
      <div className="w-full">
        <h1 className="leading-normal font-thin text-4xl md:text-5xl lg:text-[4rem] mb-[20px] text-indigo-600">
          Our <span className="font-medium"> Mission</span> <br />& Vision
        </h1>
        <p className="mt-[50px]">
          Riley's Way invests in and supports the next generation of kind
          leaders. We provide young people with the programs, leadership
          training, coaching and community they need to build a better world
          that values kindness, empathy and connection.
        </p>
      </div>
      <div className="w-full">
        <img
          src="https://media.istockphoto.com/id/1479798765/photo/vertical-group-of-happy-friends-posing-for-a-selfie-on-a-spring-day-as-they-party-together.jpg?s=612x612&w=0&k=20&c=3ch9k6zg71DfVtWzf1Q-TgJXPeQyoflY7fCpiPLmoZs="
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default About;
