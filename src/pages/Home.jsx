import React from 'react'
import Hero from '../components/Hero'
import FeaturedArtworks from '../components/FeaturedArtworks'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Hero />
      <FeaturedArtworks />
    </div>
  )
}

export default Home