import React from 'react'
import Image from 'next/image';
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

const Connect = () => {
  return (
    <div>
      <h1 className={`${playFair.className} text-5xl text-[#2E2B28] mt-20 text-center`}>Connect with DIANO</h1>
        <p className={`${openSans.className} text-md text-[#2E2B28CC] font-light text-center mt-7 mb-20`}>Available for private viewing sessions by appointment only.</p>

        {/* Form Section */}
        <div className='w-full bg-[#FAF8F2]'>
        {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-840 left-240" />
        <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-870 left-70" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-955 left-70" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-900 left-240" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-1000 left-220" /> */}
            <div className='max-w-5xl mx-auto flex flex-col md:flex-row gap-30 py-20 text-center md:text-left'>
            <div>
                <p className={`${openSans.className} text-[#2E2B28B2] text-md`}>Location</p>
                <p className={`${openSans.className} text-[#2E2B2880] text-sm mb-7`}>123, [Street Name], [City], [State], [PIN Code]</p>
                <p className={`${openSans.className} text-[#2E2B28B2] text-md`}>Open Hours</p>
                <p className={`${openSans.className} text-[#2E2B2880] text-sm mb-7`}>Monday to Saturday, 10:00 AM – 7:00 PM</p>
                <p className={`${openSans.className} text-[#2E2B28B2] text-md`}>Phone</p>
                <p className={`${openSans.className} text-[#2E2B2880] text-sm mb-7`}>+91-XXXXXXXXXX</p>
                <p className={`${openSans.className} text-[#2E2B28B2] text-md`}>Email</p>
                <p className={`${openSans.className} text-[#2E2B2880] text-sm mb-20`}>Jeweleryexample.com</p>
            </div>

            <div className='p-5 md:p-0'>
                <input type="text" placeholder='Name' className='w-full border-0 border-b border-[#2E2B2880] focus:outline-none focus:border-black bg-transparent'/>
                <div>
                <input type="email" placeholder='Email' className='w-full border-0 border-b border-[#2E2B2880] focus:outline-none focus:border-black bg-transparent mt-7'/>
                <input type="text" placeholder='Phone' className='w-full border-0 border-b border-[#2E2B2880] focus:outline-none focus:border-black bg-transparent mt-7'/>
                <textarea placeholder='Your Message' className='w-full border-0 border-b border-[#2E2B2880] focus:outline-none focus:border-black bg-transparent mt-7 h-32 resize-none'></textarea>
                </div>
                <button type='submit' className={`${openSans.className} bg-[#D6C5A0] text-white px-5 py-2 mt-7 cursor-pointer rounded-md hover:scale-105 active:scale-95 transition-all duration-300`}>Send</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Connect