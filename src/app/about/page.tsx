"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";

import { aboutPageInfo } from '@/data/info_AboutPage.json';
const page = ()=> {
    const data = aboutPageInfo;
    return(
    <div className="w-screen absolute  h-full mt-32 ">
        <h1 className="font-bold text-3xl p-4 mb-6 text-center relative">About Us</h1>
        <Boxes/>
        <div className="flex flex-col items-center relative z-20">
        {data.map(info => (
            <div key={info.id} className="md:w-3/4 mb-10">
                <h1 className="font-bold text-3xl py-4 px-8 text-center mb-4">{info.heading}</h1>
                <p className=" px-4">{info.description}</p>
                </div> 
            ))}  
           
        </div>
    </div>
    )
}
export default page;