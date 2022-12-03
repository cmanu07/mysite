import React, { useEffect } from 'react'

import './Popup.css'

const Popup = (props) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      props.setPopup(false)
    }, 2100)
    return () => clearInterval(timeout)
  })
  return (props.trigger) ? (
    <section className='popup'>
        <div className='popup-main'>
            <h5>{ props.popupText }</h5>
            <iframe src={props.popupAnimation} title=' '></iframe>
        </div>
    </section>
  ) : ""
}

export default Popup