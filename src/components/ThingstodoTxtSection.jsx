// import { Akronim, Actor } from "next/font/google";
// import DynamicText from "./DynamicText";
// import Paragraph from "./Paragraph";
// const txt="With two unique islands, 14 national parks, and dozens of diverse cities, there are plenty of New Zealand attractions and activities to choose from."
// const route ="Things To do"
// const text="Explore golden coastlines fringed with native pohutakawa trees, follow walking trails to waterfalls hidden in beech forests, or cycle through gently rolling vineyards.If you're after New Zealand's famous adventure activities and extreme sports, you can choose from bungy jumping, jet boating, skydiving or zip lining.Or relax and take it easy at beautiful hot pools, cultural attractions and art galleries."
// export default function ThingstodoTxtSection() {
//     return (
//         <div>
//         <div className="h-[280px] text-white bg-black ">
//            <Paragraph route={route} text={txt}/>
//               </div>
//               <DynamicText text={text} />
//               <div className="flex justify-center items-center h-10">
//               <button className="bg-green-600 text-xs p-2 px-4 text-white rounded">Find Things To do</button>

//               </div>
//         </div>
//     )
// }
"use client"
import { Akronim } from "next/font/google";
import DynamicText from "./DynamicText";
import { usePathname } from "next/navigation"; // Import usePathname hook
const akronim = Akronim({
    subsets: ['latin'],
    weight: '400',
});

const text = "Explore golden coastlines fringed with native pohutakawa trees, follow walking trails to waterfalls hidden in beech forests, or cycle through gently rolling vineyards. If you're after New Zealand's famous adventure activities and extreme sports, you can choose from bungy jumping, jet boating, skydiving or zip lining. Or relax and take it easy at beautiful hot pools, cultural attractions and art galleries.";

export default function ThingstodoTxtSection() {
    const pathname = usePathname(); 

    const isDestinationPage = pathname === "/destinations";

    return (
        <div>
            <div className="h-[280px] text-white bg-black ">
                <div className="mx-5 lg:ml-28 2xl:ml-56 flex justify-between flex-col ">
                    <p className="text-xs mt-2">Home Things To do</p>
                    <div className=" mt-8">
                        <div className={`${akronim.className} mt-5 w-[80%] lg:w-[45%] text-xl lg:text-3xl 2xl:text-5xl`}>
                            <p>With two unique islands, 14 national parks, and
                                dozens of diverse cities, there are plenty of
                                New Zealand attractions and activities to choose
                                from.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {!isDestinationPage && (
                <>
                    <DynamicText text={text} />
                    <div className="flex justify-center items-center h-10">
                        <button className="bg-green-600 text-xs p-2 px-4 text-white rounded">
                            Find Things To do
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}