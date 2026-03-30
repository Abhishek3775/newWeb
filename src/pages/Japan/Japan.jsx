import React from 'react'
import JapanHero from '../../components/Japan/JapanHome'
import JapanDiscovery from '../../components/Japan/JapanDiscovery'
import WhenToVisitJapan from '../../components/Japan/WhenToVisitJapan'
import Hanami from '../../components/Japan/Hanami'
import JapanSignatureJourneys from '../../components/Japan/JapanSignatureJourney'
import SeeDoJapan from '../../components/Japan/SeeDoJapan'
import BestOfJapan from '../../components/Japan/BestOfJapan'
import EGCJapan from '../../components/Japan/EGCJapan'
import HeroJapan from '../../components/Japan/HeroJapan'
import SeasonsIntro from '../../components/Japan/SeasonsIntro'
import TravelInfoSection from '../../components/Japan/TravelInfoSection'
import StoriesGuidesSection from '../../components/Japan/StoriesGuidesSection'
import JapanJourneyBegin from '../../components/Japan/JapanJourneyBegin'
import BrandStrip from '../../components/BrandStrip/BrandStrip'

function JapanHome() {
  return (
 <>
 {<JapanHero/>}
 {<JapanDiscovery/>}
 {<HeroJapan/>}
 {<SeasonsIntro/>}
 {<JapanSignatureJourneys/>}
 {<SeeDoJapan/>}
 {/* {<WhenToVisitJapan/>} */}
 {/* {<Hanami/>} */}
 {<BestOfJapan/>}
 {<EGCJapan/>}
 {<TravelInfoSection/>}
 {<StoriesGuidesSection/>}
 {<JapanJourneyBegin/>}
 {<BrandStrip/>}
 </>
  )
}

export default JapanHome