import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content justify-evenly">
            <Link to="/">
            <nav>
                <img src="https://i.ibb.co/1bvwgTH/Taste-Logo-2.png" className="w-[200px] h-full" alt="" />
                
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
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;