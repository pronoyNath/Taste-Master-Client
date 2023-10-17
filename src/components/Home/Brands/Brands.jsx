
import BrandCard from './BrandCard/BrandCard';

const Brands = ({brands}) => {
    return (
        <div className='py-10'>
            <h3 className='py-7 text-4xl font-bold text-yellow-900 text-center font-garamond'>Brand Names</h3>
            <div className='grid grid-cols-3 gap-7'>
                {
                    brands.map(brand=><BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;