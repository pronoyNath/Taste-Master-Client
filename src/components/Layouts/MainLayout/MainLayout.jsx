// import { Outlet } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import { Toaster } from "react-hot-toast";
// import Navbar from "../Header/Navbar/Navbar";
// import { useState } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../../ShareComponents/Navbar/Navbar";
import { useState } from "react";
import Footer from "../../Footer/Footer";


const MainLayout = () => {
    const [theme, setTheme] = useState(true);

    const handleTheme = () => {
        setTheme(!theme);
        console.log(theme, "jdkjfkj");
    }


    return (
        <div
            className={`${theme ? 'bg-[#0a0909] ' : 'bg-[#D1D0D0]'} overflow-x-hidden min-h-screen`}
        >
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
            <div className='max-w-screen-xl mx-auto md:px-4'>
                <Navbar
                    theme={theme} handleTheme={handleTheme}
                ></Navbar>
                <Outlet />
            </div>
            <div className="mx-auto bg-[#191616] text-center">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;