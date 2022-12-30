import React from 'react'
import ProductsList from '../ecommComp/ProductsList'
import Slider from '../ecommComp/Slider'

const HomePage = () => {
  return (
        <section className='home-page-main-section'>
            <ProductsList/>
            <Slider/>
        </section>
  )
}

export default HomePage