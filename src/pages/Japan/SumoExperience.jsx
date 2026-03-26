import React from 'react'
import SumoHome from '../../components/Japan/SumoHome'
import TraditionPower from '../../components/Japan/TraditionPower'
import SumoOffering from '../../components/Japan/SumoOffering'
import GrandTournamentVIP from '../../components/Japan/GrandTournamentVIP'
import PrivateSumoDemo from '../../components/Japan/PrivateSumo'
import GuestStories from '../../components/Japan/GuestStories'
import DiscoverMore from '../../components/Japan/DiscoverMore'
import ReserveExperience from '../../components/Japan/ReserveExperience'
import BrandStrip from '../../components/BrandStrip/BrandStrip'




function SumoExperience() {
  return (
    <>
    {<SumoHome/>}
    {<TraditionPower/>}
    {<SumoOffering/>}
    {<GrandTournamentVIP/>}
    {<PrivateSumoDemo/>}
    {<GuestStories/>}
    {<DiscoverMore/>}
    {<ReserveExperience/>}
    {<BrandStrip/>}
    </>
  )
}

export default SumoExperience