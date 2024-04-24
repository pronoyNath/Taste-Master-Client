import Banner from './Banner/Banner';
import Reviews from '../../Reviews/Reviews';
import Brands from '../../Brands/Brands';
import { useLoaderData } from 'react-router-dom';
import CountDown from '../../CountDown/CountDown'
import { GroupLinks } from '../../GroupLinks/GroupLinks';
import { StylishNavbar } from '../../StylishNavbar/StylishNavbar';

const Home = () => {
    const brands = useLoaderData();

    const scrollToAvailable = () => {
        const element = document.getElementById("brands");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div>
            <div className='mt-20 max-w-screen-xl mx-auto md:px-4'>
                <Banner scrollToAvailable={scrollToAvailable} />
                <Reviews />
                <Brands brands={brands} />
                <CountDown />
            </div>
            <div>
                <StylishNavbar/>
            
            </div>
        </div>

    );
};

export default Home;