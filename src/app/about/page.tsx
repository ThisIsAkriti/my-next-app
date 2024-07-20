"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import aboutPageInfo from '@/data/info_AboutPage.json';
import { cn } from "@/utils/cn";
import useIsSmallScreen from "@/components/windowSize";

const Aboutpage = ()=> {
    const isSmallScreen = useIsSmallScreen();
    return(
    <div className="w-full absolute bg-black py-32 ">
        <h1 className="font-bold md:text-5xl text-3xl p-4 mb-6 text-center relative text-white ">About Us</h1>
        {!isSmallScreen? <Boxes/> : ""}
        <div className={cn("flex flex-col items-center relative z-20 md:mx-40 mx-6 py-10  border border-gray-400 rounded md bg-black")}>
        
        {aboutPageInfo.data.map(info => (
            <div key={info.id} className="md:w-3/4 mb-10">
                <h1 className="font-semibold text-3xl py-4 px-8 text-center mb-4 text-gray-200">{info.heading}</h1>
                <p className=" px-4 text-gray-300">{info.description}</p>
            </div> 
            ))}  
        </div>
    </div>
    )
}
export default Aboutpage;