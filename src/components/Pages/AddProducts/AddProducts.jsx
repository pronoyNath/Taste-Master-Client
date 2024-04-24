// import Swal from 'sweetalert2';
// import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import WaterDropGrid from "./BannerBg";
// import { useRef } from "react";

const AddProducts = () => {
    // const constraintsRef = useRef(null)
    const navigate = useNavigate();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.img.value;
        const newProduct = { productName, brandName, type, price, shortDescription, rating, image };
        console.log(newProduct);

        fetch('https://server-side-sandy.vercel.app/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!!!',
                        text: 'New Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                    navigate('/');
                }
            })

    }

    return (
        <div className='mt-10 mb-10 max-w-screen-xl mx-auto md:px-4'>

            <div>
                <div className="relative">
                    <WaterDropGrid />
                    <div className="absolute top-20 right-0 ">
                    <h3 className='font-semibold  text-4xl lg:text-6xl text-orange mb-5 text-right animate__animated animate__bounceInRight animate__slow'>Add a Product</h3>
                    <p className="font-semibold  text-[#ffca28] text-5xl animate__animated animate__bounceInRight animate__slow">For Any Brand <br /> <span className="text-[#f72f43] ml-52 animate__animated animate__bounceInRight animate__slower">Related Product</span></p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleAddProduct} className='space-y-10 text-orange mt-12'>
                <div className='md:flex justify-center gap-5'>
                    <div className="md:w-1/2">
                        <label htmlFor="" className="">Product Name</label> <br />
                        <input className="input input-bordered w-full" name='productName' placeholder="Product Name" required />
                    </div>
                    <div className="md:w-1/2">
                        <label htmlFor="">Brand Name</label>  <br />

                        <select name="brandName" id="brandName" className="input input-bordered w-full" required>
                            <option value="" >Select a Brand</option>
                            <option value="The Coca-Cola Company">The Coca-Cola Company</option>
                            <option value="McDonald's">McDonald's</option>
                            <option value="Starbucks">Starbucks</option>
                            <option value="PepsiCo">PepsiCo</option>
                            <option value="Red Bull">Red Bull</option>
                            <option value="Nestlé">Nestlé</option>
                        </select>


                    </div>
                </div>

                <div className='md:flex justify-center gap-5'>
                    <div className="md:w-1/2">
                        <label htmlFor="">Type</label> <br />
                        <input className="input input-bordered w-full" name='type' placeholder="Type" required />
                    </div>
                    <div className="md:w-1/2">
                        <label htmlFor="">Price</label>  <br />
                        <input className="input input-bordered w-full" name='price' placeholder="Price" required />
                    </div>
                </div>

                <div className='md:flex justify-center gap-5'>
                    <div className="md:w-1/2">
                        <label htmlFor="">Short Description</label> <br />
                        <input className="input input-bordered w-full" name='shortDescription' required placeholder="Short Description" />
                    </div>
                    <div className="md:w-1/2">
                        <label htmlFor="rating">Rating</label><br />
                        <select className="input input-bordered w-full" name="rating" id="rating" required>
                            <option value="">Select a Rating</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                </div>

                <div className="w-full">
                    <label htmlFor="">Photo URL</label> <br />
                    <input className="input input-bordered w-full" name='img' placeholder="Photo URL" required />
                </div>
                {/* <input className='btn bg-orange border-none hover:bg-[#42b263] transition duration-300 ease-in-out text-white w-full' type="submit" value="Add Product" /> */}

                <div className=" flex items-center justify-center">
                <button type="submit" className="px-6 py-4  bg-orange w-full   my-10 rounded-xl  transition-all shadow-[5px_5px_0px_white] hover:shadow-none hover:translate-x-[3px] text-3xl font-bold text-[#232222] hover:translate-y-[3px]">
                    Add Product
                </button>
            </div>

            </form>
        </div>
    );
};

export default AddProducts;