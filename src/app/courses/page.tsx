'use client'
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { dataCourse } from "@/data/info_course.json"

interface Data{
    id : number,
    title : string,
    description : string,
    instructor : string,
    duration : string,
    price : number,
}
function page() {
  return (
    <div className="mt-40">
       <BentoGrid className="max-w-4xl mx-auto">
            {dataCourse.map((course : Data ) => (
            <BentoGridItem
            key={course.id}
            title = {course.title}
            description = {course.description}
            instructor = {course.instructor}
            duration = {course.duration}
            price = {course.price}
            />
            ))}
        </BentoGrid>
    </div>
  )
}
export const Skeleton = () => (
  <div className=" flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  dark:from-neutral-900 dark:to-neutral-800 bg-neutral-900"></div>
);

export default page
