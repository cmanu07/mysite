import { React, useEffect} from 'react'

import './ECommPopup.css'

const ECommPopup = (props) => {
    useEffect(() => {
        let timeout = setTimeout(() => {
            props.setPopup(false)
        }, props.time)
        return () => clearInterval(timeout)
    })

    return (props.trigger) ? (
        <section className='ecomm-popup'>
            <div className='ecomm-popup-main'>
                <h5>{ props.popupText }</h5>
                <div>{ props.popupAnimation }</div>
            </div>
        </section>
    ) : ""
}

export default ECommPopup