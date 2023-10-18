import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="bg-[#D1D0D0]">
            <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
            <div className="max-w-6xl mx-auto font-poppins">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className="mx-auto text-center">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;