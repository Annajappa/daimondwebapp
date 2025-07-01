"use client";

import Image from "next/image";
import React from "react";
import StarIcon from "../assects/star.png";
import Img1 from "../assects/diamong-ring-2.jpg";
import Img2 from "../assects/women-with-bangles.jpg";
import Img3 from "../assects/design-ring.jpg";
import Img4 from "../assects/women-multiple-rings.jpg";
import Img5 from "../assects/rambus-ring.jpg";

const imageGallery = [Img1, Img2, Img3, Img4, Img5];

const JewelryShowcase = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto bg-white pt-16 px-0">
      {/* Star Decoration */}
      <Image
        src={StarIcon}
        alt="star"
        width={20}
        height={20}
        className="absolute top-10 left-[22%] z-10"
      />

      {/* Full-Width Image Grid with No Gaps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full">
        {imageGallery.map((img, idx) => (
          <div key={idx} className="relative aspect-[3/4] w-full h-full">
            <Image
              src={img}
              alt={`jewelry-${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default JewelryShowcase;
