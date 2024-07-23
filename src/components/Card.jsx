import Image from "next/image";
import owl from "@/assets/owl.webp"
import progress from "@/assets/progress.webp"
import { Archivo } from "next/font/google";
const archivo = Archivo({
    subsets: ['latin'],
    weight: '400',
})

export default function Card({ imageSrc, title, description }) {

    return (
        <div className="max-w-sm rounded-xl overflow-hidden   w-[90%] h-full shadow-lg relative mx-auto">
            <Image className="w-full" src={imageSrc} alt={title} />

            <div className="px-6 py-4 min-h-[220px] ">
                <div className="font-bold text-lg mb-2">{title}</div>
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
            <div className="bg-[#F8F8F8] w-full absolute bottom-0">
                <div className="flex flex-row gap-2  ml-7 mt-4">
                    <Image src={owl} alt="owl" className="h-4 w-auto" />
                    <Image src={progress} alt="progress" className="h-4 w-auto" />
                    <p className="text-[10px]">Based on 2632 reviews</p>
                </div>
                <div className="flex  flex-col justify-normal items-center w-full h-auto my-6 ">
                    <hr className="bg-black w-[80%]" />
                    <div className="w-[80%] mt-2">
                        <div className={archivo.className}>
                            <p className="text-[#C79723] text-left   font-semibold">QUALMARK GOLD</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};


