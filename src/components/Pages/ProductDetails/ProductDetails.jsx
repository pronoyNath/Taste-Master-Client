import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const product = useLoaderData();
    const { productName, brandName, type, price, shortDescription, rating, image } = product;

    const handleCart = () => {
        const newCart = { productName, brandName, type, price, shortDescription, rating, image };
        
        
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!!!',
                        text: 'Product added to the cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg mb-10">
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img className="h-[300px] w-[300px] mx-auto"
                    src={image}
                    alt="ui/ux review check"
                />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Brand: {brandName}
                </h5>
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Product Name: {productName}
                </h5>
                <p className="block font-poppins text-base antialiased font-medium leading-relaxed text-inherit ">
                    Type:  {type}
                </p>
                <p className="block font-poppins text-base antialiased font-medium leading-relaxed text-inherit">
                    Price:  {price}
                </p>
                <p className="block font-poppins text-base antialiased font-medium leading-relaxed text-inherit">
                    Rating:  {rating}/5
                </p>
                <p className="block font-poppins text-base antialiased font-medium leading-relaxed text-inherit">
                    Description: {shortDescription}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button onClick={handleCart}
                    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;