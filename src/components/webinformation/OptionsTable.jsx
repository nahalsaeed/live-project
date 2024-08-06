import { IoIosArrowForward } from "react-icons/io"

export default function OptionsTable() {
    const options = ["FAQs", "Request a map", "Site Feedback", "Need Help"]
    return (
        <div className="w-[90%]">
            <h1 className="text-xl font-semibold border-b-2 border-zinc-100 p-4 ">
                Contact Us
            </h1>
            {options.map((option, index) => (
                <div key={index} className="border-b-2 border-zinc-100 p-2 text-green-700 font-thin hover:underline cursor-pointer flex flex-row justify-between">{option} <IoIosArrowForward />
                </div>
            ))}
        </div>
    )
}
