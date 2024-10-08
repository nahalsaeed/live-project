import "@/app/globals.css";
import MakePlan from "./MakePlan";
import BookNow from "./BookNow";

export default function RealNZ() {
  return (
    <div>

      <div className="flex flex-col items-center mt-[100px] px-4 md:px-0 font-serif">
        <div className="setCenter">
          <div className="w-[80%] lg:w-[45%] 2xl:w-[55%] ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl ">
              Wild Kiwi Encounter - RealNZ
            </h1>
            <p className="text-lg md:text-2xl lg:text-[29px] 2xl:text-[32px] my-14  ">
              From Oban, Stewart Island, cruise to Little Glory Bay for an opportunity to encounter wild southern brown kiwi in their unspoiled natural habitat.
            </p>
          </div>
        </div>
        <MakePlan />
      </div>
      <BookNow />
    </div>
  );
}
