import { React, useEffect, useState } from 'react'
import BackButton from '../../Main/BackButton'

import './Stopwatch.css'

const Stopwatch = () => {

    const [time, setTime] = useState(() => 0);
    const [timerOn, setTimerOn] = useState(() => false);

// START
    const startF = () => {
        setTimerOn(true)
    }

// STOP/RESUME
    const stopF = () => {
        setTimerOn(false)
    }
    const resumeF = () => {
        setTimerOn(true)
    }

// RESET 
    const resetF = () => {
        setTime(0)
    }

    useEffect (() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [timerOn])
    
  return (<>
                <main className='stopwatch'>
                    <div className='back-div'>
                        <h2>STOPWATCH</h2>
                        <BackButton/>
                    </div>
                    <h4>
                        <p className="minutes">{`0${Math.floor(time / 60000) % 60}`.slice(-2)}</p>
                        <span>:</span>
                        <p className="seconds">{`0${Math.floor(time / 1000) % 60}`.slice(-2)}</p>
                        <span>:</span>
                        <p className="tens">{`0${(time / 10) % 100}`.slice(-2)}</p>
                    </h4>
                    <div className='stopwatch-butt'>
                        {!timerOn && time === 0 && (
                            <button className="start" onClick={startF}>Start</button>    
                        )}
                        {timerOn && (
                            <button className="stop" onClick={stopF}>Stop</button>
                        )}
                        {!timerOn && time !== 0 && (
                            <button className="stop" onClick={resumeF}>Resume</button>    
                        )}
                        {!timerOn && time !== 0 && (
                            <button className="reset" onClick={resetF}>Reset</button>
                        )}                        
                    </div>
                </main>
        </>)
}

export default Stopwatch