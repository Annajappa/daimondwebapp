"use client";

import Image from "next/image";
import React from "react";
import RingImage from "../assects/white-ring.png"; // Replace with your actual image path
import StarIcon from "../assects/star.png";

const FAQIntroSection = () => {
  return (
    <section className="w-full px-4 md:px-20 py-20 relative overflow-hidden mt-12 md:mt-12">
      {/* Decorative Star */}
      <Image
        src={StarIcon}
        alt="star"
        width={20}
        height={20}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden md:block"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2
  className="text-[62px] leading-tight font-normal"
  style={{
    fontFamily: "Playfair Display",
    color: "rgba(46, 43, 40, 0.9)",
    fontSize : "62px"
  }}
>
  Frequently asked<br />
  questions
</h2>

        <p
  className="mt-6 text-[20px] font-light"
  style={{
    fontFamily: "Inter",
    fontWeight: 300,
    color: "rgba(46, 43, 40, 0.8)",
    lineHeight: "1.2", // tighter line height
  }}
>
  Discover everything you need to know about DIANO’s gemstones,
  custom designs, certifications, and services. We’re here to help
  make your jewelry experience seamless and special.
</p>


        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-square md:aspect-auto md:min-h-[400px] rounded-sm overflow-hidden">
  <Image
    src={RingImage}
    alt="Ring on hand"
    fill
    className="object-cover"
    priority
  />
</div>

      </div>
    </section>
  );
};

export default FAQIntroSection;
