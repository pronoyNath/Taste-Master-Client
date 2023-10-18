import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard/CartCard';

const AddCart = () => {
    const cartList = useLoaderData();
    console.log(cartList);
    return (
        <div>
        <div className='grid grid-cols-3 gap-5'>
            {
                cartList.map(cart=><CartCard key={cart._id} cart={cart}></CartCard>)
            }
        </div>
        </div>
    );
};

export default AddCart;