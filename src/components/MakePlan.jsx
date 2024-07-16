"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import Image from "next/image";
import slider from "../app/assets/slider-img.png";
export default function MakePlan() {
  return (
    <div>
    <div className="flex flex-col justify-center items-center h-auto mt-16">
    <div className="  text-left w-[47%]">
      <h1 className="font-bold font-sans text-5xl">
      Make planning your trip easier
      </h1>
      <p className="text-xs my-5">Choose from our selected trusted partners/tour operators to turn your travel dreams into reality.</p>
    </div>   
   <div className="w-[85%]">


    <Carousel>
  <CarouselContent >
    <CarouselItem >< Image src={slider} className=" w-[1200px] " alt="slide"/></CarouselItem>
    <CarouselItem>< Image src={slider} className=" w-[100%]"  alt="slide" /></CarouselItem>
    <CarouselItem>< Image src={slider} className=" w-[100%]"  alt="slide"/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
   </div>
      
    </div>
    <div className="flex justify-center ">
    <div className="text-xs text-[#41913C] underline text-left w-[80%]"> <a href="#">Explore more things to do in Hong Kong</a></div>
</div>
    </div>
  )
}
