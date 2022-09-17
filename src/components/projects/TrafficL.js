import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header/Header'

const TrafficL = () => {

  const [redLight, setRedLight] = useState(true);
  const [yellowLight, setYellowLight] = useState(true);
  const [greenLight, setGreenLight] = useState(true);

  const dayMode = () => {
    setRedLight(true)
    setYellowLight(false)
    setGreenLight(false)
  }
  const nightMode = () => {
      setYellowLight(true)
      setRedLight(false)
      setGreenLight(false)
      return setInterval(() => {
      yellowLight && setYellowLight(false)
    }, 1000)
  }
  

  return (<>
            <Header/>
            <h2>Traffic Light</h2>
            <main>
              <div className="semafor">
                  <p className={redLight ? 'red-light' : 'off-light'}></p>
                  <p className={yellowLight ? 'yellow-light' : 'off-light'}></p>
                  <p className={greenLight ? 'green-light' : 'off-light'}></p>
              </div>
              <div className="modul">
                  <button className="but-day" onClick={dayMode}>DAY</button>
                  <div className="stalp"></div>
                  <button className="but-night" onClick={nightMode}>NIGHT</button>
              </div>
            </main>
            <Footer/>
        </>)
}

export default TrafficL