import { actions } from "./Calculator"

export default function CalculatorOperat ({dispach, operation}) {
    return <button onClick={() => dispach({type: actions.chooseOperation, load: {operation}})}>{operation}</button>
}