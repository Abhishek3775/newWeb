import React from 'react'
import JourneyOverview from '../../components/Japan/JourneyOverview'
import ImperialHero from '../../components/Japan/ImperialHero'
import DayByDayItinerary from '../../components/Japan/DayByDayItinerary'
import Accommodation from '../../components/Japan/Accommodation'
import Faq from '../../components/Japan/Faq'
import RelatedJourney from '../../components/Japan/RelatedJourney'
import JourneySection from '../../components/Japan/JourenySection'

const ImperialOdyssey = () => {
  return (
    <>
    {<ImperialHero/>}
    {<JourneyOverview/>}
    {<DayByDayItinerary/>}
    {<Accommodation/>}
    {<Faq/>}
    {<RelatedJourney/>}
    {/* {<JourneySection/>} */}
    </>
  )
}

export default ImperialOdyssey