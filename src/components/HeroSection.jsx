import React from 'react'
import { Poppins } from 'next/font/google'

function HeroSection({ ref }) {
    return (
        <section className='py-12 md:py-20 mb-8 md:mb-16 px-4' ref={ref}>
            <div className='container mx-auto max-w-7xl'>
                <div className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20'>
                    <div className='lg:flex-1'>
                        <h1 className='font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                            Stream Smarter.
                        </h1>
                        <h1 className='pt-2 md:pt-5 font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                            Debug Faster.
                        </h1>
                        <h1 className='pt-2 md:pt-5 font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                            Learn Better.
                        </h1>

                        <p className='mt-4 md:mt-6 leading-relaxed md:leading-9 text-base md:text-lg text-gray-400 font-medium'>
                            Welcome to StreamSage, a lightweight video streaming app built for
                            creators, learners, and innovators. Upload, watch, and take timestamped 
                            notes—all in one streamlined platform.
                        </p>
                        <a href="https://stream-sage-vebs.vercel.app" className='mt-6 block text-center md:mt-8 bg-indigo-600 text-white px-5 py-3 rounded-full font-medium hover:bg-indigo-700 transition duration-300'>Watch Now</a>
                    </div>
                
                    <div className="lg:flex-1 flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
                        <img 
                            className="rounded-lg max-h-[400px] lg:max-h-[500px] w-auto object-cover shadow-lg" 
                            src="assets/herosection/gege.png"
                            alt="StreamSage platform preview" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection