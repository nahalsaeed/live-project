import "@/app/globals.css";

export default function DynamicText({heading,text}) {
    return (
        <div className="setCenter">
            <div className="w-[70%] lg:w-[40%]">
                <h1 className="boldHeadings ">
                    {heading}
                </h1>
                <p className="text-xs xl:text-lg">{text}</p>

            </div>
        </div>
    )
}
