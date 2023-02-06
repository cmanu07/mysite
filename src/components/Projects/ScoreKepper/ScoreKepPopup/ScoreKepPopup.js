import React from 'react'
// import { useClearCache } from 'react-clear-cache'

import './ScoreKepPopup.css'

const ScoreKepPopup = (props) => {

  // const { emptyCacheStorage } = useClearCache()

  return (props.trigger) ? (
    <section className='score-keep-popup'>
        <div className='score-keep-popup-main'>
            <h5>{ props.popupText }</h5>
            <div>
              <button className='score-keep-popup-main-yes-button' onClick={(e) => {
                e.preventDefault()
                props.setPopup(false)
                props.setPopupResponse(1)
                // emptyCacheStorage()
                }}
              >YES</button>
              <button className='score-keep-popup-main-no-button' onClick={(e) => {
                e.preventDefault()
                props.setPopup(false)
                props.setPopupResponse(0)
                // emptyCacheStorage()
                }}
              >NO</button>
            </div>
        </div>
    </section>
  ) : ""
}

export default ScoreKepPopup