import React from 'react'
import IndividualBlog from '../../components/Blog/IndividualBlogHero'
import MaldivesArticle from '../../components/Blog/MaldivesArticle'
import YouMayAlsoEnjoy from '../../components/Blog/YouMayAlsoEnjoy'
import WorldCurated from '../../components/Blog/WorldCurated'
import BrandStrip from '../../components/BrandStrip/BrandStrip'

const individualblog = () => {
  return (
    <>
    {<IndividualBlog/>}
    {<MaldivesArticle/>}
    {<YouMayAlsoEnjoy/>}
    {<WorldCurated/>}
    {<BrandStrip/>}
    </>
  )
}

export default individualblog