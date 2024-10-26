import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GiClick } from "react-icons/gi";

function Cards() {
  const cards = [
    {
      id: 1,
      image: "/c4k.svg",
      h1: "Call For Kindness",
      p: "The Call for Kindness Fellowship is a national program that provides funding and leadership development training to youth-led projects that are rooted in kindness and strengthening communities. Winners receive up to a $5,000 grant to grow their organization and join a peer community of fellow changemakers to strengthen their leadership skills.",
    },
    {
      id: 2,
      image: "/ylr.svg",
      h1: "Youth Leadership Retreat",
      p: "The Retreat brings together young leaders from around the country to participate in skill-building workshops where they learn how to develop meaningful relationships, communicate effectively and action planning.",
    },
    {
      id: 3,
      image: "/rc.svg",
      h1: "Riley's Way Councils and Chapters",
      p: "The Councils and Chapters bring together communities of students with different perspectives and supports them in becoming kind leaders. Councils and Chapters work directly with community organizations to find solutions to social impact issues through the lens of empathy and kindness.",
    },
  ];
  return (
    <div className="font-heading font-light bg-[#9798E0] mt-[10%] py-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto px-4 md:max-w-screen-lg ">
        {cards.map((card) => (
          <div key={card.id}
          style={{ backgroundImage: `url(${card.image})` }}
          className="border border-[#ffffff] flex flex-col justify-start items-start text-left px-[20px] py-[50px] hover:bg-[#70C8FA] group relative transition `bg-[url${card.image}]` bg-cover bg-center hover:bg-[url('/path/to/hover-image.jpg')] hover:bg-cover hover:bg-center">
            <div className="absolute inset-0 bg-[#70C8FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h1 className="mb-[20px] text-[20px] text-white font-heading font-normal z-10">
              {card.h1}
            </h1>
            <p className="mb-[20px] text-[14px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {card.p}
            </p>
            <span className="bg-gray-300 hover:bg-[#9798E0] hover:text-white p-2 cursor-pointer rounded-full transform transition-transform group-hover:scale-125 mt-[20px]">
              <GiClick className="text-[20px] " />
            </span>
            {/* Pseudo-element for progressing border */}
            <div className="absolute top-0 left-0 w-full h-[5px] bg-[#ffffff] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
