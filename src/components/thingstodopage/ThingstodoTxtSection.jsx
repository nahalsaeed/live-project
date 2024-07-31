
"use client"
import { Akronim } from "next/font/google";
import DynamicText from "../DynamicText";
import { usePathname } from "next/navigation"; 
import { IoIosArrowForward } from "react-icons/io";
const akronim = Akronim({
    subsets: ['latin'],
    weight: '400',
});

const text = ["Explore golden coastlines fringed with native pohutakawa trees, follow walking trails to waterfalls hidden in beech forests, or cycle through gently rolling vineyards."," If you're after New Zealand's famous adventure activities and extreme sports, you can choose from bungy jumping, jet boating, skydiving or zip lining."," Or relax and take it easy at beautiful hot pools, cultural attractions and art galleries."] ;

export default function ThingstodoTxtSection({para}) {
    const pathname = usePathname(); 

    const isThingsToDoPage = pathname === "/things-to-do";


    return (
        <div>
            <div className="h-[280px] 2xl:h-[300px] text-white bg-[#3B5998] ">
                <div className="mx-5 lg:ml-28 2xl:ml-56 flex justify-between flex-col ">
                    <p className="text-xs mt-6 gap-1 flex flex-row">Home <IoIosArrowForward  className="mt-[3px]"/>
                    Things To do</p>
                    <div className=" mt-8">
                        
                        <div className={`${akronim.className} mt-5 w-[80%] lg:w-[45%] text-xl lg:text-3xl 2xl:text-4xl`}>
                            <p>{para}</p>
                        </div>
                    </div>
                </div>
            </div>
            {isThingsToDoPage && (
                <>
                <div className="my-[100px] font-medium">
                    <DynamicText text={text}  />
  
                </div>
                </>
            )}
        </div>
    );
}
