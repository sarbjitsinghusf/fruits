/* eslint-disable no-useless-constructor */
import React from 'react';
import './Cart.css';

function Cart(props) {

  return (
    <div id='cart'>
      <span id='first' ref={props.myRef}>Apple</span><br />
      <span id='second' ref={props.myRef1}>Mango</span><br />
      <span id='third' ref={props.myRef2}>Orange</span><br />
      <span id='fourth' ref={props.myRef3}>Pineapple</span>

    </div>

  );
}

export default Cart;