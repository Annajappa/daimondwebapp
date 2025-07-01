import React from 'react'
import { Playfair_Display, Open_Sans, Mulish } from "next/font/google";
import Image from 'next/image';
// import StarIcon from "../assets/star.png";
import test1 from "../assects/test1.jpg";
import test2 from "../assects/test2.jpg";
import test3 from "../assects/test3.jpg";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const testimonials = [
  {
    desc: "“Seamless experience from start to finish. CVT helped streamline our admin and bookkeeping — we finally have time to focus on growth.”",
    src: test1
  },
  {
    desc: "“Professional, responsive, and reliable. The digital marketing team elevated our online presence within weeks.”",
    src: test2
  },
  {
    desc: "“Their virtual assistants feel like an extension of our in-house team. Communication is smooth and quality is top-tier.”",
    src: test3
  }
];

const Testimonial = () => {
  return (
    <div className='w-full bg-[#FAF8F2] mt-20 lg:mt-30'>
      <h1 className={`${playFair.className} text-5xl text-[#2E2B28] text-center py-8`}>Testimonial</h1>
      <p className={`${openSans.className} text-lg font-light text-[#2E2B28CC] text-center`}>
        Trusted by the World&apos;s Finest Designers
      </p>

      <div className='flex flex-col md:flex-row gap-5 max-w-6xl mx-auto mt-5 items-center'>
        {testimonials.map((item, index) => (
          <div
            key={index}
            className='w-full md:w-1/2 border border-[#D6C5A066] rounded-xl mb-15 transition-transform duration-300 hover:scale-[1.02]'
          >
            <Image
              src={item.src}
              alt="testimonial"
              width={100}
              height={100}
              className='rounded-full ml-10 mt-10 w-24 h-24 object-cover'
            />
            <p className={`p-10 ${mulish.className} text-[#2E2B2880]`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
