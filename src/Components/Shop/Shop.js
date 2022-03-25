import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Shop.css'

const Shop = () => {
    const [bikes, setbikes] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setbikes(data))
    }, [])
    console.log(bikes);
    return (
        <div>
            <div className="bikes-container">
                {
                    bikes.map(bike => <Bike
                        key={bike.id}
                        bike={bike}
                    ></Bike>)
                }
            </div>
        </div>
    );
};

export default Shop;