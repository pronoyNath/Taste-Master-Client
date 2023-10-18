import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({commonProduct}) => {
    console.log(commonProduct);
    const {_id,brandName,image,price,productName,rating,shortDescription,type} = commonProduct;
    console.log(image);
    return (
        <div>
            <div className="card card-compact w-96 h-[800px] bg-base-100 shadow-xl">
                <figure className='py-5'><img src={image} alt="" className='h-[400px] w-full object-cover mx-auto' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl"><span className=' text-violet-600'>Brand Name:</span> {brandName}</h2>
                    <h2 className="card-title text-md font-medium"><span className='text-pink-400'>Product Name:</span> {productName}</h2>
                    <p className=' text-black font-poppins font-semibold'><span className='font-semibold text-sky-800 text-lg'>Rating: </span>{rating}/5</p>
                    <p className=' text-black font-poppins font-semibold'><span className='font-semibold text-sky-800 text-lg'>Type: </span>{type}</p>
                    <p className=' text-black font-poppins font-semibold'><span className='font-semibold text-sky-800 text-lg'>Price:</span> {price}</p>
                    <p className=' text-black font-poppins font-semibold'><span className='font-semibold text-sky-800 text-lg'>Short Description:</span> {shortDescription}</p>
                    <div className="card-actions justify-center my-3">
                    <Link to={`/details/${_id}`}>
                    <button className="btn btn-outline">Details</button>
                    </Link>
                    
                    <Link to={`/update/${_id}`}>
                    <button className="btn btn-warning">update</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;