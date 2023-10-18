import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const PriveteRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <div className="flex justify-center my-24">
            <span className=" loading loading-spinner text-yellow-900 w-[100px]"></span>
        </div>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PriveteRoute;