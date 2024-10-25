import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Cards() {
  return (
    <div className=" font-body flex flex-col justify-center mx-auto px-4 md:max-w-screen-lg mt-[10%]">
     <Carousel
  opts={{
    align: "start",
  }}
  className=""
>
  <CarouselContent className="">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="">
        <div className="p-1">
          <Card className="mx-10">
            <CardContent className="relative flex items-center justify-center p-6">
              <div className="absolute inset-0">
                <img
                  src="https://img.freepik.com/premium-photo/group-students-with-glasses-smiling-one-them-has-smile-his-face_662214-114421.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <p className="relative text-3xl font-semibold text-white">hello</p>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  );
}

export default Cards;
