import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [bikes, setbikes] = useState([])
    const [cart, setcart] = useState([])
    const handleAddToCart = (bike) => {
        if (cart.length <= 3) {
            if (cart.includes(bike)) {
                const newCart = [...cart]
                setcart(newCart)
            }
            else {
                const newCart = [...cart, bike]
                setcart(newCart)
            }
        }
        else {
            setcart(cart);
        }
    }
    const resetCart = () => {
        setcart([]);
    }
    const choseRandom = () => {
        const randomItem = [cart[Math.floor(Math.random() * cart.length)]];
        setcart(randomItem)
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
                    resetCart={resetCart}
                    choseRandom={choseRandom}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;