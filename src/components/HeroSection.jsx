import React from 'react'
import { Poppins } from 'next/font/google'

function HeroSection() {
    return (
        <div className='flex gap-20 '>

            <div>
            <h1 className='pl-40 pt-10 font-black text-7xl'>
                Stream Smarter.
            </h1>
            <h1 className='pl-40 pt-5 font-black text-7xl'>
                Debug Faster.
            </h1>
            <h1 className='pl-40 pt-5 font-black text-7xl'>
                Learn Better.
            </h1>

            <p className='mt-2 leading-9 pl-40 pt-5 text-lg text-gray-400 font-medium'>
                Welcome to StreamSage, a lightweight video streaming app built for<br /> creators, learners, and innovators. Upload, watch, and take timestamped <br />notes—all in one streamlined platform.

            </p>

                
            </div>
           

            <div className= "place-content-center">
                <img className= "pl-30 pt-10 rounded h-110" src="assets/herosection/gege.png" />
            </div>


            </div>

            )
}

            export default HeroSection