import React from 'react'
import Categories from '../ecommComp/Categories'
import ProductsList from '../ecommComp/ProductsList'
import Slider from '../ecommComp/Slider'

const HomePage = () => {
  return (
        <section className='home-page-main-section'>
            <Slider/>
            <Categories/>
            <ProductsList/>
        </section>
  )
}

export default HomePage