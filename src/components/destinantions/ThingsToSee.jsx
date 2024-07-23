"use client"
import { ImageList, ImageListItem } from "@material-ui/core";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import Gallery1 from "@/assets/TopAdventure2.webp";
import Gallery2 from "@/assets/destinationGal2.webp";
import Gallery3 from "@/assets/destinationGal3.webp";
import Gallery4 from "@/assets/destinationGal4.webp";
import Gallery5 from "@/assets/destinationGal5.webp";
import Gallery6 from "@/assets/destinationGal1.webp";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DynamicText from "../DynamicText";

export default function ThingsToSee() {
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
  
    const itemData = [
      {
        title: "Top things to see and do ",
        img: Gallery1,
        height: 436,
        width: 660,
        colspan: isXs ? 1 : 2,
      },
      {
        title: "Explore North Island deals ",
        img: Gallery2,
        height: 436,
        width: 310,
        colspan: 1,
      },
      {
        title: "Explore South Island deals ",
        img: Gallery3,
        height: 436,
        width: 310,
        colspan: 1,
      },
      {
        title: "Incredible national parks ",
        img: Gallery4,
        height: 436,
        width: 310,
        colspan: 1,
      },
      {
        title: "Stunning scenery and natural wonders ",
        img: Gallery5,
        height: 436,
        width: 310,
        colspan: 1,
      },
      {
        title: "New Zealand's top 10 hidden gems ",
        img: Gallery6,
        height: 436,
        width: 660,
        colspan: isXs ? 1 : 2,
      },
    ];
    const heading="Things to see and do in New Zealand"
    const txt="Diverse scenery and unique culture mean there is a wide range of things to see and do while travelling around New Zealand. Here are some ideas to help plan your trip."
  return (
    <div>

    <DynamicText heading={heading} text={txt}/>
      <div className=" h-fit overflow-y-scroll">
      <div className="flex justify-center items-center">
        <div className="w-[88%]  mx-5 md:mx-14 2xl:w-[70%]">
          <div className="my-10 ">
            <ImageList className="" gap={10} cols={getCols()} variant="quilted">
              {itemData.map((item, index) => (
                <ImageListItem
                  key={index}
                  cols={item.colspan}
                  rows={1}
                  gap={2}
                  className={`relative ${(isXs || isSm || isMd) ? "h-auto" : "gallerySection"
                    }`}
                >
                  {isXs || isSm || isMd ? (
                    <Image
                      className="cursor-pointer"
                      src={item.img}
                      alt={item.title}
                      objectFit="cover"
                      layout="fill"
                    />
                  ) : (
                    <>
                      <Image
                        className="cursor-pointer"
                        src={item.img}
                        alt={item.title}
                        height={item.height}
                      />
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5">
                    {item.title}
                    <PiArrowRightThin className="mt-[4px]" />
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
