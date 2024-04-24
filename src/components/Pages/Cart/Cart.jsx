import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard/CartCard';
import { Player } from '@lottiefiles/react-lottie-player';
import emptyProduct from "../../../assets/animation/hidden.json"

const Cart = () => {
    const loadedCartList = useLoaderData();
    // console.log(cartList);

    const [cartList, setCartList] = useState(loadedCartList);
    return (
        <div className=' max-w-screen-xl mx-auto md:px-4 py-20'>
            <h3 className='text-5xl text-center text-orange'>All Your Selected Products </h3>
            {cartList.length > 0 ? <ul className='md:flex flex-col divide-y divide-gray-700 gap-8 py-10 '>
                {
                    cartList?.map(cart => <CartCard
                        key={cart._id}
                        cart={cart}
                        cartList={cartList}
                        setCartList={setCartList}
                    ></CartCard>)
                } </ul>
                :
                <div>
                    <Player
                        autoplay
                        loop
                        src={emptyProduct}
                        speed={0.6}
                        className='w-80 pt-6'
                    >
                    </Player>
                    <h3 className='text-white text-center text-4xl font-semibold'>No Product Added Yet.</h3>
                </div>


            }

        </div>
    );
};

export default Cart;