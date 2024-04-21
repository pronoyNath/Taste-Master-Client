
import BrandCard from './BrandCard/BrandCard';

const Brands = ({brands}) => {
    return (
        <div id='brands' className='py-10 mt-32'>
            <h3 className='my-10 text-6xl font-bold text-orange text-center font-garamond'>Brand Names</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    brands.map(brand=><BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;