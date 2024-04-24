import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, productName, brandName, type, price, shortDescription, rating, image } = product;
    // console.log(product);

    const navigate = useNavigate();
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.img.value;
        const updateProduct = { productName, brandName, type, price, shortDescription, rating, image };
        console.log(updateProduct);

        fetch(`https://server-side-sandy.vercel.app/details/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!!!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate("/");
                }
            })
            .catch(err => { alert(err); })

    }

    return (
        <div className='p-10 lg:p-24 mb-10'>
            <h3 className='text-2xl lg:text-6xl text-orange font-extrabold mb-10 text-center'>Update Product</h3>

            <form onSubmit={handleUpdate} className='space-y-10 text-orange'>
                <div className='md:flex justify-center gap-5'>
                    <div className="md:w-1/2">
                        <label htmlFor="">Product Name</label> <br />
                        <input className="input input-bordered w-full" name='productName' placeholder="Product Name" defaultValue={productName} required />
                    </div>
                    <div className="md:w-1/2">
                        <label htmlFor="">Brand Name</label>  <br />

                        <select name="brandName" id="brandName" className="input input-bordered w-full" defaultValue={brandName} required>
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
                        <input className="input input-bordered w-full" name='type' placeholder="Type" defaultValue={type} required />
                    </div>
                    <div className="md:w-1/2">
                        <label htmlFor="">Price</label>  <br />
                        <input className="input input-bordered w-full" name='price' placeholder="Price" defaultValue={price} required />
                    </div>
                </div>

                <div className='md:flex justify-center gap-5'>
                    <div className="md:w-1/2">
                        <label htmlFor="">Short Description</label> <br />
                        <input className="input input-bordered w-full" name='shortDescription' defaultValue={shortDescription} required placeholder="Short Description" />
                    </div>
                    <div className="md:w-1/2">
                        <label htmlFor="rating">Rating</label><br />
                        <select className="input input-bordered w-full" name="rating" id="rating" defaultValue={rating} required>
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
                    <input className="input input-bordered w-full" name='img' placeholder="Photo URL" defaultValue={image} required />
                </div>
                {/* <input className='btn bg-yellow-900 text-white w-full' type="submit" value="Update Product" /> */}
            <div className=" flex items-center justify-center">
                <button type="submit" className="px-6 py-4  bg-orange w-full   my-10 rounded-xl  transition-all shadow-[5px_5px_0px_white] hover:shadow-none hover:translate-x-[3px] text-3xl font-bold text-[#232222] hover:translate-y-[3px]">
                    Update Product
                </button>
            </div>
            </form>
        </div>
    );
};

export default UpdateProduct;