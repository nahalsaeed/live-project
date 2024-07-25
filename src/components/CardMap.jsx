"use client"
import React from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import Figure from "@/assets/Figure.png";
import { usePathname } from "next/navigation"; // Import usePathname hook

const CardMap = ({ onClose }) => {
  const pathname = usePathname(); 

  const isDestination = pathname === "/destinations";
  return (
    <>
    { isDestination ? (<div className="absolute top-[10px] left-[10px] bg-white shadow-lg   w-[350px] z-10">
      <div className="relative">
        <Image
          src={Figure}
          alt="Figure"
          width={350}
          height={200}
          className=""
        />
        <button onClick={onClose} className="absolute top-2 right-2 text-white">
          <MdClose size={24} />
        </button>
      </div>
      <div className="p-[10px]">
        <h3 className="text-[12px] font-semibold pb-2 text-[#3C8637]">Northland & Bay of Islands</h3>
        <p className="text-black ">
          Bask in the beauty of Northland, New Zealand. With two coastlines and remarkable vistas, Northland can be rugged or sophisticated. Visit Northland beaches.
        </p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Read more
        </button>
      </div>
    </div>) : (
      <div>
      </div>
    )
  }
    </>
  );
};

export default CardMap;
