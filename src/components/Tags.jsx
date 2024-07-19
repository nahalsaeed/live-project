"use client"
import "@/app/globals.css";
export default function Tags({tags}) {
    // const handleTagClick = (index) => {
    //     setActiveTag(index);
    // };
    return (
        <div>
            

                    {/* <p className="text-left mt-8 text-xs">Select type of activity:</p> */}
                    <div className="flex flex-row ">
                        <div className="tags-container flex flex-row text-nowrap w-[60%] md:w-[75%]  lg:w-[65%] xl:w-[70%] space-x-3 mt-4 overflow-auto" >
                            <span
                                onClick={() => handleTagClick(index)}
                                className="rounded-full px-3 py-1 text-xs cursor-pointer "
                            >
                                {tags}
                            </span>
                        </div>
                    </div>
                </div>
        
    )
}
