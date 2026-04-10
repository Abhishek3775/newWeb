import React from 'react'
import HeroSouthAfrica from '../../components/SouthAfricaHome/SouthAfricaHome'
import WhySouthAfrica from '../../components/SouthAfricaComponents/WhySouthAfrica'
import SignatureJourneys from '../../components/SouthAfricaComponents/SignatureJourneys'
import SouthAfricaSlider from '../../components/SouthAfricaComponents/SouthAfricaSlider'
import SouthAfricaShowcase from '../../components/SouthAfricaComponents/SouthAfricaShowcase'
import EGCDifference from '../../components/SouthAfricaComponents/EGCDifference'
import WhenToVisit from '../../components/SouthAfricaComponents/WhenToVisit2.jsx'
// import WhenToVisit from '../../components/SouthAfricaComponents/WhenToVisit'
import EssentialInfo from '../../components/SouthAfricaComponents/EssentialInfo'
import StoriesGuides from '../../components/SouthAfricaComponents/StoriesGuides'
import JourneySection from '../../components/SouthAfricaComponents/JourneySection'
import BrandStrip from '../../components/BrandStrip/BrandStrip'
import EGCTestimonial from '../../components/SouthAfricaComponents/EGCTestimonial.jsx'

function SouthAfrica() {
  return (
    <>
    {<HeroSouthAfrica/>}
    {<WhySouthAfrica/>}
    {<WhenToVisit/>}
    {<SignatureJourneys/>}
    {<SouthAfricaSlider/>}
    {<SouthAfricaShowcase/>}
    {<EGCDifference/>}
    {<EGCTestimonial/>}
    {/* {<WhenToVisit/>} */}
    {<EssentialInfo/>}
    {<StoriesGuides/>}
    {<JourneySection/>}
    {<BrandStrip/>}
    
    </>
  )
}

export default SouthAfrica