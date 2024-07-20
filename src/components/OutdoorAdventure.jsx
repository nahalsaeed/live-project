import DynamicText from "./DynamicText";
import Image from "next/image";
import relax1 from "@/app/assets/Relax1.webp";
import relax2 from "@/app/assets/Relax2.webp";
import relax3 from "@/app/assets/Relax3.webp";
import relax4 from "@/app/assets/Relax4.webp";
import relax5 from "@/app/assets/Relax5.webp";
import relax6 from "@/app/assets/Relax6.webp";
import relax7 from "@/app/assets/Relax7.webp";
import { PiArrowRightThin } from "react-icons/pi";

export default function OutdoorAdventure() {
  const txtData = [
    {
      heading: "Outdoor adventures",
      text: "Explore New Zealand's stunning landscapes and thrilling adventure opportunities. You can find walking and hiking trails all around the country. Choose a short walk or a multi-day trek to discover destinations such as Stewart Island/Rakiura, Fiordland, or Tongariro National Park. On your outdoors adventure, you might spot some of New Zealand's wildlife, including rare birds, dolphins, or even whales.",
    },
    {
      heading: "Relax",
      text: "New Zealand is an easy-going place. Take a leaf out of the locals' book and embrace the laid-back vibes and rejuvenating activities. Find a beach where you can sunbathe the day away, splash around in a hot pool, or shop for quirky souvenirs. There are plenty of ways to enjoy downtime on your holiday in New Zealand.",
    },
  ];

  const images = [
    { src: relax1, alt: "img1", title: "Adventure and Adrenaline" },
    { src: relax2, alt: "img2", title: "Walking and Hiking" },
    { src: relax3, alt: "img3", title: "Water Sports" },
    { src: relax4, alt: "img4", title: "Nature & Wildlife" },
    { src: relax5, alt: "img5", title: "Skiing and Snowboarding" },
    { src: relax6, alt: "img6", title: "Sports" },
    { src: relax7, alt: "img7", title: "Stargazing" },
  ];

  return (
    <div>
      {txtData.map((item, index) => (
        <DynamicText key={index} heading={item.heading} text={item.text} />
      ))}
      <div className="setCenter mt-6">
        <div className="w-[85%] 2xl:w-[70%] mt-2">
          <div className="grid grid-cols-12 gap-3">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative ${index === 0 ? 'col-span-12 lg:col-span-6' : 'col-span-6 lg:col-span-3'}`}
              >
                <Image src={image.src} alt={image.alt} />
                <div className="absolute bottom-0 left-0 flex flex-row gap-1 text-white font-bold text-sm p-5 ">
                  {image.title}
                  <PiArrowRightThin className="mt-[4px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
