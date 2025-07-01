"use client";

import Image from "next/image";
import React from "react";
import StarIcon from "../assects/star.png";
import RingImage from "../assects/red-hand-ring.png"; // Ensure this path is correct

const DianoBanner = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-16 bg-[#FAF8F2] font-serif text-[#2E2B28]">
  <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-1 right-40" />
  <Image src={StarIcon} alt="star" width={25} height={25} className="absolute bottom-20 left-150" />
  <div className="w-full flex flex-col md:flex-row items-center">
    {/* Left - Text Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 md:px-0 min-h-[300px]">
      <div>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 leading-snug">
          Experience the DIANO<br className="hidden md:block" /> Difference
        </h2>
        <p className="text-base text-[#3A3836] mb-8 leading-relaxed md:pl-6 md:pr-6">
          Step into a world of rare gems and refined craftsmanship. Schedule your
          private session or explore our curated collection.
        </p>
        <button className="px-6 py-2 border border-[#2E2B28] text-sm hover:bg-[#2E2B28] hover:text-white transition">
          Explore the Collection
        </button>
      </div>
    </div>

    {/* Right - Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="w-full aspect-[4/2.5] relative overflow-hidden">
        <Image
          src={RingImage}
          alt="Red gemstone ring"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default DianoBanner;
