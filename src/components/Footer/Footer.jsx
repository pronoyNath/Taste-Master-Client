import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import logo from '../../assets/animation/riding.json'


const Footer = () => {
    return (
        <footer className="footer text-white p-10  justify-evenly items-center text-2xl">
            <Link to="/">
                <nav>
                    {/* <img src="https://i.ibb.co/1bvwgTH/Taste-Logo-2.png" className="w-[200px] h-full" alt="" /> */}
                    <Player
                        autoplay
                        loop
                        src={logo}
                        speed={0.6}
                        className='w-[300px]'
                    >
                    </Player>
                </nav>
            </Link>
            <nav>

                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>

                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">No More policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;