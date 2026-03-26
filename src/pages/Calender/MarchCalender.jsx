import React from 'react'
import WhereToTravelMarch from '../../components/CalenderCompo/MarchHero'
import MonthVerticalGrid from '../../components/CalenderCompo/MonthVerticalGrid'
import MarchGallerySection from '../../components/CalenderCompo/MarchGallerySection'

function MarchCalender() {
  return (
    <>
    {<WhereToTravelMarch/>}
    {<MarchGallerySection/>}
    {<MonthVerticalGrid/>}

    </>
  )
}

export default MarchCalender