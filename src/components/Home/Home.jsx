
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';

const Home = () => {
    const brands = useLoaderData();
    console.log(brands);
    return (
        <div>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
        </div>
    );
};

export default Home;