"use client"
import { ImageList, ImageListItem } from "@material-ui/core";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import DynamicText from "../DynamicText";
import img1 from "@/assets/central.webp"
import img2 from "@/assets/central1.webp"
import img3 from "@/assets/central2.webp"
import img4 from "@/assets/central3.webp"
import img5 from "@/assets/central4.webp"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const heading = "Central North Island"
const txt = "From the stunning beaches in Coromandel to Rotorua's geothermal wonderland, here are some spots in central North Island you shouldn't miss."
export default function CentralNorth() {
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
      title: "The Coromandel  ",
      img: img1,
      height: 436,
      width: 660,
      colspan: isXs ? 1 : 2,
    },
    {
      title: "Hamilton - Waikato ",
      img: img2,
      height: 436,
      width: 310,
      colspan: 1,
    },
    {
      title: "Bay Of Plenty ",
      img: img3,
      height: 436,
      width: 310,
      colspan: 1,
    },
    {
      title: "Taupō  ",
      img: img4,
      height: 436,
      width: 660,
      colspan: isXs ? 1 : 2,
    },
    {
      title: " Tairāwhiti Gisborne ",
      img: img5,
      height: 436,
      width: 660,
      colspan: isXs ? 1 : 2,
    },

  ];
  return (
    <div>
      <DynamicText heading={heading} text={txt} />
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
