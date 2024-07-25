import BookNow from "./BookNow";
import Pricing from "./Pricing";
import Image from "next/image";
import img1 from "@/assets/Qualmark.webp";
import img2 from "@/assets/tripadvisor.webp";
import img3 from "@/assets/ChoiceAward.webp";

export default function PricingGrid() {
  return (
    <div className="flex flex-col items-center mt-16 px-4 md:px-0">
      <div className="w-full max-w-screen-lg gap-10">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 lg:col-span-9 lg:mr-10">
            <Pricing />
          </div>
          <div className="col-span-12 lg:col-span-3 mt-8 lg:mt-20">
            <div className="grid grid-cols-2 gap-4 lg:gap-2">
              <Image src={img1} className="col-span-1" alt="Qualmark" />
              <Image src={img3} className="col-span-1" alt="Choice Award" />
              <Image src={img2} className="col-span-1" alt="Tripadvisor" />
            </div>
          </div>
        </div>
      </div>
      <BookNow />
    </div>
  );
}
