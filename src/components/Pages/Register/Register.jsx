import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaCircleCheck } from "react-icons/fa6";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    // const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const img = form.get('img');
        const email = form.get('email');
        const password = form.get('password');

        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError("Password should have at least one capital letter");
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setRegisterError("Password should have at least one special character (#,*,&...etc)");
            return;
        }

        //creating user
        createUser(email, password)
        .then(() => {
            // Registration successful, update user profile
            return updateUserProfile(name, img);
        })
        .then(() => {

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
                                    Account Create Successfully!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex border-l border-blue-200">
                        <Link to={'/'}>
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

            // navigate('/');
        })
        .catch((err) => {
            console.error(err);
            setRegisterError(err.message);
        });
    }

    return (
        <div data-aos="zoom-in" className="py-10">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 drop-shadow-2xl sm:p-6 md:p-8 dark:bg-pink-500 pt-2 mx-auto">
                <form onSubmit={handleRegister} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-center">Register to our platform</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Your Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Your Image URL</label>
                        <input type="text" name="img" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="your image URL" required />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium ">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@gmail.com" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium ">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>

                        <p className="text-center pt-1 text-blue-900">{registerError}</p>
                    </div>
                    
                    <button type="submit" className="w-full text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-500 ">Register your account</button>
                    <div className="text-sm font-medium">
                        Already Have an account? <Link to={"/login"} href="#" className="text-blue-700 hover:underline dark:text-blue-700 text-lg">Login account</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};
export default Register;