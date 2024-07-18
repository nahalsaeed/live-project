"use client";
import { ImageList, ImageListItem } from "@material-ui/core";
import Image from "next/image";
import gal1 from "@/app/assets/gal1.png";
import gal2 from "@/app/assets/gal2.png";
import gal3 from "@/app/assets/gal3.png";
import gal4 from "@/app/assets/gal4.png";
import gal5 from "@/app/assets/gal5.png";
import gal6 from "@/app/assets/gal6.png";
import gal7 from "@/app/assets/gal7.png";
import gal8 from "@/app/assets/gal8.png";
import gal9 from "@/app/assets/gal9.png";
import gal10 from "@/app/assets/gal10.png";
import insta from "@/app/assets/intsa.png"

import "@/app/globals.css";

export default function MustDo() {
    const imgData = [
        { img: gal1, height: 318, width: 200, colspan: 1 },
        { img: gal2, height: 318, width: 200, colspan: 1 },
        { img: gal3, height: 318, width: 250, colspan: 1 },
        { img: gal4, height: 318, width: 410, colspan: 1 },
        { img: gal5, height: 318, width: 220, colspan: 1 },
        { img: gal6, height: 318, width: 200, colspan: 1 },
        { img: gal7, height: 318, width: 180, colspan: 1 },
        { img: gal8, height: 318, width: 250, colspan: 1 },
        { img: gal9, height: 318, width: 400, colspan: 1 },
        { img: gal10, height: 318, width: 250, colspan: 1 },
        { img: gal9, height: 318, width: 400, colspan: 1 },

    ];
    return (
        <div className="my-8">
            <div className="setCenter">
                <div className="w-[85%]">
                    <h1 className="boldHeadings text-3xl md:text-5xl lg:text-5xl ">#HongKongMustDo</h1>
                </div>
            </div>

            <div className=" ">
                <div className="h-[40vh] lg:h-auto tags-container overflow-y-auto xl:overflow-y-hidden  overflow-x-hidden">
                <ImageList cols={6} variant="quilted" className="">
                    {imgData.map((item, index) => (
                        <ImageListItem
                            key={index}
                            cols={item.colspan}
                            rows={1}
                            style={{ height: item.height, width: item.width, position: 'relative' }}>
                            <div className="relative">
                                <Image
                                    src={item.img}
                                    alt="img"
                                    style={{ height: item.height, width: item.width }} />
                                    
                            </div>
                            <div className="absolute top-2 left-2 "><Image src={insta} alt="insta " className="shadow-black"/></div>
                            <Image src={insta} alt="insta absolute"/>
                        </ImageListItem>
                    ))}
                </ImageList>
                </div>
                
                <div className="setCenter mb-6">
                    <button className="bg-[#41913C] px-5 p-2 text-white text-sm font-semibold  rounded">Load More</button>
                </div>
            </div>
        </div>
    )
}
