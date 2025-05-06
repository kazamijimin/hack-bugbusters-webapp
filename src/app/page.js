import React from 'react'
import CoreFeatures from '@/components/CoreFeatures'
import TeamMember from '@/components/TeamMember'
import HeroSection from '@/components/HeroSection'

function page() {
  return (
    <div>
      <HeroSection/>
      <CoreFeatures/>
      <TeamMember/>
    </div>
  )
}

export default page
