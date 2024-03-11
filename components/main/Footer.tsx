'use client';

import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxFace, RxFramerLogo, } from "react-icons/rx";
import { TbBrandWebflow } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { Fragment, useState, useEffect } from "react";
import { SiPosthog } from "react-icons/si";
import { MdOutlineAnimation } from "react-icons/md";

const Footer = () => {

    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);
    
    
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Programs</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <MdOutlineAnimation />
                            <span className="text-[15px] ml-[6px]">Rive</span>    
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <SiPosthog />
                            <span className="text-[15px] ml-[6px]">PostHog</span>    
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <TbBrandWebflow />
                            <span className="text-[15px] ml-[6px]">WebFlow</span>    
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxFramerLogo />
                            <span className="text-[15px] ml-[6px]">Framer</span>    
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Instagram</span>    
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>    
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>    
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxFace />
                            <span className="text-[15px] ml-[6px]">jannickpepe@live.dk</span>    
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Tools</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Image AI generator</span>    
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Icon AI generator</span>    
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Text AI generator</span>    
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Shadow AI generator</span>    
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                <Fragment>
                    <div className=" ">
                    <p>{`© ${year}. All Rights Reserved.`} <span className="underline decoration-white">Jannick Pedersen</span></p>
                    </div>
                </Fragment>
                </div>
            </div>
        </div>
    );

};

export default Footer;