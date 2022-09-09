import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header/Header'

const TrafficL = () => {

  const [redLight, setRedLight] = useState('red-light');
  const [yellowLight, setYellowLight] = useState('yellow-light');
  const [greenLight, setGreenLight] = useState('green-light');

  const dayMode = () => {
    setRedLight('red-light')
    setYellowLight('off-light')
    setGreenLight('off-light')
  }
  const nightMode = () => {
    setYellowLight('yellow-light')
    yellowLight === 'yellow-light' && 
        setTimeout(()=>setYellowLight('off-light'),1000)
        
    setRedLight('off-light')
    setGreenLight('off-light')
  }
  

  return (<>
            <Header/>
            <h2>Traffic Light</h2>
            <main>
              <div className="semafor">
                  <p className={redLight}></p>
                  <p className={yellowLight}></p>
                  <p className={greenLight}></p>
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