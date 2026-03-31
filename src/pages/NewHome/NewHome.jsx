import React from 'react'
import ExploreSection from '../../components/NewHomeCompo/ExploreSection'
import NewHero from '../../components/NewHomeCompo/NewHero'
import HeroWhiteBg from '../../components/NewHomeCompo/HeroWhiteBg'
import HeroVideo from '../../components/NewHomeCompo/HeroVideo'
// import Loader from '../../components/Loader/Loader'

const NewHome = () => {
  return (
    <>
    {/* {<HeroWhiteBg/>} */}
    {/* {<Loader/>} */}
    {<HeroVideo/>}
    {<ExploreSection/>}
    {<NewHero/>}
    </>
  )
}

export default NewHome