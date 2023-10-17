import React from 'react';

const BrandCard = ({ brand }) => {
    const { brandname, image } = brand;
    return (
        <div className="card  w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='h-[300px] '/></figure>
            <div className="card-body bg-yellow-300">
                <h2 className="text-2xl text-yellow-950 font-bold text-center">{brandname}</h2>
            </div>
        </div>
    );
};

export default BrandCard;