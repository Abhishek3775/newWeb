import React from 'react'
import LuxuryHero from '../../components/NewDestination/LuxuryHero'
import EditorsSelection from '../../components/NewDestination/EditorsSelection'
import TrendingSection from '../../components/NewDestination/TrendingSection'
import JourneyTypes from '../../components/NewDestination/JourneyTypes'
import JournalVoicesSection from '../../components/NewDestination/JournalVoicesSection'
import BespokeEnquiry from '../../components/NewDestination/BespokeEnquiry'
import BrandStrip from '../../components/BrandStrip/BrandStrip'

const NewDestionation = () => {
  return (
    <>
    {<LuxuryHero/>}
    {<EditorsSelection/>}
    {<TrendingSection/>}
    {<JourneyTypes/>}
    {<JournalVoicesSection/>}
    {<BespokeEnquiry/>}
    {<BrandStrip/>}
    </>
  )
}

export default NewDestionation