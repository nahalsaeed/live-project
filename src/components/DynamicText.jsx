import "@/app/globals.css";

export default function DynamicText({ heading, text }) {
    return (
        <div className="setCenter">
            <div className="w-[70%] md:w-[45%] lg:w-[40%] xl:w-[37%] 2xl:w-[27%]">
                <h1 className="boldHeadings ">
                    {heading}
                </h1>
                <p className="text-xs lg:text-sm 2xl:text-lg">{text}</p>

            </div>
        </div>
    )
}
