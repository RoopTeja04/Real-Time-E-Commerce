import React, { useState } from 'react';
import AirpodsData from '../ShopData/Gadgets/AirPods';
import { useCart } from '../Carts&Orders/cartContext';

const Airpods = () => { 
    
    const [ selectedNames, setSelectedNames ] = useState([]);
    const [ selectedRating, setSelectedRating ] = useState([]);

    const { AddToCart } = useCart();

    const handleNameChange = (value) => {
        setSelectedNames((selectedNames) =>
            selectedNames.includes(value)
                ? selectedNames.filter((item) => item !== value)
                : [...selectedNames, value]
        );
    };

    const handleRangeChange = (value) => {

        setSelectedRating((selectedRating) =>
            selectedRating.includes(value) ? 
            selectedRating.filter((item) => item !== value) :
            [...selectedRating, value] 
        );

    };

    const filteredData = AirpodsData.filter((data) => {

        const matchName = 
            selectedNames.length === 0 ||
            selectedNames.some((item) => data.name.toLowerCase().includes(item.toLowerCase()));

        const matchRange = 
            selectedRating.length === 0 || 
            selectedRating.some((range) => {
                const [ min, max ] = range.split(" to ").map(Number);
                return data.price >= min && data.price <= max;
            })
        
        return matchName && matchRange;

    })

    return (
        <>
            <div className="min-h-screen flex flex-row w-full">
                <div className="flex flex-col border-r-2 w-1/6 px-4 py-4">
                    <label>
                        <input type='checkbox' value="Apple" onChange={(e) => handleNameChange(e.target.value)} /> 
                        apple
                    </label>
                    <label>
                        <input type='checkbox' value="boat" onChange={(e) => handleNameChange(e.target.value)} /> 
                        boat
                    </label>

                    <label>
                        <input type='checkbox' value="2000 to 5000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                        2,000 to 5,000
                    </label>
                </div>
                <div className="flex flex-col px-8 py-8 w-full">
                    {filteredData.length > 0 ? (
                        <div className="grid grid-cols-4 gap-8">
                            {
                                filteredData.map((item) => (
                                    <div className="border rounded-lg p-6 flex flex-col items-center" key={item.id}>
                                        <img className="h-36 rounded-lg" src={item.imageURL} alt={item.name} />
                                        <div className="flex flex-col items-center mt-4 border-t-2 outline-offset-8 w-full">
                                            <p className="mt-2 font-semibold text-lg tracking-wide">{item.name}</p>
                                            <span className="mt-1 text-lg tracking-wider">₹ {item.price.toLocaleString("hi-IN")} /-</span>
                                        </div> 
                                        <div className="flex flex-col space-y-3 mt-4">
                                            <button className="bg-yellow-500 h-10 w-full px-8 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer" onClick={() => AddToCart(item)}>Add To Cart</button>
                                            <button className="bg-green-500 h-10 w-full px-6 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer">Buy Now</button>
                                        </div>     
                                    </div>
                                ))
                            }
                        </div>
                        ) : (
                        <>
                            <div className="flex flex-col items-center mt-28">
                                <img 
                                    className="h-4/5 w-1/2"
                                    src={`https://www.new4you.in/img/no_products_found.png`} alt="No items found" 
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Airpods