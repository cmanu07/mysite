import React, { useReducer } from 'react'
import BackButton from '../../Main/BackButton/BackButton'
import CalculatorDigit from './CalculatorDigit'
import CalculatorOperat from './CalculatorOperat'

import './Calculator.css'


export const actions = {
  addDigit: 'add-digit',
  chooseOperation: 'choose-operation',
  clear: 'clear',
  deleteInput: 'delete-input',
  calculate: 'calculate'
}

function reducer (state, {type, load}) {
    switch (type) {
      case actions.addDigit:
        if (load.digit === "0" && state.currNumber === "0") return state;
        if (load.digit === "." && state.currNumber == null) return {
          ...state,
          currNumber: load.digit
        };
        if (load.digit === "." && state.currNumber.includes(".") ) return state;
        if (state.overwrite) {
          return {
            ...state,
            overwrite: false,
            currNumber: load.digit
          }
        }
        return {
          ...state, currNumber: `${state.currNumber || ""}${load.digit}`
        }
      case actions.chooseOperation: 
        if (state.currNumber == null && state.prevNumber == null) {
          return state;
        } 
        if (state.prevNumber == null) {
          return {
            ...state,
            operation: load.operation,
            prevNumber: state.currNumber,
            currNumber: null
          }
        }
        if (state.currNumber == null) {
          return {
            ...state,
            operation: load.operation
          }
        }
        return {
          ...state,
          prevNumber: calculate(state),
          operation: load.operation,
          currNumber: null
        }
      case actions.clear: return {};
      case actions.deleteInput: {
        if (state.overwrite) {
          return {
            ...state,
            overwrite: false,
            currNumber: null
          }
        }
        if (state.currNumber == null) return state;
        if (state.currNumber.length === 1) {
          return {
            ...state,
            currNumber: null
          }
        }
        return {
          ...state,
          currNumber: state.currNumber.slice(0,-1)
        }
      }
      case actions.calculate: {
        if (
          state.currNumber == null ||
          state.prevNumber == null ||
          state.operation == null
        ) return state;
        return {
          ...state,
          prevNumber: null,
          operation: null,
          overwrite: true,
          currNumber: calculate(state)
        }
      }
      default: return state;
    }
}

function calculate ({currNumber, prevNumber, operation}) {
  const prev = +prevNumber;
  const curr = +currNumber;
  if (isNaN(prev) || isNaN(curr)) return "";
  let rezult = "";
  switch (operation) {
    case "+": rezult = prev + curr; break;
    case "-": rezult = prev - curr; break;
    case "*": rezult = prev * curr; break;
    case "/": rezult = prev / curr; break;
    default: return null;
  }
  return (Number.isInteger(rezult)) ? rezult : rezult.toFixed(6).toString();
}
const NR_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
const formatNumber = (nr) => {
  if (nr == null) return;
  const [integer, decimal] = nr.toString().split(".");
  if (decimal == null) return NR_FORMATTER.format(integer);
  return `${NR_FORMATTER.format(integer)}.${decimal}`
}

const Calculator = () => {
  
  const [{currNumber="0", prevNumber, operation}, dispach] = useReducer(reducer, {})
  
  return (<>
            <div>
              <h2>Calculator</h2>
              <BackButton/>
            </div>
            <main className='calculator'>
              <div className='calculator-display'>
                <div className='calculator-prev-number'>{formatNumber(prevNumber)} {operation}</div>
                <div className='calculator-curr-number'>{formatNumber(currNumber)}</div>
              </div>
              <button className='calculator-span-two' onClick={()=> dispach({type: actions.clear})}>C</button>
              <button onClick={()=> dispach({type: actions.deleteInput})}>DEL</button>
              <CalculatorOperat operation="/" dispach={dispach}/>
              <CalculatorDigit digit="7" dispach={dispach}/>
              <CalculatorDigit digit="8" dispach={dispach}/>
              <CalculatorDigit digit="9" dispach={dispach}/>
              <CalculatorOperat operation="*" dispach={dispach}/>
              <CalculatorDigit digit="4" dispach={dispach}/>
              <CalculatorDigit digit="5" dispach={dispach}/>
              <CalculatorDigit digit="6" dispach={dispach}/>
              <CalculatorOperat operation="+" dispach={dispach}/>
              <CalculatorDigit digit="1" dispach={dispach}/>
              <CalculatorDigit digit="2" dispach={dispach}/>
              <CalculatorDigit digit="3" dispach={dispach}/>
              <CalculatorOperat operation="-" dispach={dispach}/>
              <CalculatorDigit digit="." dispach={dispach}/>
              <CalculatorDigit digit="0" dispach={dispach}/>
              <button className='calculator-span-two' onClick={()=> dispach({type: actions.calculate})}>=</button>
            </main>
        </>)
}

export default Calculator