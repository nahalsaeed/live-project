import Image from "next/image"
import img1 from "@/app/assets/TopAttraction1.webp"
import img2 from "@/app/assets/TopAdventure2.webp"
import { PiArrowRightThin } from "react-icons/pi"

export default function TopAttractions() {
    return (
        <div className="setCenter ">
            <div className="w-[85%] 2xl:w-[70%]">
                <div >
                    <h1 className="boldHeadings">
                        Top attractions and activities
                    </h1>
                    <p className="text-xs">Not sure where to start? Check out the top things to do around Aotearoa New Zealand. </p>
                </div>
                <div className="grid grid-cols-12 gap-5 my-6">
                    <div className="col-span-12 lg:col-span-6">
                        <Image src={img1} alt="img" />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <Image src={img2} alt="img" />
                    </div>
                </div>
            </div>

        </div>
    )
}
