import { IoIosArrowForward } from "react-icons/io"

export default function OptionsTable() {
    const options = [
        { name: "FAQs", link: "" },
        { name: "Request a map", link: "" },
        { name: "Site Feedback", link: "/web-information/site-feedback" },
        { name: "Need Help", link: "/web-information/need-help" }
    ]
    
    return (
        <div className="w-[90%]">
            <h1 className="text-xl font-medium border-b-2 border-zinc-100 p-4">
                Contact Us
            </h1>
            {options.map((option, index) => (
                <div 
                    key={index} 
                    className="border-b-2 border-zinc-100 p-2 text-green-700 font-thin hover:underline cursor-pointer flex flex-row justify-between"
                >
                    <a href={option.link}>{option.name}</a>
                    <IoIosArrowForward />
                </div>
            ))}
        </div>
    )
}
