import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        <div className='cart'>
            <h2>Selected item :{cart.length}</h2>
            {
                cart.map((item => (
                    <h3 key={item.id}>{item.name}</h3>
                )))
            }
        </div>
    );
};


export default Cart;