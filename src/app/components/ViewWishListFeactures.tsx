"use client";
import Image from "next/image";
import React from "react";
import { FiAward, FiShield, FiTruck, FiEye } from "react-icons/fi";
import StarIcon from "../assects/star.png";

const wishlistData = [
  {
    icon: <FiAward size={28} className="text-[#D6C5A0]" />,
    title: "WISHLIST",
    desc: "Save your favorite diamonds and create personalized collections",
  },
  {
    icon: <FiShield size={28} className="text-[#D6C5A0]" />,
    title: "WISHLIST",
    desc: "Save your favorite diamonds and create personalized collections",
  },
  {
    icon: <FiTruck size={28} className="text-[#D6C5A0]" />,
    title: "WISHLIST",
    desc: "Save your favorite diamonds and create personalized collections",
  },
  {
    icon: <FiEye size={28} className="text-[#D6C5A0]" />,
    title: "WISHLIST",
    desc: "Save your favorite diamonds and create personalized collections",
  },
];

const ViewWishlistFeatures = () => {
  return (
    <section className="w-full bg-white px-4 md:px-20 py-16 relative">
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-7 right-30" />
      <Image src={StarIcon} alt="star" width={22} height={22} className="absolute top-25 left-70" />

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        {wishlistData.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center px-6 py-6 w-full relative
              ${i !== wishlistData.length - 1 ? 
                "border-b border-[#D6C5A0]/30 md:border-0 md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:transform md:after:-translate-y-1/2 md:after:right-0 md:after:h-20 md:after:border-r md:after:border-[#D6C5A0]/30 md:after:w-px"
                : ""
              }`}
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-sm font-semibold text-[#2E2B28] mb-4">{item.title}</h3>
            <p className="text-sm text-[#3A3836] leading-snug max-w-[200px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewWishlistFeatures;
