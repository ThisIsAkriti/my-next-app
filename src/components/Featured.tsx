'use client'
import Link from 'next/link'
import React from 'react'
import courseData from '../data/info_all.json';
import { BackgroundGradient } from './ui/background-gradient';
interface Data{
  id: number,
  title: string,
  description: string
  price: number,
  instructor: string,
  rating: number,
  isFeatured: boolean
}

function Featured() {
    const featured = courseData.data.filter((data:Data) => data.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
            <h2 className="font-semibold text-teal-700 tracking-wide ">FEATURED COURSES</h2>

            <p className="mt-2 text-3xl leading-8 text-white sm:text-4xl font-extrabold  ">Learn with the Best</p>
        </div>
      </div>

      <div className='mt-10 flex justify-center'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto text-center '>
          {featured.map((data:Data) =>(
          <BackgroundGradient key={data.id} className='flex flex-col rounded-[22px] dark:bg-zinc-900 overflow-hidden h-full max-w-sm ' >
            <div className=' px-4 py-6 space-y-3'> 
              <h1 className='text-lg sm:text-xl text-black mb-2 dark:text-neutral-200'>{data.title}</h1>
              <p className='text-sm text-neutral-600  dark:text-neutral-400 flex-grow'>{data.description}</p>
              <p>${data.price}</p>
              <p>{data.instructor}</p>
              <p>{data.rating}</p>
            </div>
          </BackgroundGradient>
          
          ))}
        </div>
      </div>
      
      <div className='text-center mt-20'>
        <Link href={"/data"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
        View All Courses</Link>
      </div>
    </div>
  )
}

export default Featured
