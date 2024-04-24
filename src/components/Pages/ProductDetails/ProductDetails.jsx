import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const product = useLoaderData();
    const constraintsRef = useRef(null)
    const navigate = useNavigate();

    const { productName, brandName, type, price, shortDescription, rating, image } = product;

    const handleCart = () => {
        const newCart = { productName, brandName, type, price, shortDescription, rating, image };


        fetch('https://server-side-sandy.vercel.app/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!!!',
                        text: 'Product added to the cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/cart')
                }
            })

    }

    return (
        <div className=" mx-auto  flex flex-col items-center justify-center md:flex-row py-20">
            <div className="group relative sm:w-[350px]"> <img className="scale-105  h-[350px] w-[400px] transform rounded-lg bg-black/70 object-cover object-center" src={image} alt="card navigate ui" /></div>


            <motion.div ref={constraintsRef}> <motion.div
                drag
                dragConstraints={constraintsRef}
                className="cursor-move min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]"
            >
                <div className="space-y-1">
                    <h2 className="text-center font-sans text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">{brandName}</h2>
                    <p className="font-sans text-gray-500 dark:text-white/70"> {productName}</p>
                </div>
                <div className="flex flex-wrap  justify-between">
                    <div className="space-y-1">
                        <p className="font-sans text-sm text-gray-500 dark:text-white/70">Rating:</p>
                        <p className="text-lg tracking-wider text-gray-700 dark:text-white/80 lg:text-lg">{rating}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-sans text-sm text-gray-500 dark:text-white/70">Type:</p>
                        <p className="text-lg tracking-wider text-gray-700 dark:text-white/80 lg:text-lg">{type.includes(' ') ? (
                            type.split(' ').map((word, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && <br />}
                                    {word}
                                </React.Fragment>
                            ))
                        ) : (
                            type // If there's only one word, render it as is
                        )}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-sans text-sm text-gray-500 dark:text-white/70">Price:</p>
                        <p className="text-lg tracking-wider text-gray-700 dark:text-white/80 lg:text-lg">{price}</p>
                    </div>
                </div>
                <div className='font-semibold text-white text-right'>
                    <p>Description: <br />
                        <span className='text-orange font-normal'> {shortDescription}</span>
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button onClick={handleCart}
                        className="select-none rounded-lg bg-orange py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#74503d] transition-all hover:shadow-lg hover:shadow-[#d29c7f]  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Add to Cart
                    </button>
                </div>
            </motion.div>
            </motion.div>


        </div>
    );
};

export default ProductDetails;