"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image";
import slider from "@/assets/Sliderimg.webp";
export default function MakePlan() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-auto mt-16">
        <div className="w-[85%]">


          <Carousel>
            <CarouselContent >
              <CarouselItem >< Image src={slider} className=" w-[1200px] " alt="slide" /></CarouselItem>
              <CarouselItem>< Image src={slider} className=" w-[100%]" alt="slide" /></CarouselItem>
              <CarouselItem>< Image src={slider} className=" w-[100%]" alt="slide" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

      </div>
      <div className="flex justify-center ">
        <div className="text-xs text-[#818181] underline text-left w-[80%]"> <a href="#">Wild kiwi encounter - Stewart Island</a></div>
      </div>
    </div>
  )
}
