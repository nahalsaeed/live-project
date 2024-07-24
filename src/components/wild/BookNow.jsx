import "@/app/globals.css";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TfiInstagram } from "react-icons/tfi";
export default function BookNow() {
    return (
        <div className="setCenter mt-20">
            <div className="w-[80%] flex flex-row gap-2">

                <button className="bg-[#41913C]  p-3  rounded-md text-white text-sm font-bold flex felx-row gap-1">
                    Book Now
                </button>
                <button className="bg-[#41913C] p-3  rounded-md text-white text-sm font-bold flex felx-row gap-1">
                Visit Website
                </button>

                <div className="flex flex-row items-center justify-between h-auto gap-6">
              <p className="flex flex-row"> <MdEmail  className="mt-1 mr-2"/> Email    </p>
              <p className="flex flex-row"><FaPhoneAlt  className="mt-1 mr-2"/> Phone</p>
              <p className="flex flex-row"> <TfiInstagram className="mt-1 mr-2" /> Instagram    </p>
              <p className="flex flex-row"> <FaFacebookF className="mt-1 mr-2"/> FaceBook    </p>
              <p className="flex flex-row"> <IoLogoYoutube className="mt-1 mr-2"/> YouTube    </p>
                

                </div>
            </div>
        </div>
    )
}
