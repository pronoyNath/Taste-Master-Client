import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";


const BrandDetails = () => {
    const { id } = useParams();
    const brands = useLoaderData();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const findProduct = brands.find(brand => brand.id == id)
        // console.log(findProduct);
        setProduct(findProduct);

    }, [id, brands])


    return (
        <div className="min-h-[500px]">
            <div className="py-10">
            <Slider product={product}></Slider>  
            </div>
        </div>
    );
};

export default BrandDetails;