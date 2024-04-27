import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
// import toast from "react-hot-toast";
// import { FaCircleCheck } from "react-icons/fa6";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const img = form.get('img');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, img, email, password);
        setRegisterError('');

        if (password.length < 6) {
            toast.error('Password is less than 6 characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error("Password should have at least one capital letter");
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast.error("Password should have at least one special character (#,*,&...etc)");
            return;
        }

        //creating user
        createUser(email, password)
            .then(() => {
                // Registration successful, update user profile
                return updateUserProfile(name, img);
            })
            .then(() => {
                console.log("done");
                //toast pop-up
                // toast.custom((t) => (
                //     <div
                //         className={`${t.visible ? 'animate-enter' : 'animate-leave'
                //             } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                //     >
                //         <div className="flex-1 w-0 p-4">
                //             <div className="flex items-start">
                //                 <div className="flex pt-0.5 items-center">
                //                     <FaCircleCheck className=' h-[40px] w-[40px] text-green-500'></FaCircleCheck>
                //                 </div>
                //                 <div className="ml-3 flex-1">
                //                     <p className="text-sm font-medium text-gray-900">
                //                         WoW!!!
                //                     </p>
                //                     <p className="mt-1 text-sm text-gray-500">
                //                         Account Create Successfully!
                //                     </p>
                //                 </div>
                //             </div>
                //         </div>

                //         <div className="flex border-l border-blue-200">
                //             <Link to={'/'}>
                //                 <button
                //                     onClick={() =>
                //                         toast.dismiss(t.id)
                //                     }
                //                     className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                //                 >
                //                     Close
                //                 </button>
                //             </Link>
                //         </div>

                //     </div>
                // ))
                Swal.fire({
                    title: "Account Created Successfully",
                    icon: "success"
                });

                navigate('/');
            })
            .catch((err) => {
                console.error(err);
                setRegisterError(err.message);
            });
    }

    return (
        <div className="w-full mx-auto lg:w-[1200px]   flex items-center justify-between  group text-orange my-20">
            <Toaster />
            <div className="w-1/2 min-h-full  relative overflow-hidden hidden lg:block">
                <img src="https://i.ibb.co/xsjQh04/log-in.png" alt="" className="" />
            </div>
            <form onSubmit={handleRegister} className="p-8 flex-1" id="registerForm">
                <h1 className="text-5xl pb-4">Register</h1>
                <p className="pb-10 text-right text-[#efbd42]">Already have an account? <Link to={"/login"} className="underline text-[#f72f43]">Log_in</Link></p>

                <div className="space-y-5">
                    <label htmlFor="name" className="block">Name</label>
                    <input id="name" name="name" type="text" placeholder="Enter your name" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-orange" required />

                    <label htmlFor="img" className="block">Image URL</label>
                    <input id="img" name="img" type="url" placeholder="https://www.xyz.png" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-orange" required />

                    <label htmlFor="email" className="block">Email</label>
                    <input id="email" name="email" type="email" placeholder="example@example.com" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-orange" required />

                    <label htmlFor="password" className="block">Password</label>
                    <input id="password" name="password" type="password" placeholder="********" minLength={5} className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-orange" required />
                </div>

                {/* button type will be submit for handling form submission*/}
                <button type="submit" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-orange before:block before:absolute before:translate-x-full before:inset-0 before:bg-orange before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 hover:text-black after:bg-orange relative inline-block z-50">Register</button>
            </form>


        </div>
    );
};
export default Register;