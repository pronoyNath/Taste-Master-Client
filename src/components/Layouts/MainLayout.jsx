import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;