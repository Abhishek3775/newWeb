import React from 'react'
import RhinoHero from '../components/RahinoDetails/RhinoHero'
import RhinoEncounter from '../components/RahinoDetails/RhinoEncounter'
import ExperienceSection from '../components/RahinoDetails/ExperienceSection'
import ConservationTrek from '../components/RahinoDetails/ConservationTrek'
import PrivateRhinoTrek from '../components/RahinoDetails/PrivateRhinoTrek'
import GuestStories from '../components/RahinoDetails/GuestStories'
import DiscoverMore from '../components/RahinoDetails/DiscoverMore'
import ReserveExperience from '../components/RahinoDetails/ReserveExperience'

function RahinoDetails() {
  return (
    <>
    {<RhinoHero/>}
    {<RhinoEncounter/>}
    {<ExperienceSection/>}
    {<ConservationTrek/>}
    {<PrivateRhinoTrek/>}
    {<GuestStories/>}
    {<DiscoverMore/>}
    {<ReserveExperience/>}
    </>
  )
}

export default RahinoDetails