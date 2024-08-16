import { useEffect, useState } from "react";
import Product from "../Product/Product";
import axios from "axios";

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = `http://localhost:5000/products`;
    useEffect(() => {
        axios(url)
            .then(data => {
                setProducts(data.data)
                setLoading(false)
            })
    }, [url])

    if (loading) {
        return <span className="loading loading-ring w-[200px] flex justify-center items-center mt-16 mx-auto"></span>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default HomeProducts;