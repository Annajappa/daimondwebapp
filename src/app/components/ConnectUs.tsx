"use client";

import Image from "next/image";
import React from "react";
import RingImage from "../assects/hand_ring-1.jpg";
import StarIcon from "../assects/star.png";

const ContactForm = () => {
  return (
    <section className="relative w-full bg-[#ffffff] pt-20 pb-8 px-4 md:px-24">

      {/* Decorative Stars */}
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-10 right-50" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute bottom-20 right-10" />

      {/* Section Title */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-serif font-semibold text-[#2E2B28]">
          Connect with DIANO
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Image Side */}
        <div className="w-full h-full">
          <div className="relative w-full h-full min-h-[420px]">
            <Image
              src={RingImage}
              alt="Ring on hand"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>

        {/* Form Side */}
        <div className="flex flex-col justify-center h-full">
          <div className="w-full h-full flex flex-col justify-center min-h-[420px]">
            <form className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#333] font-serif">First Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="mt-1 block w-full border-b border-gray-300 outline-none py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] font-serif">Last Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="mt-1 block w-full border-b border-gray-300 outline-none py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] font-serif">Email*</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full border-b border-gray-300 outline-none py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] font-serif">Phone*</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full border-b border-gray-300 outline-none py-1 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333] font-serif">Message*</label>
                <textarea
                  rows={3}
                  placeholder="Enter your message here..."
                  className="mt-1 block w-full border-b border-gray-300 outline-none py-1 text-sm resize-none"
                ></textarea>
              </div>

              <div className="flex items-start justify-between flex-wrap gap-y-4 mt-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 border-gray-300" />
                  <label className="text-sm text-gray-600">
                    I hereby agree to{" "}
                    <a href="#" className="underline text-gray-700">
                      Terms & Conditions
                    </a>{" "}
                    of DIANO
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2 border border-[#2E2B28] text-sm font-serif text-[#2E2B28] hover:bg-[#2E2B28] hover:text-white transition"
                >
                  SUBMIT NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
