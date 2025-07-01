'use client'

import Image from 'next/image';
import gem3 from "../assects/gem3.jpg";
//import StarIcon from "../assets/star.png";
import { Playfair_Display,Open_Sans } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});

const DianoApart = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between gap-10 bg-[#FAF8F2] mt-20 lg:mt-30'>
        {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-238 left-5" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-330 left-150" /> */}
        {/* Info Section */}
      <div className='px-15 py-15'>
        <h1 className={`${playFair.className} text-5xl text-[#2E2B28] text-center lg:text-left`} style={{fontWeight: 400}}>What Sets DIANO Apart</h1>
        <p className={`mt-6 ${openSans.className} font-light text-md text-[#2E2B28CC]`}>Rare Origins:<br />Sourced from the world&apos;s most exclusive mines.</p>
        <p className={`mt-6 ${openSans.className} font-light text-md text-[#2E2B28CC]`}>AI-Enhanced Visuals:<br />See every facet in cinematic clarity.</p>
        <p className={`mt-6 ${openSans.className} font-light text-md text-[#2E2B28CC]`}>Expertise-Driven Curation:<br />Handpicked by gemologists with generations of experience.</p>
        <p className={`mt-6 ${openSans.className} font-light text-md text-[#2E2B28CC]`}>Exclusively B2B:<br />Crafted for designers, retailers, and collectors.</p>

        <button className={`mt-10 ${openSans.className} h-10 text-white bg-[#D6C5A0] px-3 rounded-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-300`}>Get a Free Valuation</button>
      </div>

      {/* Image Section */}
        <div className='flex items-center justify-center'>
            <Image
            src={gem3}
            alt="Diano Apart"
            width={500}
            height={500}
            className='h-full object-cover'
            />
            </div>
    </div>
  )
}

export default DianoApart