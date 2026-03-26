import React from 'react'
import FinestAccommodations from '../../components/AccommodationComp/FinestAccommodations'
import ExclusiveMemberBenefits from '../../components/AccommodationComp/ExclusiveMemberBenefits'
import CuratedCollection from '../../components/AccommodationComp/CuratedCollection'
import GuideSection from '../../components/AccommodationComp/GuideSection'
import BrandStrip from '../../components/BrandStrip/BrandStrip'
import JournalSection from '../../components/AccommodationComp/JournalSection'

const Accommodation = () => {
  return (
    <>
    {<FinestAccommodations/>}
    {<ExclusiveMemberBenefits/>}
    {<CuratedCollection/>}
    {<GuideSection/>}
    {<JournalSection/>}
    {<BrandStrip/>}
    </>
  )
}

export default Accommodation