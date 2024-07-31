"use client"
import { useState } from 'react';
import Image from "next/image";
import Category from "@/assets/Category.png";
import Map from "@/assets/Map.png";
import Card from "../Card";
import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";
import card4 from "@/assets/card4.png";

import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import Tags from '../Tags';
import ThingsToDo from '../landingpage/ThingsToDo';
export default function CardSection1() { 
    const cardsData = [
        {
            id: 1,
            imageSrc: card1,
            title: 'Lost World Full Day Epic',
            description: 'From HKD $ 595.00',
        },
        {
            id: 2,
            imageSrc: card2,
            title: 'Dart River Wilderness Jet Experience',
            description: 'From HKD $ 299.00',
        },
        {
            id: 3,
            imageSrc: card3,
            title: 'KJet + Milford Sound Day Tour',
            description: 'From HKD $ 350.00',
        },
        {
            id: 4,
            imageSrc: card4,
            title: 'Deep Canyon',
            description: 'HKD $ 370.00 - HKD $ 2300.00',
        },
];

const tags = [ 'Geopark Explore','History, Arts & Culture','Food & Drink','Walking & Hiking','Nature & Wildlife','Film Experiences'];

return (
<div>
<ThingsToDo/>

</div>
)
}


