import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // {
    //     cart.map(person = <p>{person.author}</p>)
        
    // }


    const { cart } = props;

    let total = 0;
    for (const item of cart){
        total = total + item.price;
    }

    return (
        <div className = 'cart'>
            <h3>Select : {props.cart.length}</h3>
            <h3>Total : ${total.toFixed(2)}</h3>
            <h2>Selected Author:</h2>
            {cart.map(person => <p>{person.author}</p>)}           
        </div>
    );
};



export default Cart;