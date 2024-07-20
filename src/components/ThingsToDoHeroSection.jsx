import HeroSection from './HeroSection';
import herosectionImg from "@/app/assets/Herothingstodo.webp";
import Image from 'next/image';
import "../app/globals.css";
import { Akronim, Actor } from "next/font/google";
const actor = Actor({
    subsets: ['latin'],
    weight: '400',
});

export default function ThingsToDoHeroSection() {
    return (
        <div>
            <Image src={herosectionImg} alt="herosection-img" className=" relative  w-screen" />

            <div className="absolute inset-0">
                <div className="text-white  mt-56 ml-24 w-[40%] items-start relative">
                    <div className={actor.className}>
                        <div className=" font-thin  text-5xl  ">
                            <h1  > Things to do in</h1>
                            <h1 className="mt-5"> NEW ZEALAND</h1>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center h-auto">
                    <button className=" bg-black rounded-full  border-8 p-7"></button>
                </div>
            </div>

        </div>
    )
} 