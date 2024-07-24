import "@/app/globals.css";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TfiInstagram } from "react-icons/tfi";

export default function BookNow() {
    return (
        <div className="setCenter mt-20">
            <div className="w-[80%] flex flex-col md:flex-row gap-4 md:gap-2">

                <button className="bg-[#41913C] p-3 rounded-md text-white text-center text-nowrap text-sm font-bold flex justify-center items-center gap-1">
                    Book Now
                </button>
                <button className="bg-[#41913C] p-3 rounded-md text-white text-center text-nowrap text-sm font-bold flex justify-center items-center gap-1">
                    Visit Website
                </button>

                <div className="flex flex-col md:flex-row items-center justify-between h-auto gap-4 md:gap-6">
                    <p className="hidden md:flex flex-row items-center"><MdEmail className="mt-1 mr-2"/> Email</p>
                    <p className="hidden md:flex flex-row items-center"><FaPhoneAlt className="mt-1 mr-2"/> Phone</p>
                    <p className="hidden md:flex flex-row items-center"><TfiInstagram className="mt-1 mr-2"/> Instagram</p>
                    <p className="hidden md:flex flex-row items-center"><FaFacebookF className="mt-1 mr-2"/> Facebook</p>
                    <p className="hidden md:flex flex-row items-center"><IoLogoYoutube className="mt-1 mr-2"/> YouTube</p>

                    {/* Icons only for small screens */}
                    <div className="flex md:hidden flex-row items-center gap-4">
                        <MdEmail className="text-xl" />
                        <FaPhoneAlt className="text-xl" />
                        <TfiInstagram className="text-xl" />
                        <FaFacebookF className="text-xl" />
                        <IoLogoYoutube className="text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}
