"use client";
import { ImageList, ImageListItem } from "@material-ui/core";
import Image from "next/image";
import gal1 from "@/assets/gal1.png";
import gal2 from "@/assets/gal2.png";
import gal3 from "@/assets/gal3.png";
import gal4 from "@/assets/gal4.png";
import gal5 from "@/assets/gal5.png";
import gal6 from "@/assets/gal6.png";
import gal7 from "@/assets/gal7.png";
import gal8 from "@/assets/gal8.png";
import gal9 from "@/assets/gal9.png";
import gal10 from "@/assets/gal10.png";
import insta from "@/assets/intsa.png"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import "@/app/globals.css";

export default function MustDo() {
    const itemData = [
        { img: gal1, height: 318, width: 200, colspan: 1 },
        { img: gal2, height: 318, width: 200, colspan: 1 },
        { img: gal3, height: 318, width: 250, colspan: 1 },
        { img: gal4, height: 318, width: 410, colspan: 2 },
        { img: gal5, height: 318, width: 220, colspan: 1 },
        { img: gal6, height: 318, width: 200, colspan: 1 },
        { img: gal7, height: 318, width: 180, colspan: 1 },
        { img: gal8, height: 318, width: 250, colspan: 1 },
        { img: gal9, height: 318, width: 400, colspan: 2 },
        { img: gal10, height: 318, width: 250, colspan: 1 },
    ];

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("xs"));
    const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
    const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isXl = useMediaQuery(theme.breakpoints.up("lg"));

    const getCols = () => {
        if (isXs) return 1;
        if (isSm) return 2;
        if (isMd) return 3;
        if (isLg) return 4;
        if (isXl) return 4;
        return 4;
    };

    return (
        <div className="my-8">
            <div className="setCenter">
                <div className="w-[85%]">
                    <h1 className="boldHeadings">#HongKongMustDo</h1>
                </div>
            </div>

            <div className=" ">
                <div className="h-[40vh] lg:h-auto tags-container overflow-y-auto xl:overflow-y-hidden  overflow-x-hidden">
                    <div className="my-10 ">
                        <ImageList className="" cols={getCols()} variant="quilted" gap={8}>
                            {itemData.map((item, index) => (
                                <ImageListItem
                                    key={index}
                                    cols={item.colspan}
                                    rows={1}
                                    className={`relative ${(isXs || isSm || isMd) ? "h-auto" : "gallerySection"
                                        }`}
                                >
                                    {/* {isXs || isSm || isMd ? ( */}
                                    <Image
                                        className="cursor-pointer"
                                        src={item.img}
                                        objectFit="cover"
                                        layout="fill"
                                        alt="img"
                                    />
                                    {/* ) : ( */}
                                    <>
                                        <Image
                                            className="cursor-pointer"
                                            src={item.img}
                                            height={item.height}
                                            alt="img"
                                        />
                                    </>
                                    {/* )} */}
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>

                <div className="setCenter mb-6">
                    <button className="bg-[#41913C] px-5 p-2 text-white text-sm font-semibold  rounded">Load More</button>
                </div>
            </div>
        </div>
    )
}
