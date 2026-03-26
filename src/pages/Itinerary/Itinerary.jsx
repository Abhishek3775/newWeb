import React from 'react'
import Itineraryhero from '../../components/Itinerary/Itinerary_hero'
import Journeyoverview from '../../components/Itinerary/Journey_overview'
import Whatsinclude from '../../components/Itinerary/Whats_include'
import VoyageItinerary from "../../components/Itinerary/VoyageItinerary";
import Interactivemap from '../../components/Itinerary/Interactive_map';
import VesselOverview from '../../components/Itinerary/VesselOverview';
import VesselStay from '../../components/Itinerary/VesselStay';
import DatesPricing from '../../components/Itinerary/DatesPricing';
import JourneyDetails from '../../components/Itinerary/JourneyDetails';
import BeginJourney from '../../components/Itinerary/BeginJourney';
import BrandStrip from '../../components/BrandStrip/BrandStrip';




const Itinerary = () => {
  return (
    <>
    {<Itineraryhero/>}
    {<Journeyoverview/>}
    {<Whatsinclude/>}
    {<VoyageItinerary/>}
    {<Interactivemap/>}
    {<VesselOverview/>}
    {<VesselStay/>}
    {<DatesPricing/>}
    {<JourneyDetails/>}
    {<BeginJourney/>}
    {<BrandStrip/>}
    </>
  )
}

export default Itinerary