// import { Link, useLocation } from 'react-router-dom';
// import { AiFillGoogleCircle } from "react-icons/ai";
// import { useContext, useState } from 'react';
// import toast from 'react-hot-toast';
// import { FaCircleCheck } from "react-icons/fa6";
// import { AuthContext } from '../../../Provider/AuthProvider';

import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaCircleCheck } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import Swal from "sweetalert2";

const Login = () => {
    const { user, signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const location = useLocation();
    // console.log(location);
    // const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        //clear error
        setLoginError('')


        // log in 
        signIn(email, password)
            .then(result => {
                console.log(result);

                //toast pop-up
                Swal.fire({
                    title: "Logged In Successfully",
                    icon: "success"
                });

                navigate(location?.state ? location?.state : '/')

            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message)

            })

    }

    //login by google
    const handleGoogle = () => {
        googleSignIn()
            .then(re => {
                console.log(re);
                Swal.fire({
                    title: "Logged In Successfully",
                    icon: "success"
                });

                navigate(location?.state ? location?.state : '/')
            })
            .catch(err => {
                console.log(err);
                setLoginError(err.message)
            })
    }

    console.log(user);

    return (
        <div className=" py-10">
            <div className="w-full mx-auto lg:w-[1200px] flex items-center justify-between  group text-orange my-20">
                <Toaster />
                <div className="w-1/2 min-h-full  relative overflow-hidden hidden lg:block">
                    <img src="https://i.ibb.co/xsjQh04/log-in.png" alt="" className="" />
                </div>
                <div className="  flex-1">
                    <form onSubmit={handleLogin} className="p-8 pb-4 flex-1" id="registerForm">
                        <h1 className="text-5xl pb-4">Log In</h1>
                        <p className="pb-10 text-right text-[#efbd42]">Create an account? <Link to={"/register"} className="underline text-[#f72f43]">Register</Link></p>

                        <div className="space-y-5">

                            <label htmlFor="email" className="block">Email</label>
                            <input id="email" name="email" type="email" placeholder="example@example.com" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-orange" required />

                            <label htmlFor="password" className="block">Password</label>
                            <input id="password" name="password" type="password" placeholder="********" minLength={5} className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-orange" required />



                        </div>

                        {/* button type will be submit for handling form submission*/}
                        <button type="submit" className="w-full py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-orange before:block before:absolute before:translate-x-full before:inset-0 before:bg-orange before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 hover:text-black after:bg-orange relative inline-block z-50">Log in</button>
                    </form>
                    <div className=' mx-auto'>
                        <h3 className=' text-red-500 text-center divider uppercase'>Or</h3>
                        <div className='flex justify-center'>
                            <button onClick={handleGoogle} className="btn btn-md lg:btn-lg mt-5 btn-outline btn-warning mb-5 transition-all  duration-200 ease-in-out">
                                <span className='text-5xl'><AiFillGoogleCircle></AiFillGoogleCircle></span> Login with gmail</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Login;