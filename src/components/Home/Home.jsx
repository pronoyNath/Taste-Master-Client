
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import Reviews from './Reviews/Reviews';
import BestSell from './BestSell/BestSell';

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <Reviews></Reviews>
            <BestSell></BestSell>
        </div>
    );
};

export default Home;