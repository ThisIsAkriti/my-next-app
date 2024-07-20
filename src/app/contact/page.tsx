import Image from 'next/image'
import React from 'react'

const page = () => {
 
  return (
    <div className=' absolute pt-32 bg-black text-white'>
      <div className=' absolute w-screen'>
      <Image 
      height="1000"
      width="1000"
      className="h-full w-full object-cover sm:h-[400px]"
      src="https://www.becomeio.com/wp-content/uploads/2021/12/muscular-man-and-woman-showing-muscles.jpeg" alt="contactUspage image" />
      </div>
      <div className=' font-bold relative text-center w-screen h-60 sm:h-[400px] md:h-[450px] flex flex-col justify-center items-center space-y-14 md:mb-4 '>
        <h1 className='md:text-5xl text-3xl text-gray-300'>
          NO PAIN NO GAIN
        </h1>
        
      </div>
      <div className='flex items-center justify-center flex-col space-y-12 mb-40 text-gray-300'>
        <h2 className='text-4xl font-semibold w-full text-center pt-14' >
          Contact Us
        </h2>
        <form className='md:ml-10 md:text-xl text-sm space-x-2'>
          <input className='md:p-4 p-2 rounded-md outline-none text-black bg-gray-400 shadow-gray-700 shadow-md border border-r-0' type="text" placeholder='Input text'/>
          <button className='border-gray-400 shadow-gray-700 shadow-md border active:bg-gray-700 md:p-4 p-2 rounded-md text-gray-300' >Send</button>
        </form>
        <div className='font-bold text-4xl text-gray-300'>
          Thanks For Visiting !
        </div>
        
      </div>
    </div>
  )
}

export default page
