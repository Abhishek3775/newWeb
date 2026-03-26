import React from 'react'
import './Home.css';
import Hero from '../components/Hero';
import Destinations from '../components/Destination/Destination';
import Journeys from '../components/Journeys/Journey';
import TrendingStays from '../components/TrendingStays/TrendingStays';
import Awards from '../components/Awards/Awards';
import ClientStories from '../components/ClientStories/ClientStories';
import CTA from '../components/CTA/CTA';
import BrandStrip from '../components/BrandStrip/BrandStrip';


function Home() {
  return (
   <>
   {<Hero/>}
   {<Destinations/>}
   {<Journeys/>}
   {<TrendingStays/>}
   {<Awards/>}
   {<ClientStories/>}
   {<CTA/>}
   {<BrandStrip/>}
   </>
  )
}

export default Home