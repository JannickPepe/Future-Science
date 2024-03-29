import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[99] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] z-[99]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Future Science
          </span>
        </a>

        <div className="max-w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="gap-8 flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="font-semibold cursor-pointer hover:text-violet-300">
              About
            </a>
            <a href="#tools" className="font-semibold cursor-pointer hover:text-violet-300">
              Tools
            </a>
            <a href="#projects" className="font-semibold cursor-pointer hover:text-violet-300">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 ">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="hidden md:block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
