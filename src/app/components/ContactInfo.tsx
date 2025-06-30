"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import RingImage from "../assects/rambus-ring.jpg"; // Replace with actual path
import React from "react";
import StarIcon from "../assects/star.png";

const ContactInfo = () => {
  return (
    <section className=" relative w-full bg-white px-4 md:px-24 py-8">
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-5 left-150" />
            <Image src={StarIcon} alt="star" width={25} height={25} className="absolute bottom-30 left-10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 min-h-[520px]">
        {/* Left Content */}
        <div className="flex-1 h-full flex flex-col justify-center">
          <h2 className="text-3xl font-serif font-semibold text-[#2E2B28] mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 font-serif text-sm mb-8 max-w-md">
            Visit our private studio or schedule a digital consultation. Our
            specialists are here to assist with gemstone selection,
            customization, and personal styling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-[#333] mb-1">Location</h4>
              <p className="text-sm text-gray-600 font-serif">
                123, [Street Name], [City], [State],<br />
                [PIN Code]
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#333] mb-1">Studio Hours</h4>
              <p className="text-sm text-gray-600 font-serif">
                Mon–Sat: 10AM – 7PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <hr className="my-4 border-gray-300 w-full max-w-md" />

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-4">
            <span className="text-sm font-serif text-[#2E2B28]">Follow Us</span>
            <div className="flex space-x-3 text-[#999999]">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#999999] hover:bg-gray-100 transition"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 h-full">
          <div className="w-full h-auto max-h-[420px] overflow-hidden rounded shadow-sm">
  <Image
    src={RingImage}
    alt="Ring"
    width={600}
    height={420}
    className="w-full h-auto object-cover rounded"
    priority
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
