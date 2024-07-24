"use client"
import { useState } from 'react';
import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../Card";
import card1 from "@/assets/plancard1.webp";
import card2 from "@/assets/plancard2.webp";
import card3 from "@/assets/plancard3.webp";
import card4 from "@/assets/plancard4.webp";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../Tags';
export default function FindThingsToDo() { 
    const cardsData = [
    {
        id: 1,
        imageSrc: card1,
        title: 'Helicopter Mt Tarawera Landing - 3B',
        description: 'From NZD $ 590.00',
    },
    {
        id: 2,
        imageSrc: card2,
        title: 'Native Icons Guided Tour - National Aquarium of New Zealand',
        description: 'From NZD $ 60.00',
    },
    {
        id: 3,
        imageSrc: card3,
        title: 'Day Sea Kayak Tour to Rangitoto Island',
        description: 'From NZD $ 195.00',
    },
    {
        id: 4,
        imageSrc: card4,
        title: 'Sanctuary Mountain At Night',
        description: 'From NZD $ 75.00',
    },
];

const tags = ['Food & Drink experiences', 'Nature & wildlife','History, Arts & Culture','Sightseeing','Adrenaline'];

return (
<div className='py-6'>
   
            <h1 className='boldHeadings'>Explore the North Island</h1>
            <h1 className="font-bold text-3xl">Find things to do</h1>

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

)
}


