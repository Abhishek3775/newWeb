import React from 'react'
import EGCSignatureJourneys from '../../components/EGC-Comp/EGCSignatureJourneys'
import PersonalizedJourneys from '../../components/EGC-Comp/PersonalizedJourneys'
import StartPlanning from '../../components/EGC-Comp/StartPlanning'

const EGCSignature = () => {
  return (
    <>
    {<EGCSignatureJourneys/>}
    {<PersonalizedJourneys/>}
    {<StartPlanning/>}
    </>
  )
}

export default EGCSignature