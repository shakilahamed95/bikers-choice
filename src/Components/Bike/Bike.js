import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Bike.css'

const Bike = (props) => {
    console.log(props);
    const { name, price, img } = props.bike

    return (
        <div className='bike-container'>
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h3>Price Tk: {price}</h3>
            </div>
            <button className='btn'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Bike;