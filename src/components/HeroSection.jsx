import Image from "next/image"
import "../app/globals.css";
import herosection from "@/app/assets/herosection-img.jpg";
import { Akronim, Actor } from "next/font/google";


const akronim = Akronim({
    subsets: ['latin'],
    weight: '400',
})

const actor = Actor({
    subsets: ['latin'],
    weight: '400',
})

export default function HeroSection() {
    return (
        <div>
            <Image src={herosection} alt="herosection-img" className=" relative w-screen" />

            <div className="absolute inset-0">
                <div className="text-white  mt-56 ml-24 w-[40%] items-start relative">
                    <div className={actor.className}>
                        <div className=" font-thin  text-7xl  ">
                            <h1  > IF</h1>
                            <h1 className="mt-5"> YOU</h1>
                            <h1 className="mt-5"> SEEK</h1>
                        </div>
                    </div>
                    <p className={akronim.className} >Across our incredible country, you can find everything from untamed
                        wilderness to rich culture. Theres more to find in Aotearoa New Zealand.</p>
                    <div className="mt-4">
                        <button className="bg-lime-600 p-4 rounded-md absolute">Start seeking</button>

                    </div>
                </div>
                <div className=" flex justify-center items-center h-auto">
                    <button className=" bg-black rounded-full  border-8 p-7"></button>
                </div>
            </div>

        </div>
    )
}