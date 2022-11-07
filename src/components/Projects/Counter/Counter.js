import React from 'react';
import BackButton from '../../Main/BackButton/BackButton';

import './Counter.css';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 5,
        }
    }
    render() {
        const adder = {counter: this.state.counter + 1};
        const minus = {counter: this.state.counter - 1};
                
        let background = "default";
        let color = "counter-title";
        let color2 = "counter-number";
        let mesaj = "";

        switch (this.state.counter) {
            case 10: case 0: background = "danger";
                    color = "counter-title-off";
                    color2 = "counter-number-off";
                    mesaj = "You've reached the limit!";
                break;
            case 1: case 2: case 8: case 9: background = "middle"; 
                break;
            case 3: case 4: case 5: case 6: case 7: background = "default";
                break;
            default : console.log('')
        }
        return (<>
            <div className={background}>
                <h2 className={color}>Counter</h2>
                <BackButton/>
                <div className='counter'>
                    <button onClick = {()=>this.state.counter > 0 ? this.setState(minus) : this.state.counter}>-</button>
                    <div><h2 className={color2}>{this.state.counter}</h2><span>{mesaj}</span></div>
                    <button onClick = {()=>this.state.counter < 10 ? this.setState(adder) : this.state.counter}>+</button>
                </div>
            </div>
        </>)
    }    
}

export default Counter;