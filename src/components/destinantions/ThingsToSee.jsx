"use client"
import { ImageList, ImageListItem } from "@material-ui/core";
import Image from "next/image";
import Gallery1 from "@/assets/Geopark.webp";
import Gallery2 from "@/assets/FoodDrink.webp";
import Gallery3 from "@/assets/destinationGal5.webp";
import Gallery4 from "@/assets/destinationGal4.webp";

import "@/app/globals.css";
import DynamicGridSection from "../common/DynamicGridSection";

export default function ThingsToSee() {
    const itemData = [
      {
        img: Gallery1,
        title: "Geopark Explore "
    },
    {
        img: Gallery4,
        title: "Nature & Wildlife "
    },
    {
        img: Gallery3,
        title: "Walking & Hiking "
    },
    {
        img: Gallery2,
        title: "Food & Drink "
    }
    ];
  
  return (
    <div className="my-10">

    <div className="flex justify-center  "><h1 className="boldHeadings">Things to see and do in Hong Kong</h1></div>
     <DynamicGridSection imgData={itemData}/>
    </div>
  );
}
