'use client'
 
//import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonialsData = [
  {
    quote: "I’ve had to learn to fight all my life—got to learn to keep smiling. If you smile, things will work out",
    name: "Serena Williams",
    title: "Tennis Legend and Fitness Enthusiast"
  },
  {
    quote: "Success isn’t always about ‘greatness.’ It’s about consistency. Consistent hard work leads to success. Greatness will come",
    name: "Dwayne The Rock Johnson",
    title: "Actor, Former Professional Wrestler, and Fitness Icon"
  },
  {
    quote: "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.",
    name: "Arnold Schwarzenegger",
    title: "Bodybuilding Legend and Former Governor of California"
  },
  {
  quote: "The body is an amazing machine. If you eat the right things, your body will perform incredibly well!",
  name: "Misty Copeland",
  title: "Ballet Dancer and Fitness Advocate"
  },
  {
    quote: "Don’t think about the start of the race; think about the ending.",
    name: "Usain Bolt",
    title: "World’s Fastest Man and Sprinter Extraordinaire"
  },
  {
    quote: "The body achieves what the mind believes.",
    name: "Chris Hemsworth",
    title: "Actor (Thor!) and Fitness Enthusiast"
  },
];

function Testimonials() {
  return (
    <div className="  dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] h-[40rem] w-full flex relative flex-col items-center justify-center overflow-hidden">
      <h2
      className="text-3xl font-bold mt-14 text-center z-10 mb-8 text-gray-200"
      >See Testimonials: Strong Physique and Fitness</h2>
      <div>
        <div className=" flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative px:4 sm:px-6 lg:px-8 overflow-hidden">
          <InfiniteMovingCards
            items={testimonialsData}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
