import { useEffect, useState } from "react";
import Product from "../Product/Product";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('');
    const [sort, setSort]=useState('');
    const [brand, setBrand]=useState('');
    const [category, setCategory]=useState('');
    const [priceRange, setPriceRange]=useState('');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const url = `https://appliance-arena-server-new.vercel.app/products?search=${search}&page=${currentPage}&size=${itemsPerPage}&sort=${sort}&brand=${brand}&category=${category}&priceRange=${priceRange}`;
    useEffect(() => {
        axios(url)
            .then(data => {
                setProducts(data.data)
                setLoading(false)
            })
    }, [search, currentPage, url, sort, brand, category, priceRange])

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(
                `https://appliance-arena-server-new.vercel.app/productcount?search=${search}&priceRange=${priceRange}&brand=${brand}&category=${category}`
            )

            setCount(data.count)
            setCurrentPage(1)
        }
        getCount()
    }, [search, priceRange, brand, category])

    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(p => p + 1);

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
        setCurrentPage(0)
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handleSort=e=>{
        setSort(e.target.value);
        console.log(e.target.value)
    }
    const handleBrand=e=>{
        setBrand(e.target.value);
        console.log(e.target.value)
    }
    const handleCategory=e=>{
        setCategory(e.target.value);
        console.log(e.target.value)
    }
    const handlePriceRange=e=>{
        setPriceRange(e.target.value);
        console.log(e.target.value)
    }

    if (loading) {
        return <span className="loading loading-ring w-[200px] flex justify-center items-center mt-16 mx-auto"></span>
    }

    return (
        <div className="my-10 max-w-6xl mx-auto px-2">

         <div className="flex flex-col md:flex-row  gap-4 md:gap-20  justify-around mb-6">
               {/* sort */}
            <select onChange={handleSort} className="w-full lg:w-72 select select-bordered" name="sort">
                <option value="sort" disabled selected>Sort</option>
                <option value="low">Low to High Price</option>
                <option value="high">High to Low Price</option>
                <option value="new">Newest First</option>
            </select>

            {/* Categorization */}
            <div className="flex">
            <select onChange={handleBrand} className="w-full lg:w-36 select select-bordered" name="sort">
                <option value="sort" disabled selected>Brand</option>
                <option value="Samsung">Samsung</option>
                <option value="Singer">Singer</option>
                <option value="Walton">Walton</option>
                <option value="Philips">Philips</option>
                <option value="Sony">Sony</option>
            </select>
            <select onChange={handleCategory} className="w-full lg:w-36 select select-bordered" name="sort">
                <option value="sort" disabled selected>Category</option>
                <option value="Kitchen Appliances">Kitchen Appliances</option>
                <option value="Refrigerators">Refrigerators</option>
                <option value="Televisions">Televisions</option>
                <option value="Air Conditioners">Air Conditioners</option>
                <option value="Microwaves">Microwaves</option>
                <option value="Air Purifiers">Air Purifiers</option>
                <option value="Home Theater Systems">Home Theater Systems</option>
                <option value="Speakers">Speakers</option>
                <option value="Vacuum Cleaners">Vacuum Cleaners</option>
                <option value="Headphones">Headphones</option>
                <option value="Smart Home Devices">Smart Home Devices</option>
                <option value="Sewing Machines">Sewing Machines</option>
                <option value="Irons">Irons</option>
                <option value="Coffee Makers">Coffee Makers</option>
                <option value="Dishwashers">Dishwashers</option>
                <option value="Washing Machines">Washing Machines</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Ceiling Fans">Ceiling Fans</option>
                <option value="Audio Devices">Audio Devices</option>
            </select>
            <select onChange={handlePriceRange} className="w-full lg:w-36 select select-bordered" name="sort">
                <option value="sort" disabled selected>Price Range</option>
                <option value="below">Below $1000</option>
                <option value="between">$1000 to $2000</option>
                <option value="above">Above $2000</option>
            </select>
            </div>
            
            {/* search */}
            <form onSubmit={handleSearch}>
                <div className="w-full mb-6 mx-auto">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="search" className="grow" placeholder="Search" />
                        <button className="btn btn-sm px-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                    </label>
                </div>
            </form>
         </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>

            <div className="flex justify-center items-center mt-10">
                <button onClick={handlePrev} className="btn mr-2 bg-slate-300 btn-sm">Prev</button>
                {
                    pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage === page ? 'bg-[#9ACCC9] btn text-white mr-2 btn-sm' : 'btn bg-gray-800 mr-2 text-white btn-sm'} key={page}>{page}</button>)
                }
                <button onClick={handleNext} className="btn ml-2 bg-slate-300 btn-sm">Next</button>
            </div>
        </div>
    );
};

export default Products;