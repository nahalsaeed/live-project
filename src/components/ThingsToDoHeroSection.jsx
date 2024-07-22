import Image from 'next/image';
import "../app/globals.css";
import { Actor } from "next/font/google";

const actor = Actor({
    subsets: ['latin'],
    weight: '400',
});
export default function ThingsToDoHeroSection({ title, subtitle, image }) {
    return (
        <div>
            <Image src={image} alt="hero-section-img" className="relative w-screen" />
            <div className="absolute inset-0">
                {title && subtitle ? (
                    <div className="text-white mt-56 ml-24 w-[40%] items-start relative">
                        <div className={actor.className}>
                            <div className="font-thin text-5xl">
                                <h1>{title}</h1>
                                <h1 className="mt-5">{subtitle}</h1>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Content specific to the /destinations page
                    <div className="text-white mt-56 ml-24 w-[40%] items-start relative">
                        <div className={actor.className}>
                            <div className="font-thin text-5xl">
                                <h1>DESTINATION</h1>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex justify-center items-center h-auto">
                    <button className="bg-black rounded-full border-8 p-7"></button>
                </div>
            </div>
        </div>
    );
}
