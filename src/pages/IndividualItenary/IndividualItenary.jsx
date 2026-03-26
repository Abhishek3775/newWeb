import React from 'react'
import IndHero from '../../components/IndividualItenary/IndHero'
import JourneyOverview from '../../components/IndividualItenary/JourneyOverview'
import WhatsIncluded from '../../components/IndividualItenary/WhatsIncluded'
import JourneyItinerary from '../../components/IndividualItenary/JourneyItinerary'
import YourVessel from '../../components/IndividualItenary/YourVessel'
import VesselExperience from '../../components/IndividualItenary/VesselExperience'
import JourneyDetails from '../../components/IndividualItenary/JourneyDetails'
import JourneyCTA from '../../components/IndividualItenary/JourneyCTA'
import BrandStrip from '../../components/BrandStrip/BrandStrip'

function IndividualItenary() {
  return (
  <>
  {<IndHero/>}
  {<JourneyOverview/>}
  {<WhatsIncluded/>}
  {<JourneyItinerary/>}
  {<YourVessel/>}
  {<VesselExperience/>}
  {<JourneyDetails/>}
  {<JourneyCTA/>}
  {<BrandStrip/>}
  </>
  )
}

export default IndividualItenary