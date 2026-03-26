import React from 'react'
import AboutTimeline from '../../components/AboutCompo/AboutTimeline'
import TeamSection from '../../components/AboutCompo/TeamSection'
import FounderSection from '../../components/AboutCompo/FounderSection'
import ExperienceSection from '../../components/AboutCompo/ExperienceSection'
import OurPromiseSection from '../../components/AboutCompo/EliteGlobalPromise'
import ValuesSection from '../../components/AboutCompo/ValuesSection'
import JourneyCTA from '../../components/AboutCompo/JourneyCTA'
import BrandStrip from '../../components/BrandStrip/BrandStrip'
// import WhoWeAre from '../../components/AboutCompo/WhoWeAre'
// import BeginningSection from '../../components/AboutCompo/BeginningSection'
// import EvolutionSection from '../../components/AboutCompo/EvolutionSection'
// import ValuesIntro from '../../components/AboutCompo/ValuesIntro'
// import PrincipleDiscreet from '../../components/AboutCompo/PrincipleDiscreet'
// import PrincipleRelentless from '../../components/AboutCompo/PrincipleRelentless'
// import PrincipleIntuitive from '../../components/AboutCompo/PrincipleIntuitive'
import AboutJourneySection from '../../components/AboutCompo/AboutJourneySection'
// import AboutServicesShowcase from '../../components/AboutCompo/AboutServicesShowcase'

function About() {
  return (
    <>
    {/* {<WhoWeAre/>} */}
    {<AboutTimeline/>}
    {<FounderSection/>}
    {/* {<BeginningSection/>} */}
    {/* {<EvolutionSection/>} */}
     {<ExperienceSection/>}
    {<OurPromiseSection/>}
    {/* {<ValuesIntro/>} */}
    {/* {<PrincipleDiscreet/>} */}
    {/* {<PrincipleRelentless/>} */}
    {/* {<PrincipleIntuitive/>} */}
    {<AboutJourneySection/>}
    {/* {<AboutServicesShowcase/>} */}
    {/* {<TeamSection/>} */}
    {<ValuesSection/>}
    {<JourneyCTA/>}
    {<BrandStrip/>}
    </>
  )
}

export default About