import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard/CartCard';

const AddCart = () => {
    const loadedCartList = useLoaderData();
    // console.log(cartList);

    const [cartList,setCartList] = useState(loadedCartList);
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
            {
                cartList?.map(cart=><CartCard 
                    key={cart._id}
                     cart={cart}
                     cartList={cartList}
                     setCartList={setCartList}
                     ></CartCard>)
            }
        </div>
        </div>
    );
};

export default AddCart;