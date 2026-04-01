import React from 'react'
import LuxuryHero from '../../components/EGC-Comp/LuxuryHero'
import PrivateGroupSection from "../../components/EGC-Comp/PrivateGroupSection"
import FavouriteTrips from '../../components/EGC-Comp/FavouriteTrips'
import WhyChooseEGC from '../../components/EGC-Comp/WhyChooseEGC'
import StoriesSection from '../../components/EGC-Comp/StoriesSection'
import Testimonials from '../../components/EGC-Comp/Testimonials'
import PlanJourney from '../../components/EGC-Comp/PlanJourney'

const Luxury = () => {
  return (
    <>
    {<LuxuryHero/>}    
    {<PrivateGroupSection/>}
    {<FavouriteTrips/>}    
    {<WhyChooseEGC/>}
    {<StoriesSection/>}
    {<Testimonials/>}
    {<PlanJourney/>}
    </>
  )
}

export default Luxury