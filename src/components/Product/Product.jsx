
const Product = ({product}) => {
    const {productName, productImage, description, price, category, brand, warranty, ratings, 
        creationDate} = product
    return (
    <div className="">
        <div className="border-[1px] border-slate-200 p-6 rounded-lg shadow-xl">
        <img className="rounded-lg w-full h-80" src={productImage} alt="" />
        <h1 className="text-xl font-semibold py-4">{productName}</h1>
        <p className="text-gray-500 pb-4 ">{description}</p>
        <hr />
        <div className="flex md:flex-row flex-col justify-between items-center py-3">
            <h2 className="">Category: {category}</h2>
            <h2 className="">Brand: {brand}</h2>
            <h2 className="">Price: ${price}</h2>
        </div>
        
        <hr />
        <div className="flex justify-between md:flex-row flex-col items-center py-3">
           
            <div className="flex items-center gap-2">
                Warranty: 
                <span>{warranty} Months</span>
            </div>
            <div className="flex items-center gap-2">
                <span>Launch Date:</span><span>{creationDate.slice(0, 10)}</span>
            </div>
            <div className="flex items-center gap-2">
                Rating: 
                <span>{ratings}</span>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Product;