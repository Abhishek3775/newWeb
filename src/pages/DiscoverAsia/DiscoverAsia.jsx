import React from 'react'
import DiscoverHome from '../../components/DiscoverAsia/DiscoverHome'
import CuratedDestinations from '../../components/DiscoverAsia/CuratedDestinations'
import SignatureAsiaJourneys from '../../components/DiscoverAsia/SignatureAsiaJourneys'
import TopExperiences from '../../components/DiscoverAsia/TopExperiences'
import EGCDifferenceSection from '../../components/DiscoverAsia/EGCDifferenceSection'
import DiscoverJourneySection from '../../components/DiscoverAsia/DiscoverJourney'

const DiscoverAsia = () => {
  return (
        <>
        {<DiscoverHome/>}
        {<CuratedDestinations/>}
        {<SignatureAsiaJourneys/>}
        {<TopExperiences/>}
        {<EGCDifferenceSection/>}
        {<DiscoverJourneySection/>}
        </>
  )
}

export default DiscoverAsia