import React from 'react'
import OurStory from '../components/OurStory'
import Discover from '../components/DiscoverLauxry'
import WhatSetsUsApart from '../components/WhatSetUsApart'
import ViewOurCollections from '../components/ViewCollection'
import LatestArticles from '../components/LatesArticles'
import FAQSection from '../components/FAQSection'
import DianoBanner from '../components/DianoBanner'; 
import ViewWishlistFeatures from '../components/ViewWishListFeactures'


const page = () => {
  return (
    <>
    <OurStory />
    <Discover />
    <WhatSetsUsApart />
    <ViewOurCollections/>
    <ViewWishlistFeatures />
    <LatestArticles />
    <FAQSection />
    <DianoBanner />
    </>
   
  )
}

export default page