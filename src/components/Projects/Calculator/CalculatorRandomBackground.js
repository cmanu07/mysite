import React from 'react'

import './Calculator.css'

const CalculatorRandomBackground = ({generateBackground}) => {

const changeBG = () => {
    generateBackground()
}

  return (
    <div className='calc-generate-background-div'>
        <button className='calc-generate-background-button' onClick={changeBG}>Generate random background</button>
    </div>
  )
}

export default CalculatorRandomBackground;