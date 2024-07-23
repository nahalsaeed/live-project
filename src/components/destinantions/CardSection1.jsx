"use client"
import { useState } from 'react';
import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../Card";
import card5 from "@/assets/card5.webp";
import card6 from "@/assets/card6.webp";
import card7 from "@/assets/card7.webp";
import card8 from "@/assets/card8.webp";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../Tags';
export default function CardSection1() { 
    const cardsData = [
    {
        id: 1,
        imageSrc: card5,
        title: 'Heli-Wine Hop Nelson & Marlborough Vineyards with Helicopters Nelson',
        description: 'NZD $ 399.00 - NZD $ 799.00',
    },
    {
        id: 2,
        imageSrc: card6,
        title: 'Marlborough Tour Company - Private Tours',
        description: 'NZD $ 575.00 - NZD $ 750.00',
    },
    {
        id: 3,
        imageSrc: card7,
        title: 'Ananda Black VIP Premium Private Tour of Waiheke Island',
        description: 'NZD $ 400.00 - NZD $ 750.00',
    },
    {
        id: 4,
        imageSrc: card8,
        title: 'Kiwi Journeys - Tasmans Great Taste Trail',
        description: 'NZD $ 1579.00 - NZD $ 1850.00',
    },
];

const tags = ['Food & Drink experiences', 'Nature & wildlife','History, Arts & Culture','Sightseeing','Adrenaline'];

return (
<div>
   <div className="setCenter bg-[#F8F8F8] mt-10 ">
        <div className="w-[85%]  2xl:w-[70%]">
            <h1 className="boldHeadings ">Find things to do</h1>

            <p className="text-left mt-8 text-xs">Select type of activity:</p>

            <div className="flex flex-row ">
                <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%]  lg:w-[65%] xl:w-[70%] space-x- mt-4 overflow-auto" >
                   <Tags tags={tags}/>
                </div>
                <div className="flex flex-row gap-2 absolute right-14 lg:right-32 2xl:right-96 text-xs mt-4">
                    <Image src={Category} className="h-5 w-auto" alt="category" />
                    <p className="text-[#41913C] cursor-pointer hidden  lg:hidden xl:block">See all 3402 activities</p>
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
            308 Geopark Explore activities
            </p>

            <button className="bg-[#41913C] px-4 p-2 my-8 rounded-md text-white text-lg font-semibold flex felx-row gap-1">
                See all <PiArrowRightThin className="mt-[6px]" />
            </button>
        </div>
    </div>

</div>
)
}


