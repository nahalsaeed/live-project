import owl from "@/assets/owl.webp";
import Image from "next/image";
// import progress from "@/assets/progress.webp"
import "@/app/globals.css";
import { Archivo } from "next/font/google";
import ReviewBar from "./ReviewBar";
import PromoTag from "./PromoTag";

const archivo = Archivo({
    subsets: ['latin'],
    weight: '400',
});

export default function Card({ imageSrc, title, description, review, rating, promo }) {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden w-[90%] h-full shadow-lg relative mx-auto">

            { promo != null ? (
            <div>
                <Image className="w-full relative" src={imageSrc} alt={title} />
                <PromoTag promo={promo}/>
                 </div>
           ) : (
            <div>
            <Image className="w-full relative" src={imageSrc} alt={title} />

            </div>

           )} 
           

            <div className="px-6 py-4 min-h-[240px] bg-white">
                <div className="font-bold text-lg mb-2">{title}</div>
                <p className="text-gray-700 text-xs">{description}</p>
            </div>
            <div className="bg-[#F8F8F8] w-full absolute bottom-0">
                {rating != null ? (
                    <div className="flex flex-row gap-2 ml-7 mt-4">
                        <Image src={owl} alt="owl" className="h-4 w-auto" />
                        <ReviewBar rating={rating} />
                        <p className="text-[10px]">Based on {review} reviews</p>
                    </div>
                ) :
                    (
                        <div className=""> </div>
                    )}

                <div className="flex flex-col justify-normal items-center w-full h-auto my-6">
                    <div className="w-[80%] mt-2"></div>
                </div>
            </div>
        </div>
    );
}
