import { FaMapPin, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CartCard = ({ cart, cartList, setCartList }) => {
    const { _id, productName, brandName, type, price, shortDescription, rating, image } = cart;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-side-sandy.vercel.app/cart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = cartList.filter(product => product._id !== id)
                            setCartList(remaining)
                        }
                    })
            }
        })
    }


    return (
        <div>

            <li className="flex flex-col py-10 sm:flex-row sm:justify-between px-20  transition-all duration-300 ease-in-out">
                <div className="flex w-full space-x-2 sm:space-x-4 group/nath " >
                    <img className="group-hover/nath:scale-125 transition-all duration-500 ease-in-out group-hover/nath:rotate-12 group-hover/nath:mr-7 flex-shrink-0 object-cover h-32 border-transparent rounded outline-none sm:w-32 sm:h-32 " src={image} alt="" />
                    <div className="flex flex-col justify-between w-full pb-4 " >
                        <div className="md:flex justify-between w-full pb-2 space-x-2" >
                            <div className="space-y-1" >
                                <h3 className="text-lg font-semibold text-orange sm:pr-8">{brandName}</h3>
                                <p className="text-base text-gray-200">Product Name: {productName}</p>
                                <p className="text-base text-gray-200">Type: {type}</p>
                                <p className="text-base text-gray-200">Describtion: {shortDescription}</p>
                                {/* <p className="text-base text-gray-400">Total Days: {totalDays}</p> */}
                            </div>
                            <div className="text-right" >
                                <div className="md:flex text-[#ffca28] hover:text-[#ffd965] divide-x text-xl" >
                                    <Link to={"/fun"}>
                                        <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                        <FaMoneyCheckAlt />
                                            <span>Buy</span>
                                        </button>
                                    </Link>

                                    <button onClick={() => handleDelete(_id)} type="button" className="flex items-center px-2 py-1 pl-1 space-x-1 text-[#f72f43] hover:text-[#ee7c7c] ease-in-out duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                            <rect width="32" height="200" x="168" y="216"></rect>
                                            <rect width="32" height="200" x="240" y="216"></rect>
                                            <rect width="32" height="200" x="312" y="216"></rect>
                                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                        </svg>
                                        <span>Delete</span>
                                    </button>


                                </div>
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-orange">Total Price: {price}</p>

                    </div>
                </div>
            </li>


        </div>
    );
};

export default CartCard;