import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import Cart from './Cart';
import { logicalExpression } from '@babel/types';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
        this.state = {
            isDisplayed1: false,
            isDisplayed2: false,
            isDisplayed3: false,
            isDisplayed4: false
        };


    }

    render() {
        return (

            <div className="menu">

                <button id='btn1' onClick={this.myFunct1}>Apple</button>
                <button id='btn2' onClick={this.myFunct2}>Mango</button>
                <button id='btn3' onClick={this.myFunct3}>Orange</button>
                <button id='btn4' onClick={this.myFunct4}>Pineapple</button>

                <Cart myRef={this.myRef} myRef1={this.myRef1} myRef2={this.myRef2} myRef3={this.myRef3} />


            </div>


        );
    }

    myFunct1 = () => {
        let x = this.myRef.current;
        let p = this.state.isDisplayed1;
        if (!p) {
            x.style.display = 'block';
        }
        else {
            x.style.display = 'none';
        }
        this.setState({ isDisplayed1: !p });

    };

    myFunct2 = () => {
        let x = this.myRef1.current;
        if (!this.state.isDisplayed2) {


            x.style.display = 'block';

            this.setState(
                {
                    isDisplayed2: true
                }
            );



        }
        else {
            x.style.display = 'none';
            this.setState(
                {
                    isDisplayed2: false

                }
            );

        }


    };

    myFunct3 = () => {
        let x = this.myRef2.current;
        if (!this.state.isDisplayed3) {


            x.style.display = 'block';

            this.setState(
                {
                    isDisplayed3: true
                }
            );



        }
        else {
            x.style.display = 'none';
            this.setState(
                {
                    isDisplayed3: false

                }
            );

        }


    };
    myFunct4 = () => {
        let x = this.myRef3.current;
        if (!this.state.isDisplayed4) {


            x.style.display = 'block';

            this.setState(
                {
                    isDisplayed4: true
                }
            );



        }
        else {
            x.style.display = 'none';
            this.setState(
                {
                    isDisplayed4: false

                }
            );

        }


    };

}

export default Menu;
