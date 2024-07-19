"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/info_all.json"
import Image from "next/image";
function page(){
  return (
    <div>
      <div>
        <h1 className="text-4xl sm:text-5xl text-gray-300 font-semibold mt-36 text-center">Best Instructors ({ courseData.data.length})</h1>
        <div className="flex flex-wrap justify-center space-x-16">
          {courseData.data.map(course => (
         
            <CardContainer  key={course.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                  {course.instructor}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                  {course.specialization}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                  {course.details}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          

        ))}
        </div>
        
      </div>
    </div>
  )
}

export default page


