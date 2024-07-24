
"use client"

import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../Card";
import card1 from "@/assets/plancard5.webp";
import card2 from "@/assets/plancard6.webp";
import card3 from "@/assets/plancard7.webp";
import card4 from "@/assets/plancard8.webp";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../Tags';
export default function FindPlacesToStay() { 
    const cardsData = [
    {
        id: 1,
        imageSrc: card1,
        title: 'Regent of Rotorua',
        description: 'NZD $ 168.00 - NZD $ 538.00',
    },
    {
        id: 2,
        imageSrc: card2,
        title: 'Hotel Fitzroy curated by Fable',
        description: 'NZD $ 350.00 - NZD $ 700.00',
    },
    {
        id: 3,
        imageSrc: card3,
        title: 'Quality Hotel Lincoln Green',
        description: 'NZD $ 119.00 - NZD $ 499.00',
    },
    {
        id: 4,
        imageSrc: card4,
        title: 'QT Auckland',
        description: 'NZD $ 279.00 - NZD $ 999.00',
    },
];

const tags = [' Hotels', 'Motels','Bed & Breakfast','Boutique & Lodge','Holiday Parks & Campgrounds'];

return (
<div className="py-6">

            <h1 className="font-bold text-3xl">Find Places To Stay</h1>

            <p className="text-left mt-8 text-xs">Select type of transport:</p>

            <div className="flex flex-row ">
                <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%]  lg:w-[65%] xl:w-[70%] space-x- mt-4 overflow-auto" >
                   <Tags tags={tags}/>
                </div>
                <div className="flex flex-row gap-2 absolute right-14 lg:right-32 2xl:right-96 text-xs mt-4">
                    <Image src={Category} className="h-5 w-auto" alt="category" />
                    <p className="text-[#41913C] cursor-pointer hidden  lg:hidden xl:block">See all 906 transport</p>
                    <span className="text-[#D8D8D8]">|</span>
                    <Image src={Map} className="h-5 w-auto ml-2" alt="map" />
                    <p className="text-[#41913C] cursor-pointer hidden lg:hidden xl:block">Map View</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-y-6 my-10">
                {cardsData.map((card) => (
                    <Card 
                        key={card.id}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            <p className="text-xs text-[#767676] font-medium">
            463 Rental cars
            </p>

            <button className="bg-[#41913C] px-4 p-2 my-8 rounded-md text-white text-lg font-semibold flex felx-row gap-1">
                See all <PiArrowRightThin className="mt-[6px]" />
            </button>
        </div>
    
)
}


