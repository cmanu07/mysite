import { React, useState } from 'react'
import BackButton from '../Main/BackButton'

import Header from '../Header/Header'
import Footer from '../Footer'

const Stopwatch = () => {

    const [interv, setInterv] = useState();
    const [time, setTime] = useState({min:0, sec:0, tens:0});
    const [stop, setStop] = useState(() => 'Stop/Pause');

    let minCurent = time.min, secCurent = time.sec, tensCurent = time.sec;

// START
    const start = () => {
        if (secCurent === 60) {
            minCurent++
            secCurent = 0
        }
        if (tensCurent === 10) {
            secCurent++
            tensCurent = 0
        }     
        tensCurent++
        return setTime({min:minCurent, sec:secCurent, tens:tensCurent});
    }
    const startF = () => {
        if (stop === 'Stop/Pause') {
            clearInterval(interv)
            start();
            setInterv(setInterval(start, 100));
        } else {
            setStop('Stop/Pause')
            clearInterval(interv)
            start();
            setInterv(setInterval(start, 100));
        }
    }
// STOP/RESUME
    const stopF = () => {
            clearInterval(interv)
            setStop('Resume')
    }
    const resumeF = () => {
        startF();
        setStop('Stop/Pause');
    }

// RESET 
    const resetF = () => {
        clearInterval(interv);
        setStop('Stop/Pause')
        setTime({min:0, sec:0, tens:0});
    }
    
  return (<>
            <Header/>
                <main className='stopwatch'>
                    <div className='back-div'>
                        <h2>STOPWATCH</h2>
                        <BackButton/>
                    </div>
                    <h4>
                        <p className="minutes">{(time.min < 10) ? `0${time.min}` : time.min}</p>
                        <span>:</span>
                        <p className="seconds">{(time.sec < 10) ? `0${time.sec}` : time.sec}</p>
                        <span>:</span>
                        <p className="tens">{(time.tens < 10) ? `${time.tens}0` : time.tens}</p>
                    </h4>
                    <div className='stopwatch-butt'>
                        <button className="start" onClick={startF}>Start</button>    
                        <button className="stop" onClick={(stop === 'Stop/Pause') ? stopF : resumeF}>{stop}</button>    
                        <button className="reset" onClick={resetF}>Reset</button>
                    </div>
                </main>
            <Footer/>
        </>)
}

export default Stopwatch