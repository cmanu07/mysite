import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import PropagateLoader from 'react-spinners/PropagateLoader';

import BackButton from '../../Main/BackButton/BackButton'

import './ECommerce.css'

const E_Commerce = () => {

  const [loading, setLoading] = useState(true)

  return (
    <section className='e-commerce'>
      <Spline className='e-commerce-spline' onLoad={(e)=>e.disposed === false ? setLoading(false) : ''} 
              scene="https://prod.spline.design/rFOCt4DBPNRtzXLq/scene.splinecode"
      />
      <div>
        <h2>E-Commerce Store</h2>
        <BackButton/>
        <p>This project is under construction at this time...</p>
        <p>You can view it up to date <a href='https://manu-ecommerce.web.app' target='_blank' rel='noreferrer'>HERE</a></p>
        {
          loading ? <PropagateLoader 
                      style={{marginTop: '5em'}}
                      color={'#AECFA4'}
                      loading={loading}
                      size={20}
                    />
                  : ''
        }
      </div>
    </section>
  )
}

export default E_Commerce