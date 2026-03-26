import React from 'react'
import JapanHero from '../../components/Japan/JapanHome'
import JapanDiscovery from '../../components/Japan/JapanDiscovery'
import WhenToVisitJapan from '../../components/Japan/WhenToVisitJapan'
import Hanami from '../../components/Japan/Hanami'
import JapanSignatureJourneys from '../../components/Japan/JapanSignatureJourney'
import SeeDoJapan from '../../components/Japan/SeeDoJapan'
import BestOfJapan from '../../components/Japan/BestOfJapan'
import EGCJapan from '../../components/Japan/EGCJapan'

function JapanHome() {
  return (
 <>
 {<JapanHero/>}
 {<JapanDiscovery/>}
 {<WhenToVisitJapan/>}
 {<Hanami/>}
 {<JapanSignatureJourneys/>}
 {<SeeDoJapan/>}
 {<BestOfJapan/>}
 {<EGCJapan/>}
 </>
  )
}

export default JapanHome