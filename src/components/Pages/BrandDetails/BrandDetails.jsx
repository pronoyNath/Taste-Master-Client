import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import ProductCard from "../../ProductCard/ProductCard";


const BrandDetails = () => {
    const { id } = useParams();
    const brands = useLoaderData();
    const [product, setProduct] = useState([]);
    const [loadedProducts, setLoadedProducts] = useState([]);

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
        <div className="min-h-[500px]">
            <div className="py-10">
                <Slider product={product}></Slider>
            </div>

            <h3 className='py-7 text-4xl font-bold text-yellow-900 text-center font-garamond'>Available Products</h3>

            {commonProducts.length > 0 ?
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                    {
                        commonProducts.map((commonProduct, idx) => <ProductCard key={idx} commonProduct={commonProduct}></ProductCard>)
                    }
                </div>
                :
                <img src="https://i.ibb.co/ZRQBp10/no-product-found-removebg-preview.png" className="mx-auto py-5" alt="" />

            }
        </div>
    );
};

export default BrandDetails;