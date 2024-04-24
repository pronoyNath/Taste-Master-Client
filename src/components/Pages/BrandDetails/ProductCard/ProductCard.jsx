import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { motion } from "framer-motion";

const ProductCard = ({ commonProduct }) => {
    const constraintsRef = useRef(null)

    const { _id, brandName, image, price, productName, rating, shortDescription, type } = commonProduct;
    // console.log(image);
    return (
        <div>

            <div className=" mx-auto  flex flex-col items-center justify-center md:flex-row">
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
                    <div className='flex justify-around'>
                        <Link to={`/details/${_id}`}>
                            <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">Details</button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">update</button>
                        </Link>
                    </div>
                </motion.div>
                </motion.div>


            </div>

        </div>
    );
};

export default ProductCard;