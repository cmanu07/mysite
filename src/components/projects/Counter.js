import { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header/Header';


export default function Counter () {

    const [counter, setCounter] = useState(5);
    const adder = counter + 1;
    const minus = counter - 1;
    const butStyle = {
        width: 100,
        height: 40,
        borderRadius: 10
    }
    
    let background = "default";
    let mesaj = "";

    counter > 8 || counter < 2 ? background = "danger" : background = "default";
    if (counter === 8 || counter === 2) background = "middle";
    counter === 10 || counter === 0 ? mesaj = "You've reach the limit!" : mesaj = "";

    return (<>
            <Header/>
            <h2>Counter</h2>
            <div className={`counter ${background}`}>
                <button style={butStyle} onClick = {()=>counter < 10 ? setCounter(adder) : counter}>+</button>
                <div><h2>{counter}</h2><span>{mesaj}</span></div>
                <button style={butStyle} onClick = {()=>counter > 0 ? setCounter(minus) : counter}>-</button>
            </div>
            <Footer/>
        </>)
}