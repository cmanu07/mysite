import { actions } from "./Calculator"

export default function CalculatorOperat ({dispach, operation}) {
    return <button onClick={() => dispach({type: actions.chooseOperation, load: {operation}})} className="calculator-button">{operation}</button>
}