import React from 'react'
import CalenderHero from '../../components/CalenderCompo/CalenderHero'
import ChooseMonth from '../../components/CalenderCompo/ChooseMonth'
import LuxuryBenefits from '../../components/CalenderCompo/LuxuryBenefits'
import WordsFromTravelers from '../../components/CalenderCompo/WordsFromTravelers'
import ReadyForAdventure from '../../components/CalenderCompo/ReadyForAdventure'
import StayInspired from '../../components/CalenderCompo/StayInspired'
import BrandStrip from '../../components/BrandStrip/BrandStrip'


function Calender() {
  return (
    <>
    {<CalenderHero/>}
    {<ChooseMonth/>}
    {<LuxuryBenefits/>}
    {<WordsFromTravelers/>}
    {<ReadyForAdventure/>}
    {<StayInspired/>}
    {<BrandStrip/>}
    </>
  )
}

export default Calender