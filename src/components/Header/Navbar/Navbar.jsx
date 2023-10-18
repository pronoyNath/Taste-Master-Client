import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut()
    }

    const links = <>
        <li className="">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending " : isActive ? "active bg-amber-900" : ""
                }
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/addproducts"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Add Product
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                My Cart
            </NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar  py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50">

                            {links}

                        </ul>
                    </div>
                    <Link to={'/'} >
                        <div className="flex items-center gap-2">
                        <img src="https://i.ibb.co/1bvwgTH/Taste-Logo-2.png" className="w-[120px] h-[60px] md:w-[100px] md:h-[80px] mb-4 md:mb-0" alt="" />
                        <h3 className="normal-case font-garamond text-2xl lg:text-3xl text-amber-900 font-semibold hidden md:block">Taste Masters Hub</h3>
                        </div>
                        
                        </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <div> */}
                    <div className="mr-1 text-xs">
                        <p>{user?.displayName}</p>
                        <p className="hidden lg:block">{user?.email}</p>
                    </div>
                   <div>
                   <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                        <div className="w-10 rounded-full">
                            <img src={user ? 
                            user?.photoURL ? user?.photoURL : "https://i.ibb.co/bghqWpR/user.png" 
                            : "https://i.ibb.co/bghqWpR/user.png"
                                 } />
                        </div>
                    </label>
                   </div>
                    {/* </div> */}
                    {
                        user ? <Link onClick={handleLogOut} className="py-2 px-6 text-white  rounded-md bg-amber-900">Logout</Link> :
                        <Link to={'/login'} className="py-2 px-6 text-white  rounded-md bg-amber-900">login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;