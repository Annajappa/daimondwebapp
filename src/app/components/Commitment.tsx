'use client'

import { Playfair_Display,Mulish } from "next/font/google";
import Image from 'next/image';
//import StarIcon from "../assects/star.png";
import gem8 from "../assects/gem8.jpg";
import Link from 'next/link';

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});

const Commitment = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between gap-10 bg-[#FAF8F2] mt-20 lg:mt-30'>
      {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-560 left-10" />
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-590 left-160" />
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-650 left-60" /> */}
      {/* Info Section */}
      <div className='max-w-xl mx-auto mt-20'>
        <h1 className={`${playFair.className} text-[#2E2B28] text-5xl text-center md:text-left`}>A Commitment to Craft and Consciousness</h1>
        <p className={`${mulish.className} text-lg text-[#2E2B28CC] font-light mt-8 mb-8 text-center md:text-left`}>Each DIANO piece is ethically sourced, responsibly cut, and meticulously finished. From mine to masterpiece, our process is transparent and thoughtful.</p>

        <Link href="/" className='underline'>Learn More About Our Process</Link>
      </div>

      {/* Image Section */}
      <div>
        <Image 
        src={gem8}
        alt="Commitment Gem"
        width={500}
        height={500}
        />
      </div>
    </div>
  )
}

export default Commitment