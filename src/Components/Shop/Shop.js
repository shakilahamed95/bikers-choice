import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [bikes, setbikes] = useState([])
    const [cart, setcart] = useState([])
    const handleAddToCart = (bike) => {
        const newCart = [...cart, bike]
        setcart(newCart)
    }
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setbikes(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="bikes-container">
                {
                    bikes.map(bike => <Bike
                        key={bike.id}
                        bike={bike}
                        handleAddToCart={handleAddToCart}
                    ></Bike>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;