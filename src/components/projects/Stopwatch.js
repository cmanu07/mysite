import { React, useState } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer'

const Stopwatch = () => {

    let tensC = '00';
    let secC = '00';
    let minC = '00';

    const [interv, setInterv] = useState("");
    const [minutes, setMinutes] = useState(minC);
    const [seconds, setSeconds] = useState(secC);
    const [tens, setTens] = useState(tensC);

// START
    const start = () => {
        setTens(tensC++);
        (tensC <= 9) ? setTens(`${tensC}0`) : setTens(tensC);
        if (tensC > 9) {
            setSeconds(secC++)
            setSeconds(`0${secC}`)
            tensC = '00';
            setTens(tensC++)
        }
        if (secC > 9) {
            setSeconds(secC)
        }
        if (secC > 59) {
            setMinutes(minC++)
            setMinutes(`0${minC}`)
            secC = `0${0}`
            setSeconds(secC++)
        }
    }
    const startT = () => {
        clearInterval(interv);
        return setInterv(setInterval(start, 100));
    }
// STOP
    const stopT = () => clearInterval(interv);

// RESET 
    const resetT = () => {
        clearInterval(interv);
        setTens('00');
        setSeconds('00');
        setMinutes('00');
    }
    
  return (<>
            <Header/>
                <main className='stopwatch'>
                    <h1>STOPWATCH</h1>
                    <h4>
                        <p className="minutes">{minutes}</p>
                        <span>:</span>
                        <p className="seconds">{seconds}</p>
                        <span>:</span>
                        <p className="tens">{tens}</p>
                    </h4>
                    <div>
                        <button className="start" onClick={startT}>Start</button>    
                        <button className="stop" onClick={stopT}>Stop</button>    
                        <button className="reset" onClick={resetT}>Reset</button>
                    </div>
                </main>
            <Footer/>
        </>)
}

export default Stopwatch