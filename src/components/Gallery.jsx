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
      title: "Māori culture",
      img: Gallery1,
      height: 436,
      width: 660,
      colspan: isXs ? 1 : 2,
    },
    {
      title: "Food and drink",
      img: Gallery2,
      height: 436,
      width: 310,
      colspan: 1,
    },
    {
      title: "Walking and hiking",
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
      title: "Adventure and Adrenaline",
      img: Gallery5,
      height: 436,
      width: 310,
      colspan: 1,
    },
    {
      title: "Home of Middle‑earth™",
      img: Gallery6,
      height: 436,
      width: 660,
      colspan: isXs ? 1 : 2,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#171717] from-80% lg:from-75% to-white to-20% lg:to-25% h-[180vh] md:h-[120vh] lg:h-[110vh] xl:h-[125vh] border-2  text-white">
      <div className="flex justify-center items-center">
        <div className="w-full h-screen mx-5 md:mx-14">
          <div className="text-xs mt-10 flex flex-row underline gap-2">
            <p className="cursor-pointer">North Island destination</p>|
            <p className="cursor-pointer">South Island destinations</p>|
            <p className="cursor-pointer">Explore all regions</p>
          </div>
          <div className="mt-24">
            <h1 className="boldHeadings ">Must do Hong Kong experiences</h1>
          </div>
          <div className="mt-10 ">
            <ImageList className="" gap={10} cols={getCols()} variant="quilted">
              {itemData.map((item, index) => (
                <ImageListItem
                  key={index}
                  cols={item.colspan}
                  rows={1}
                  gap={2}
                  className={`relative ${
                    (isXs || isSm || isMd) ? "h-auto" : "gallerySection"
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
