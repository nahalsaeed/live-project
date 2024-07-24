"use client"
import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../Card";
import card1 from "@/assets/Wildcard5.webp";
import card2 from "@/assets/Wildcard6.webp";
import card3 from "@/assets/Wildcard7.webp";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../Tags';
export default function WildCard1() {
    const cardsData = [
        {
            id: 1,
            imageSrc: card1,
            title: 'Stewart Island Lodge',
            description: ' NZD $ 469.00 -  NZD $ 529.00',
        },
        {
            id: 2,
            imageSrc: card2,
            title: 'Glendaruel Bed & Breakfast',
            description: ' NZD $ 145.00 -  NZD $ 275.00',
        },
        {
            id: 3,
            imageSrc: card3,
            title: 'Sails Ashore',
            description: ' NZD $ 595.00',
        },
      
       
    ];

    const tags = ['Bed & breakfast', 'Apartments','Boutique & Lodge','Motels','Backpackers & hostels'];

  return (
    <div>
       <div className="setCenter bg-[#363636] mt-10 ">
            <div className="w-[85%]  2xl:w-[70%]">
                <h1 className="boldHeadings text-white  font-sans">Find a place to stay in the Stewart Island -
                Rakiura region</h1>

                <p className="text-left mt-8 text-xs text-white">Select type of activity:</p>

                <div className="flex flex-row ">
                    <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%]  lg:w-[65%] xl:w-[70%] space-x- mt-4 overflow-auto" >
                       <Tags tags={tags}/>
                    </div>
                    <div className="flex flex-row gap-2 absolute right-14 lg:right-32 2xl:right-96 text-xs mt-4">
                        <Image src={Category} className="h-5 w-auto" alt="category" />
                        <p className="text-white cursor-pointer hidden  lg:hidden xl:block">See all 26 activities in Stewart Island-Rakiura</p>
                        <span className="text-[#D8D8D8]">|</span>
                        <Image src={Map} className="h-5 w-auto ml-2" alt="map" />
                        <p className="text-white cursor-pointer hidden lg:hidden xl:block">Map View</p>
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
                5 Kiwi activities in Stewart Island - Rakiura
                </p>

                <button className="bg-[#41913C] px-4 p-2 my-8 rounded-md text-white text-lg font-semibold flex felx-row gap-1">
                    See all <PiArrowRightThin className="mt-[6px]" />
                </button>
            </div>
        </div>
    </div>
  )
}

    
