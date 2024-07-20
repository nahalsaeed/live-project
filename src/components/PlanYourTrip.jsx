// components/PlanYourTrip.js

import DynamicText from "./DynamicText";
import Image from "next/image";
import Plan1 from "@/app/assets/Plan1.webp";
import Plan2 from "@/app/assets/Plan2.webp";
import Plan3 from "@/app/assets/Plan3.webp";

export default function PlanYourTrip() {
    const heading = "Plan Your Trip";
    const txt = "What kind of holiday do you want to go on? New Zealand has everything from a fun backpacker scene to luxury lodges. To help you find the best things to do in New Zealand and make your planning easier, consider booking a tour.";

    const images = [
        { src: Plan1, alt: "Plan1" },
        { src: Plan2, alt: "Plan2" },
        { src: Plan3, alt: "Plan3" }
    ];

    return (
        <div>
            <DynamicText heading={heading} text={txt} />
            <div className="setCenter mt-6">
                <div className="w-[85%] 2xl:w-[70%] mt-2">
                    <div className="grid grid-cols-12 gap-3">
                        {images.map((image, index) => (
                            <div 
                                key={index}
                                className={` ${index === 0 ? 'col-span-12 lg:col-span-6' : 'col-span-6 lg:col-span-3'}`}
                            >
                                <Image src={image.src} alt={image.alt} />
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
