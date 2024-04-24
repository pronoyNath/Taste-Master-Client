import { useEffect, useRef, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import BrandCarousel from "./BrandCarousel/BrandCarousel";
import { Player } from "@lottiefiles/react-lottie-player";
import hidden from "../../../assets/animation/hidden.json"
import { motion } from "framer-motion";


const BrandDetails = () => {
    const { id } = useParams();
    const brands = useLoaderData();
    const [product, setProduct] = useState([]);
    const [loadedProducts, setLoadedProducts] = useState([]);
    const constraintsRef = useRef(null)

    const [commonProducts, setCommonProducts] = useState([]);
   

    useEffect(() => {
        const findProduct = brands.find(brand => brand.id == id)
        // console.log(findProduct);
        setProduct(findProduct);

    }, [id, brands])

    useEffect(() => {
        fetch('https://server-side-sandy.vercel.app/products')
            .then(res => res.json())
            .then(data => setLoadedProducts(data));
    }, [])

    useEffect(() => {
        const matchedProducts = loadedProducts.filter(load => load.brandName == product.brandName)
        setCommonProducts(matchedProducts)
    }, [loadedProducts, product])
    console.log(commonProducts);

    return (
        <div className="min-h-[500px]  max-w-screen-xl mx-auto md:px-4">
            {/* <div className="py-10">
                <Slider product={product}></Slider>
            </div> */}
            <BrandCarousel product={product} />
            <div className="-mt-96">

                <h3 className='py-7 text-6xl font-bold text-orange text-center font-garamond'>Available Products</h3>

                {commonProducts.length > 0 ?
                    <div className="grid grid-col-1 md:grid-cols-2  gap-20 py-20">
                        {
                            commonProducts.map((commonProduct, idx) => <ProductCard key={idx} commonProduct={commonProduct}></ProductCard>)
                        }
                    </div>
                    :
                    <motion.div ref={constraintsRef} className="">
                        <div className="">
                            <motion.div
                                drag
                                dragConstraints={constraintsRef}
                                className=""
                            >

                            <Player
                                autoplay
                                loop
                                src={hidden}
                                speed={0.6}
                                className=' w-[400px] py-16 cursor-move'
                            />
                            </motion.div>
                            <h3 className="font-semibold text-4xl text-red-500 text-center pb-10 -mt-10  ">No Product Available</h3>


                        </div>
                    </motion.div>

                }
            </div>
        </div>
    );
};

export default BrandDetails;