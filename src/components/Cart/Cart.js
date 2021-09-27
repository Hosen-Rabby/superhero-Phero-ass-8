import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart)
    // console.log(props.cart[0].key)
    // const author = props.cart[0].key;
    const { cart } = props;
    let total = 0;

    for (const item of cart){
        total = total + item.price;
    }

    return (
        <div className = 'cart'>
            <h3>Select : {props.cart.length}</h3>
            <h3>Total : {total}</h3>
            <h2>Selected Author:</h2>
            {cart.map(person => <p>{person.author}</p>)}
            
        </div>
    );
};

export default Cart;