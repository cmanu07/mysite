import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { sliderItems } from '../../../constants';


const Arrow = styled.div`
    width: 2.5em;
    height: 2.5em;
    display: flex;
    z-index: 2;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #FFD960;
    cursor: pointer;
    position: absolute;
    top: 52%;
    left: ${props => props.direction === 'left' && '1.5em'};
    right: ${props => props.direction === 'right' && '1.5em'};
    opacity: 0.5;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(() => 0)
    
    const handleSlide = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

  return (
    <main className='e-comm-slider-main'>
        <Arrow direction = 'left' onClick={() => handleSlide('left')} style={{color: '#2E424E'}}>
            <ArrowBackIosIcon/>
        </Arrow>
        <section style={{transform: `translateX(${slideIndex * -97}vw)`}}>
            {
                sliderItems ? sliderItems.map(slide => {
                    return (
                        <figure bg = {slide.bg} className='e-comm-slider-figure' key={slide.title}>
                            <img src={slide.image} alt=' slider product ...' className='e-comm-slider-figure-image'/>
                            <div className='e-comm-slider-figure-info'>
                                <h5 style={{color:'#FFFFFF', fontSize: '2em', marginBottom: '0.5%'}}>{slide.title}</h5>
                                <p style={{color:'#FFFFFF', fontSize: '1.2em'}}>{slide.description}</p>
                                <button className='e-comm-slider-button'>Buy now</button>
                            </div>
                        </figure>
                    )
                })
                            : ''
            }
        </section>
        <Arrow direction = 'right' onClick={() => handleSlide('right')} style={{color: '#2E424E'}}>
            <ArrowForwardIosIcon/>
        </Arrow>
    </main>
  )
}

export default Slider