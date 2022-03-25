import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart, resetCart, choseRandom }) => {


    return (
        <div className='cart'>
            <h2>Selected item :{cart.length}</h2>
            {
                cart.map((bike => (
                    <h3 key={bike.id}>{bike.name}</h3>
                )))
            }

            <button onClick={choseRandom}>Select one for me</button> <br />
            <button onClick={resetCart}>Chose Again</button>
        </div>
    );
};


export default Cart;