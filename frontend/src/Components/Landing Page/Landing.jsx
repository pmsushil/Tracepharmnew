import React from 'react'
import Analytics from './Analytics'
import LandingNav from './LandingNav'
import Footer from './Footer'
import Hero from './Hero'
import Cards from './Cards'
import Newsletter from './Newsletter'

const Landing = () => {
  return (
    <div>
      <LandingNav />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default Landing
