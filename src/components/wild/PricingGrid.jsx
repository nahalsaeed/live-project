import BookNow from "./BookNow";
import Pricing from "./Pricing";
import Image from "next/image";
import img1 from "@/assets/Qualmark.webp"
import img2 from "@/assets/tripadvisor.webp"
import img3 from "@/assets/ChoiceAward.webp"

export default function PricingGrid() {
  return (
    <div className="setCenter ">
    <div className="w-[60%]">
        <div className="grid grid-cols-12 gap-20">
            <div className="col-span-9 mr-10">
                
<Pricing/>
            </div>
            <div className="col-span-3 mt-32">
           <div className="grid grid-cols-4">
            <Image src={img1} className="col-span-2" alt="img1"/>
            <Image src={img3} className="col-span-2" alt="img1"/>
            <Image src={img2} className="col-span-2" alt="img1"/>

            </div>
            </div>
            </div>
        </div>      
        <BookNow />
    </div>
  )
}
