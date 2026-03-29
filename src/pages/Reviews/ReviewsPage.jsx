import React from 'react'
import TrustedExcellence from '../../components/ReviewComp/TrustedExcellence'
import ClientReviews from '../../components/ReviewComp/ClientReviews'
import LuxuryQuote from '../../components/ReviewComp/LuxuryQuote'
import ReviewProcess from '../../components/ReviewComp/ReviewProcess'
import ReviewFAQ from "../../components/ReviewComp/ReviewFAQ"

const ReviewsPage = () => {
  return (
    <>
    {<TrustedExcellence/>}
    {<ClientReviews/>}
    {<LuxuryQuote/>}
    {<ReviewProcess/>}
    {<ReviewFAQ/>}
    </>
  )
}

export default ReviewsPage