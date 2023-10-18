import { Link, useLocation } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCircleCheck } from "react-icons/fa6";
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const { user, signIn, googleSignIn } = useContext(AuthContext);
    

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
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex pt-0.5 items-center">
                                    <FaCircleCheck className=' h-[40px] w-[40px] text-green-500'></FaCircleCheck>
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        WoW!!!
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Account loged in!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex border-l border-blue-200">
                            <Link to={`${location?.state ? location.state : '/'}`}>
                                <button
                                    onClick={() => 
                                        toast.dismiss(t.id)
                                    }
                                    className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Close
                                </button>
                            </Link>
                        </div>

                    </div>
                ))

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

                //toast pop-up
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex pt-0.5 items-center">
                                <FaCircleCheck className=' h-[40px] w-[40px] text-green-500'></FaCircleCheck>
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        WoW!!!
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Account loged in!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex border-l border-blue-200">
                            <Link to={`${location?.state ? location.state : '/'}`}>
                                <button
                                    onClick={() => toast.dismiss(t.id)}
                                    className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Close
                                </button>
                            </Link>
                        </div>

                    </div>
                ))
            })
            .catch(err => {
                console.log(err);
                setLoginError(err.message)
            })
    }

    console.log(user);

    return (
        <div data-aos="zoom-in" className=" py-10">


            <div className="w-full max-w-sm p-4 drop-shadow-2xl  bg-white border border-gray-200 border-none sm:p-6 md:p-8 dark:bg-yellow-900 dark:border-gray-700 mx-auto">
                <form onSubmit={handleLogin} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Login to our platform</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />

                        <p className="text-center text-red-500  pt-1">{loginError}</p>
                    </div>
                    <div className='border-b mx-auto'>
                        <h3 className=' text-white text-center'>Or,</h3>
                        <div className='flex justify-center'>
                            <button onClick={handleGoogle} className="btn btn-md mt-5 btn-outline btn-warning mb-5">
                                <span className='text-2xl'><AiFillGoogleCircle></AiFillGoogleCircle></span> Login with gmail</button>
                        </div>
                    </div>

                    <button type="submit" className="w-full text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-500 ">Login your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to={'/register'} href="#" className=" text-yellow-500 text-xl">Create account</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;