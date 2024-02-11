import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeatureProducts from '../../components/FeaturedProducts/FeatureProducts.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeatureProducts type="featured"/>
      <FeatureProducts type="trending"/>
    </div>
  )
}

export default Home