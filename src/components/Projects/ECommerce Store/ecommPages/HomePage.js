import React from 'react'
import Categories from '../ecommComp/Categories'
import ProductsList from '../ecommComp/ProductsList'
import Slider from '../ecommComp/Slider'

const HomePage = () => {
  return (
        <section className='home-page-main-section'>
            <Categories/>
            <ProductsList/>
            <Slider/>
        </section>
  )
}

export default HomePage