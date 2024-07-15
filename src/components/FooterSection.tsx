import React from 'react'

function FooterSection() {
  return (
    <div className='bg-black text-gray-300 py-12 flex flex-col'>

        <div className=' max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-32 gap-y-10 text-center sm:text-start'>
            <div>
                <h1 className='text-lg font-bold text-white mb-4'>Company</h1>
                <p className=' text-xs py-1'>About Us</p>
                <p className=' text-xs py-1'>Our Services</p>
                <p className=' text-xs py-1'>Privary Policy</p>
                <p className=' text-xs py-1'>Affiliate Program</p>
            </div>
            <div>
                <h1 className='text-lg font-bold text-white mb-4'>Get Help</h1>
                <p className=' text-xs py-1'>FAQ</p>
                <p className=' text-xs py-1'>Shipping</p>
                <p className=' text-xs py-1'>Returns</p>
                <p className=' text-xs py-1'>Order Status</p>
                <p className=' text-xs py-1'>Payment Options</p>
            </div>
            <div>
                <h1 className='text-lg font-bold text-white mb-4'>Online Shop</h1>
                <p className=' text-xs py-1'>Nutrition</p>
                <p className=' text-xs py-1'>Dumbels</p>
                <p className=' text-xs py-1'>Shoes</p>
                <p className=' text-xs py-1'>Dress</p>
            </div>
            <div>
                <h1 className='text-lg font-bold text-white mb-4'>Follow us</h1>
                <p className=' text-xs py-1'>Facebook</p>
                <p className=' text-xs py-1'>Twitter</p>
                <p className=' text-xs py-1'>Instagram</p>
                <p className=' text-xs py-1'>LinkdIn</p>
            </div>
        </div>
        <p className="text-center text-xs mt-8" >@ 2024 Fitness Freak School. All rights reserved.</p>

    </div>
  )
}

export default FooterSection
