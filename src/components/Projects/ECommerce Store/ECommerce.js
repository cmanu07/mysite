import React from 'react'
import { Route, Routes } from 'react-router-dom'

import BackButton from '../../Main/BackButton/BackButton'
import HomePage from './ecommPages/HomePage'
import ProductPage from './ecommPages/ProductPage'
import Announcement from './ecommComp/Announcement'
import Header from './ecommComp/Header'
import Newsletter from './ecommComp/Newsletter'

import { ECommShopContextProvider } from '../../Contexts/ECommShopContext'

import './ECommerce.css'

const E_Commerce = () => {
  return (
    <section className='e-commerce'>
      <div>
        <h2>E-Commerce Store</h2>
        <p>This project is under construstion at this time...</p>
        <BackButton/>
      </div>
      <main className='e-commerce-main'>
        <ECommShopContextProvider>
          <Announcement/>
          <Header/>
          <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/product_page'} element={<ProductPage/>}/>
          </Routes>
          <Newsletter/>
        </ECommShopContextProvider>
      </main>
    </section>
  )
}

export default E_Commerce