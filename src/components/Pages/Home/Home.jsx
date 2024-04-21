import Banner from './Banner/Banner';
import Reviews from '../../Reviews/Reviews';
import Brands from '../../Brands/Brands';
import { useLoaderData } from 'react-router-dom';
import CountDown from '../../CountDown/CountDown'

const Home = () => {
    const brands = useLoaderData();

    const scrollToAvailable = () => {
        const element = document.getElementById("brands");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className='mt-20'>
            <Banner scrollToAvailable={scrollToAvailable} />
            <Reviews />
            <Brands brands={brands} />
            <CountDown />
        </div>
    );
};

export default Home;