import { actions } from "./Calculator"

export default function CalculatorDigit ({dispach, digit}) {
    return <button onClick={() => dispach({type: actions.addDigit, load: {digit}})}>{digit}</button>
}