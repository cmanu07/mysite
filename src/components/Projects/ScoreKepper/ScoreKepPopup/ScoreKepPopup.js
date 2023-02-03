import React from 'react'

import './ScoreKepPopup.css'

const ScoreKepPopup = (props) => {

  return (props.trigger) ? (
    <section className='popup'>
        <div className='popup-main'>
            <h5>{ props.popupText }</h5>
            <div>
              <button className='popup-main-yes-button' onClick={() => props.setPopup(false) & props.setPopupResponse(1)}>YES</button>
              <button className='popup-main-no-button' onClick={() => props.setPopup(false) & props.setPopupResponse(0)}>NO</button>
            </div>
        </div>
    </section>
  ) : ""
}

export default ScoreKepPopup