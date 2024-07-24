import "@/app/globals.css";
import Image from "next/image";
import realnz from "@/assets/Realnz.webp";
import MakePlan from "../MakePlan";

export default function RealNZ() {
  return (
    <div className="flex flex-col items-center mt-[100px] px-4 md:px-0">
      <div className="w-full max-w-screen-lg">
        <p>Home</p>
        <div className="grid grid-cols-12 gap-8 md:gap-16 mt-16">
          <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
              Wild Kiwi Encounter - RealNZ
            </h1>
            <p className="text-xs my-3 text-[#41913C]">
              Stewart Island Visitor Terminal Main Wharf, Halfmoon Bay, Oban, New Zealand.
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl mt-10">
              From Oban, Stewart Island, cruise to Little Glory Bay for an opportunity to encounter wild southern brown kiwi in their unspoiled natural habitat.
            </p>
          </div>
          <div className="flex justify-center items-center col-span-12 lg:col-span-4 order-1 lg:order-2">
            <Image src={realnz} alt="realnz" height={250} width={250} />
          </div>
        </div>
      </div>
      <MakePlan />
    </div>
  );
}
