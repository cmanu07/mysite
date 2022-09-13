// import React, { useReducer } from 'react'
import Footer from '../Footer'
import Header from '../Header/Header'


// const actions = {
//   addDigit: 'add-digit',
//   chooseOperation: 'choose-operation',
//   clear: 'clear',
//   deleteInput: 'delete-input',
//   calculate: 'calculate'
// }

// const reducer = (state, {type, result}) => {

// }

const Calculator = () => {

  // const [{currNumber, prevNumber, operation}, dispach] = useReducer(reducer, {})

  // dispach({type: actions.addDigit, result: {digit: 1}})
  return (<>
            <Header/>
            <h2>Calculator</h2>
            <main className='calculator'>
              <div className='calculator-display'>
                <div className='calculator-prev-number'></div>
                <div className='calculator-curr-number'></div>
              </div>
              <button className='calculator-span-two'>C</button>
              <button>DEL</button>
              <button>/</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>*</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>+</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>-</button>
              <button>.</button>
              <button>0</button>
              <button className='calculator-span-two'>=</button>
            </main>
            <Footer/>
        </>)
}

export default Calculator