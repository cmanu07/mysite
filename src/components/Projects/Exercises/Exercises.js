import React, { useRef } from 'react'

import BackButton from '../../Main/BackButton/BackButton'

import './Exercises.css'

const Exercises = () => {

  const fibInput = useRef()

  const generateFibonacci = () => {
      let nr = fibInput.current.value
      let fibSequence = []
      if (nr < 1) {
        fibSequence.push(0)
      } else {
        let newNr = 0
        fibSequence.push(0, 1)
        while (newNr < nr) {
          newNr = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length -2]
          newNr < nr && fibSequence.push(newNr)
        }
      }
      alert(fibSequence)
      // e.prevent.default()
      fibInput.current.value = null
  }

  return (
    <section className='exercises-main'>
        <h2>Exercises</h2>
        <BackButton/>
        <main>
            <div>
              <h3>Generate a Fibonacci string</h3>
              <p>Enter bellow a number to be the length of the Fibonacci string that you whant to generate.</p>
              <input type="number" id="fibonacciLength" ref={fibInput}/>
              <button onClick={() => generateFibonacci()}>Generate</button>
            </div>
            <div>
              <h3>Exercise nr. 2</h3>
            </div>
            <div>
              <h3>Exercise nr. 3</h3>
            </div>  
        </main>
    </section>
  )
}

export default Exercises