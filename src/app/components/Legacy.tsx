'use client';

import Image from "next/image";
import StarIcon from "../assects/star.png";
import { Playfair_Display,Open_Sans } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});

const Legacy = () => {
  return (
    <div>
        <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-160 right-60" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-200 left-40" />
      <div className='max-w-3xl mx-auto text-center mt-40 lg:mt-70'>
        <h1 className={`${playFair.className} text-5xl text-[#2E2B28]`} style={{ fontWeight: 400 }}>Our Legacy, Your Luxury</h1>
        <p className={`${openSans.className} text-md text-[#2E2B28CC] mt-5 sm:ml-2 sm:mr-10`} style={{ fontWeight: 300 }}>
        At DIANO, we believe each gem tells a story. Our legacy lies in selecting only the world’s finest stones — refined by expert hands, and reimagined through innovation. Each piece is an heirloom in waiting.
          </p>
      </div>
    </div>
  )
}

export default Legacy