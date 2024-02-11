import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
// import FeatureProducts from '../../components/FeaturedProducts/FeatureProducts.jsx'
import Categories from '../../components/Categories/Categories.jsx'
import Contact from '../../components/Contact/Contact.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      {/* <FeatureProducts type="featured"/> */}
      <Categories/>
      {/* <FeatureProducts type="trending"/> */}
      <Contact/>
    </div>
  )
}

export default Home