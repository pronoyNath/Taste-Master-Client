import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../Header/Navbar/Navbar";
import { useState } from "react";


const MainLayout = () => {
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    }
    

    return (
        <div className={`${theme ?  'bg-gray-500' :'bg-[#D1D0D0]' } overflow-x-hidden`}>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="max-w-6xl mx-auto font-poppins">
                <Navbar theme={theme} handleTheme={handleTheme}></Navbar>
                <Outlet>
                </Outlet>
            </div>
            <div className="mx-auto text-center">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;