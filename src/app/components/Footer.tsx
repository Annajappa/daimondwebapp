'use client'

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Mulish,Playfair_Display,Inter } from "next/font/google";
import Logo from "../11zon_zip/Diano1.svg";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const QuickLinks_items = [
  "Sell Jewellery",
  "Buy Jewellery",
  "About Us",
  "FAQ",
  "Contact Us",
];

const socialLinks = [
    { icon: <FaFacebookF /> },
    { icon: <FaInstagram /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaTwitter /> },
  ];

// Main Footer Component
const Footer = ({ value }: { value: string }) => {
  return (
    <div className={`w-full relative z-0 max-w-7xl mx-auto`}>
      <footer className={`bg-[#2E2B28] text-black p-10 ${value === "contact" ? "mt-0" : "mt-12"}`}>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:ml-30">
          <div className="mb-4 lg:mb-0">
            <Image
              className="w-35 h-auto mb-2"
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Quick Links Section */}
          <div>
            <h5 className={`font-bold mb-3 text-[#FFFFFF] ${playFair.className}`} style={{ fontWeight: 600 }}>Quick Links</h5>
            <ul>
              {QuickLinks_items.map((section, index) => (
                <li
                  key={index}
                  className={`text-sm text-[#FFFFFF] hover:text-[#D6C5A0] cursor-pointer mb-2 ${mulish.className}`}
                  style={{ fontWeight: 400 }}
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us section */}
          <div>
            <h5 className={`font-bold mb-3 text-[#FFFFFF] ${playFair.className}`}>Follow Us</h5>
            <div className="flex gap-2">
              {socialLinks.map((item, index) => (
                <div key={index} className={`hover:text-[#D6C5A0] text-[#FFFFFF] cursor-pointer`}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full place-self-center mt-10 border-t border-gray-700 pt-4" />

        {/* Last line of the Footer Component */}
        <div className={`relative z-10 container mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-sm text-[#FFFFFF] ${inter.className}`}>
          <p>&copy; {new Date().getFullYear()} Motion Creative Cloud Inc.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-[#D6C5A0] ml-5">
              Privacy
            </a>
            <a href="/terms" className="hover:text-[#D6C5A0] ml-2">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;