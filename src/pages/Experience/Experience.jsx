import React from 'react'
import Experiencehero from "../../components/ExperienceComp/Experience_hero"
import TravelerSection from '../../components/ExperienceComp/TravelerSection'
import EGCRecommendations from '../../components/ExperienceComp/EGCRecommendations'
import SeasonalInspiration from '../../components/ExperienceComp/SeasonalInspiration'
import EliteDifference from '../../components/ExperienceComp/EliteDifference'
import EliteStories from '../../components/ExperienceComp/EliteStories'
import EliteJourney from '../../components/ExperienceComp/EliteJourney'
import BrandStrip from '../../components/BrandStrip/BrandStrip'

const Experience = () => {
  return (
    <>
    {<Experiencehero/>}
    {<TravelerSection/>}
    {<EGCRecommendations/>}
    {<SeasonalInspiration/>}
    {<EliteDifference/>}
    {<EliteStories/>}
    {<EliteJourney/>}
    {<BrandStrip/>}
    </>
  )
}

export default Experience