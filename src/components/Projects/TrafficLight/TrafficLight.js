import React, { useState } from 'react';
import BackButton from '../../Main/BackButton/BackButton';

import './TrafficLight.css';

const TrafficLight = () => {

  const [redLight, setRedLight] = useState(() => true);
  const [yellowLight, setYellowLight] = useState(() => true);
  const [greenLight, setGreenLight] = useState(() => true);

  const dayMode = () => {
    setRedLight(true)
    setYellowLight(false)
    setGreenLight(false)
  }
  const nightMode = () => {
      setRedLight(false)
      setGreenLight(false)
      setYellowLight(true)
      let interval = null;
    if (yellowLight) {
      interval = setInterval(() => {
        setYellowLight(!yellowLight)
      }, 1000)
      return interval
    }
  }

  // useEffect(() => {
    
  //   return () => clearInterval(interval)
  // }, [yellowLight])

  return (<section className='semafor'>
            <div>
              <h2>Traffic Light</h2>
              <p className='semaf-temp-msg'>This project is still under contruction in React version. On my <a 
                href="https://github.com/cmanu07/stop_light" target="_blank" rel="noreferrer">
                Github page
                </a> you can find it done in JavaScript Vanilla.
              </p>
              <BackButton/>
            </div>
            <main>
              <div className='semafor-lights'>
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
        </section>)
}

export default TrafficLight