import React from 'react'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import HazardShelter from '../components/HazardShelter'
import Advancements from '../components/Advancements'
import HomeMenu from '../components/HomeMenu'
import Success from '../components/Success'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeMenu/>
      <HazardShelter/>
      <Advancements/>
      <Success/>
      <Newsletter/>
    </div>
  )
}

export default Home
