import React from 'react';
import './Bike.css'

const Bike = (props) => {
    console.log(props);
    const { name, price, img } = props.bike

    return (
        <div className='bike-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>Price : Tk{price}</h3>

        </div>
    );
};

export default Bike;