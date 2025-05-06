'use client'
import React, { useRef } from 'react'
import CoreFeatures from '@/components/CoreFeatures'
import TeamMember from '@/components/TeamMember'
import HeroSection from '@/components/HeroSection'
import { Button } from '@/components/ui/button'

function page() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div className="bg-gray-50 gap-3 py-3 px-6 md:px-10 flex items-center w-full sticky top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost p-0">
                    <img src="/logo/streamsage-logo.png" width={40} alt="Logo" />
                </a>
            </div>
            <div className="flex items-center gap-15 flex-1 justify-end">
                <ul className="flex gap-15">
                    <li><Button onClick={() => scrollToSection(section1Ref)} className="text-gray-500 hover:bg-gray-400 hover:text-gray-700 bg-transparent">About</Button></li>
                    <li><Button onClick={() => scrollToSection(section2Ref)} className="text-gray-500 hover:bg-gray-400 hover:text-gray-700 bg-transparent">Feature</Button></li>
                    <li><Button onClick={() => scrollToSection(section3Ref)} className="text-gray-500 hover:bg-gray-400 hover:text-gray-700 bg-transparent">Team</Button></li>
                </ul>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700">
                    Get Started
                </button>
            </div>
        </div>
      <HeroSection ref={section1Ref} />
      <CoreFeatures ref={section2Ref} />
      <TeamMember ref={section3Ref} />
    </div>
  )
}

export default page
