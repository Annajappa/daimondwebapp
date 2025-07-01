"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../11zon_zip/Diano.svg";

const Navbar = () => {
  const Router = useRouter();
  const pathname = usePathname();

  const NavBarItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed bg-white shadow-md left-0 right-0 top-0 z-50">
      <div className="max-w-6xl mx-auto flex gap-60 p-4 justify-around">
        {/* Logo Section */}
        <Image
          src={Logo}
          alt="Diano Logo"
          width={100}
          height={100}
          className="w-15 lg:w-20 h-auto cursor-pointer"
          onClick={() => Router.push("/")}
        />

        {/* Middle Section */}
        <ul className="hidden lg:flex gap-[40px] text-sm">
          {NavBarItems.map((item) => (
            <li
              key={item.path}
              onClick={() => Router.push(item.path)}
              className={`py-3 relative cursor-pointer ${
                pathname === item.path
                  ? "text-[#D6C5A0]"
                  : "text-[#2E2B28] hover:text-[#D6C5A0]"
              }`}
              style={{ fontWeight: 300 }}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex gap-3 py-2">
          <button className="rounded-sm h-[30px] px-3 item-center text-sm bg-[#D6C5A0] text-white cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300">
            Request Private Access
          </button>
        </div>

        {/* Hamburger Logo */}
        <div className="lg:hidden flex gap-4">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            <HiOutlineMenu size={30} />
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white z-50 transform transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-base">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <HiOutlineX size={30} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col ml-5 gap-3 text-lg">
          {NavBarItems.map((item) => (
            <li
              key={item.path}
              onClick={() => {
                Router.push(item.path);
                setMenuOpen(false);
              }}
              className={`py-3 relative cursor-pointer ${
                pathname === item.path
                  ? "text-[#D6C5A0]"
                  : "text-black hover:text-[#D6C5A0]"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
