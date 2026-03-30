import React from 'react'
// import HeroJapan from '../../components/Japan/HeroJapan'
// import SeasonsIntro from '../../components/Japan/SeasonsIntro'
import FourSeasonsSlider from '../../components/Japan/FourSeasonsSlider'
import MonthlyGuide from '../../components/Japan/MonthlyGuide'
import ClimateRegion from '../../components/Japan/ClimateRegion'
import PlanActivities from '../../components/Japan/PlanActivities'
import SeasonalSignature from '../../components/Japan/SeasonalSignature'
import PackingEssentials from '../../components/Japan/PackingEssentials'
import CommonFaq from '../../components/Japan/CommonFaq'
import PlanJourney from '../../components/Japan/PlanJourney'
import BrandStrip from '../../components/BrandStrip/BrandStrip'
import SeasonHeroSection from '../../components/Japan/SeasonHeroSection'
import NewPackingEssentials from '../../components/Japan/NewPackingEssentials'


function JapanGuide() {
  return (
    <>
    {/* {<HeroJapan/>} */}
    {<SeasonHeroSection/>}
    {<MonthlyGuide/>}
    {<FourSeasonsSlider/>}
    {/* {<SeasonsIntro/>} */}
    {<ClimateRegion/>}
    {<PlanActivities/>}
    {<SeasonalSignature/>}
    {<NewPackingEssentials/>}
    {/* {<PackingEssentials/>} */}
    {<CommonFaq/>}
    {<PlanJourney/>}
    {<BrandStrip/>}
    </>
  )
}

export default JapanGuide