import React from 'react'
import WhereToTravelMarch from '../../components/CalenderCompo/MarchHero'
import MonthVerticalGrid from '../../components/CalenderCompo/MonthVerticalGrid'
import MarchGallerySection from '../../components/CalenderCompo/MarchGallerySection'
import TopMarchExperiences from '../../components/CalenderCompo/TopMarchExperiences'
import LastMinuteEscape from '../../components/CalenderCompo/LastMinuteEscape'

function MarchCalender() {
  return (
    <>
    {<WhereToTravelMarch/>}
    {<MarchGallerySection/>}
    {<TopMarchExperiences/>}
    {<MonthVerticalGrid/>}
    {<LastMinuteEscape/>}
    </>
  )
}

export default MarchCalender