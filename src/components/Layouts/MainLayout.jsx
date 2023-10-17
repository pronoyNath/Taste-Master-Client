import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
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