"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

 
const fitnessContent = [
    {
      title: 'Sweat & Shine',
      description: 'Break a sweat, feel the burn, and emerge stronger. Our high-energy workouts transform you from within.'
    },
    {
        title:'Core Fusion',
        description:' Ignite your core strength. This class blends Pilates, yoga, and functional movements for a sculpted midsection.'
    },
    {
        title:'Iron Will',
        description:'Lift, press, and conquer. Iron Will is where determination meets dumbbells. Build muscle, resilience, and confidence.'
    },
    {
        title:'Rise & Grind',
        description: 'Break a sweat, feel the burn, and emerge stronger.'
    },
    {
        title:'Mindful Movement',
        description:'Every step matters. Mindful Movement encourages mindful walking, stretching, and body awareness.'
    },
  ];


const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={fitnessContent} />
    </div>
  )
}

export default WhyChooseUs
