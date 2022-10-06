import React from 'react';
import Footer from '../Footer';
import Header from '../Header/Header';
import BackButton from '../Main/BackButton';


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
        let mesaj = "";

        this.state.counter > 8 || this.state.counter < 2 ? background = "danger" : background = "default";
        if (this.state.counter === 8 || this.state.counter === 2) background = "middle";
        this.state.counter === 10 || this.state.counter === 0 ? mesaj = "You've reached the limit!" : mesaj = "";
        return (<>
            <Header/>
            <div className={`${background}`}>
                <h2 className='counter-title'>Counter</h2>
                <BackButton/>
                <div className={`counter`}>
                    <button onClick = {()=>this.state.counter > 0 ? this.setState(minus) : this.state.counter}>-</button>
                    <div><h2 className='counter-number'>{this.state.counter}</h2><span>{mesaj}</span></div>
                    <button onClick = {()=>this.state.counter < 10 ? this.setState(adder) : this.state.counter}>+</button>
                </div>
            </div>
            <Footer/>
        </>)
    }    
}

export default Counter;