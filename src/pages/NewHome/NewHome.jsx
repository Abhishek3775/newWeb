import React from 'react'
import ExploreSection from '../../components/NewHomeCompo/ExploreSection'
import NewHero from '../../components/NewHomeCompo/NewHero'
import HeroWhiteBg from '../../components/NewHomeCompo/HeroWhiteBg'
import HeroVideo from '../../components/NewHomeCompo/HeroVideo'

const NewHome = () => {
  return (
    <>
    {<HeroWhiteBg/>}
    {<HeroVideo/>}
    {<ExploreSection/>}
    {<NewHero/>}
    </>
  )
}

export default NewHome