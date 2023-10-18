import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { id,brandName, image } = brand;
    return (
        <Link to={`/brand/${id}`}>
        <div className="card  w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='h-[300px] '/></figure>
            <div className="card-body bg-yellow-300">
                <h2 className="text-2xl text-yellow-950 font-bold text-center">{brandName}</h2>
            </div>
        </div>
        </Link>
    );
};

export default BrandCard;