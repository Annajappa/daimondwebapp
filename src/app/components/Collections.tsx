import React from 'react'
import { Playfair_Display,Open_Sans } from "next/font/google";
import Image from 'next/image';
//import StarIcon from "../assets/star.png";
import gem4 from "../assects/gem4.jpg";
import gem5 from "../assects/gem5.jpg";
import gem6 from "../assects/gem6.jpg";
import gem7 from "../assects/gem7.jpg";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Gems = [
    {
        src: gem4,
        alt: "GEM 4",
        name: "PINK DIAMOND",
        price: "$999"
    },
    {
        src: gem5,
        alt: "GEM 5",
        name: "PINK DIAMOND",
        price: "$999"
    },
    {
        src: gem6,
        alt: "GEM 6",
        name: "PINK DIAMOND",
        price: "$999"
    },
    {
        src: gem7,
        alt: "GEM 7",
        name: "PINK DIAMOND",
        price: "$999"
    }
]

const Collections = () => {
  return (
    <div className='mt-25 w-full bg-[#FAF8F2]'>
        {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-395 left-30" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-400 right-30" /> */}
        {/* <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-510 right-155" /> */}
      <h1 className={`py-10 ${playFair.className} text-center text-5xl`}>Our Signature Collections</h1>
      <div className='flex flex-col md:flex-row items-center'>
        {Gems.map((gem, index) => (
          <div key={index} className='w-1/2 mb-10'>
            <Image
              src={gem.src}
              alt={gem.alt}
              width={300}
              height={300}
              className='w-full object-cover'
            />
            <p className={`${openSans.className} text-center font-light text-md text-[#2E2B28CC]`}>{gem.name} <br /> {gem.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collections