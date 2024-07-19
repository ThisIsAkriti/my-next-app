import Image from 'next/image'
import React from 'react'

const page = () => {
 
  return (
    <div className=' absolute mt-32'>
      <div className=' absolute w-screen'>
      <Image 
      height="1000"
      width="1000"
      className="h-full w-full object-cover sm:h-[400px]"
      src="https://www.becomeio.com/wp-content/uploads/2021/12/muscular-man-and-woman-showing-muscles.jpeg" alt="contactUspage image" />
      </div>
      <div className=' font-bold relative text-center w-screen h-80 sm:h-[400px] md:h-[450px] flex flex-col justify-center items-center space-y-14  mb-4 '>
        <h1 className='text-5xl text-gray-400'>
          NO PAIN NO GAIN
        </h1>
        
      </div>
      <div className='flex items-center justify-center flex-col space-y-12 mb-40'>
      <h2 className='text-4xl font-semibold border-t-2 dark:border-gray-300 w-full text-center pt-14' >
          Contact Us
        </h2>
        <form className='ml-10 text-xl'>
          <input className='p-4 rounded-md outline-none' type="text" placeholder='Input text'/>
          <button className='border-black border active:bg-gray-700 p-4 rounded-md' >Send</button>
        </form>
        <div className='font-bold text-4xl'>
          Thanks For Visiting !
        </div>
        
      </div>
    </div>
  )
}

export default page
