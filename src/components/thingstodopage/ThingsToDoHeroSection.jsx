import Image from 'next/image';
import "@/app/globals.css";
import { Actor } from "next/font/google";

const actor = Actor({
    subsets: ['latin'],
    weight: '400',
});
export default function ThingsToDoHeroSection({ title, subtitle, image, description }) {
    return (
        <div className='h-[200px] md:h-auto'>
            <Image src={image} alt="hero-section-img" className="relative h-[200px] md:h-auto  w-screen" />
            <div className="absolute inset-0">
                {title && subtitle ? (
                    <div className="text-white mt-20 md:mt-20 lg:mt-32 2xl:mt-44 ml-24 w-[40%] items-start relative">
                        <div className={actor.className}>
                            <div className="font-thin text-lg md:text-3xl lg:text-5xl  2xl:ml-36 ">
                                <h1>{title}</h1>
                                <h1 className="mt-0 md:mt-2 lg:mt-5">{subtitle}</h1>
                            </div>
                        </div>
                    </div>
                ) : description ? (

                    <div className="text-white mt-20 md:mt-24 lg:mt-32 ml-24 2xl:mt-44  w-[40%] items-start relative  ">
                        <div className={actor.className}>
                        <div className="font-thin text-lg md:text-3xl lg:text-5xl   2xl:ml-36  ">
                                <h1>OUTLYING ISLANDS</h1>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-white mt-20 md:mt-24 lg:mt-32 2xl:mt-44 ml-24 w-[40%] items-start relative">
                        <div className={actor.className}>
                        <div className="font-thin text-lg md:text-3xl lg:text-5xl  2xl:ml-36">
                        <h1>DESTINATIONS</h1>
                            </div>
                        </div>
                    </div>

                )}
                <div className="flex justify-center items-center h-auto mt-4 md:mt-24 ">
                    <button className="bg-black rounded-full border-4 p-3 md:border-6 md:p-5 lg:border-8 lg:p-7"></button>
                </div>
            </div>
        </div>
    );
}
