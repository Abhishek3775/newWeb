import React from 'react'
import JourneyOverview from '../../components/Japan/JourneyOverview'
import ImperialHero from '../../components/Japan/ImperialHero'
import DayByDayItinerary from '../../components/Japan/DayByDayItinerary'
import Accommodation from '../../components/Japan/Accommodation'
import Faq from '../../components/Japan/Faq'
import RelatedJourney from '../../components/Japan/RelatedJourney'
import JourneySection from '../../components/Japan/JourenySection'
import Elitejourney from '../../components/Japan/Elitejourney'

const ImperialOdyssey = () => {
  return (
    <>
    {<ImperialHero/>}
    {<JourneyOverview/>}
    {<DayByDayItinerary/>}
    {<Accommodation/>}
    {<Faq/>}
    {<RelatedJourney/>}
    {<Elitejourney/>}
    {/* {<JourneySection/>} */}
    </>
  )
}

export default ImperialOdyssey