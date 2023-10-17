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
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setLoadedProducts(data));
    }, [])

    useEffect(() => {
        const matchedProducts = loadedProducts.filter(load => load.brandName == product.brandName)
        setCommonProducts(matchedProducts)
    }, [loadedProducts, product])

    return (
        <div className="min-h-[500px]">
            <div className="py-10">
                <Slider product={product}></Slider>
            </div>
            <div className="grid grid-cols-3 gap-5 py-10">
                {
                    commonProducts.map((commonProduct,idx) =><ProductCard key={idx} commonProduct={commonProduct}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default BrandDetails;