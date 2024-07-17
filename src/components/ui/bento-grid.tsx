import { Skeleton } from "@/app/courses/page";
import { cn } from "@/utils/cn";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  instructor,
  duration,
  price
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  instructor?: React.ReactNode;
  duration?: React.ReactNode;
  price?:string | React.ReactNode;
  
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col",
        className
      )}
      > <Skeleton/>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200  mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-4">
          {description}
        </div>
        <div className="font-sans font-semibold text-neutral-600 dark:text-neutral-300 text-sm">
         By {instructor}
        </div>
        <div className="font-sans font-semibold text-neutral-600 dark:text-neutral-300 text-sm">
         Duration: {duration}
        </div>
        <div className="font-sans font-semibold text-neutral-600 dark:text-neutral-300  text-sm">
         Price: 
         ${price}
        </div>
       
      </div>
    </div>
  );
};
