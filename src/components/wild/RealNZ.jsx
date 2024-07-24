import "@/app/globals.css";
import Image from "next/image";
import realnz from "@/assets/Realnz.webp"
import MakePlan from "../MakePlan";
export default function RealNZ() {
    return (
        <div className="setCenter mt-[100px]">
            <div className="w-[80%]">
                <p>Home</p>
                <div className="grid grid-cols-12 gap-28 mt-16">
                    <div  className="col-span-12 lg:col-span-8 ">
                        <h1 className="text-5xl font-serif">Wild Kiwi Encounter - RealNZ</h1>
                        <p className="text-xs my-3 text-[#41913C]">Stewart Island Visitor Terminal Main Wharf, Halfmoon Bay, Oban, New Zealand.</p>
                        <p className="text-3xl mt-10">From Oban, Stewart Island, cruise to Little Glory Bay for an opportunity to encounter wild southern brown kiwi in their unspoiled natural habitat.</p>
                    </div>
                    <div className="flex justify-center items-center h-auto col-span-12 order-1 lg:col-span-4  ">
                        <Image src={realnz} alt="realnz" height={250} width={250}/>
                    </div>
                </div>
            </div>
            <MakePlan/>
        </div>
    )
}
