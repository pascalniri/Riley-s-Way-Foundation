import React from "react";

const Achieve = () => {
  return (
    <div className="gap-10 font-body flex flex-col justify-center mx-auto px-4 md:max-w-screen-lg mt-[10%]">
      <h1 className="leading-normal font-thin text-4xl md:text-5xl lg:text-[4rem] mb-[20px] text-indigo-600">
        <span className="font-medium">Our</span> Achievements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#70c7fa28] border-2 rounded-[20px] px-[20px] py-[50px] flex flex-col text-center justify-center items-center">
          <h1 className="font-semibold text-[30px] mb-10 text-indigo-600">
            100,000 +
          </h1>
          <p>
            We impact the lives of hundreds of thousands of young people around
            the world through our programs and the young leaders we support.
          </p>
        </div>
        <div className="bg-[#70c7fa28] border-2 rounded-[20px] px-[20px] py-[50px] flex flex-col text-center justify-center items-center">
          <h1 className="font-semibold text-[30px] mb-10 text-indigo-600">
            300+ Kindness Fellows
          </h1>
          <p>
            We impact the lives of hundreds of thousands of young people around
            the world through our programs and the young leaders we support.
          </p>
        </div>
        <div className="bg-[#70c7fa28] border-2 rounded-[20px] px-[20px] py-[50px] flex flex-col text-center justify-center items-center">
          <h1 className="font-semibold text-[30px] mb-10 text-indigo-600">
            $4 Million+
          </h1>
          <p>
            We impact the lives of hundreds of thousands of young people around
            the world through our programs and the young leaders we support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
