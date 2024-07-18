import Image from "next/image";
import picture from "@/app/assets/Picture.webp";
import picture2 from "@/app/assets/Picture2.webp";
import picture4 from "@/app/assets/Picture4.webp";
import picture3 from "@/app/assets/Picture3.webp";
import { PiArrowRightThin } from "react-icons/pi";

const imgData = [
    {
        img: picture,
        title: "Cities"
    },
    {
        img: picture4,
        title: "Countryside"
    },
    {
        img: picture3,
        title: "Outlying islands"
    },
    {
        img: picture2,
        title: "Explore all regions"
    }
];

export default function FirstPlacesToGo() {
    return (
        <div className="h-auto  bg-white my-10">
            <div className="setCenter">
                <div className="w-[85%] 2xl:w-[70%]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
                        {imgData.map((data, index) => (
                            <div key={index} className="relative cursor-pointer">
                                <Image src={data.img} alt="img" />
                                <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5">
                                    {data.title}
                                    <PiArrowRightThin className="mt-[4px]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
