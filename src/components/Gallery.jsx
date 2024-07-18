"use client";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Image from "next/image";
import Gallery1 from "@/app/assets/Gallery1.png";
import Gallery2 from "@/app/assets/Gallery2.png";
import Gallery3 from "@/app/assets/Gallery3.png";
import Gallery4 from "@/app/assets/Gallery4.png";
import Gallery5 from "@/app/assets/Gallery5.png";
import Gallery6 from "@/app/assets/Gallery6.png";
import { PiArrowRightThin } from "react-icons/pi";
import "@/app/globals.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { height } from "@mui/system";

export function GalleryComponent() {
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
      title: "Geopark Explore",
      img: Gallery1,
      height: 436,
      width: 660,
      colspan: isXs ? 1 : 2,
    },
    {
      title: "Food & Drink ",
      img: Gallery2,
      height: 436,
      width: 310,
      colspan: 1,
    },
    {
      title: "Walking & hiking",
      img: Gallery3,
      height: 436,
      width: 310,
      colspan: 1,
    },
    {
      title: "Nature & Wildlife",
      img: Gallery4,
      height: 436,
      width: 310,
      colspan: 1,
    },
    {
      title: "Film Experiences ",
      img: Gallery5,
      height: 436,
      width: 310,
      colspan: 1,
    },
    {
      title: "History, Art & Culture ",
      img: Gallery6,
      height: 436,
      width: 660,
      colspan: isXs ? 1 : 2,
    },
  ];

  return (
    <div className=" bg-gradient-to-b from-[#3B5998] from-80% to-white to-20% h-fit overflow-y-scroll text-white">
      <div className="flex justify-center items-center">
        <div className="w-[88%]  mx-5 md:mx-14 2xl:w-[70%]">
          <div className="text-xs mt-10 flex flex-row underline gap-2">
            <p className="cursor-pointer">North Island destination</p>|
            <p className="cursor-pointer">South Island destinations</p>|
            <p className="cursor-pointer">Explore all regions</p>
          </div>
          <div className="mt-24">
            <h1 className="boldHeadings sm:text-3xl lg:text-5xl">Must do Hong Kong experiences</h1>
          </div>
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
  );
}
