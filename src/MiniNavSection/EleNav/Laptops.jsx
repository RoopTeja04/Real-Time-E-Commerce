import React, { useState } from 'react';
import LaptopsData from '../../ShopData/Electronics/Laptop';
import { useCart } from '../../Carts&Orders/cartContext';
import { useTheme } from '../../ContextAPI/ThemeContext';

const Laptops = () => {
    const [selectedNames, setSelectedNames] = useState([]);
    const [selectedRanges, setSelectedRanges] = useState([]);
    const [selectedRating, setSelectedRating] = useState([]);

    const { AddToCart } = useCart();
    const { theme } = useTheme();

    const handleNameChange = (value) => {
        setSelectedNames((selectedNames) =>
            selectedNames.includes(value)
                ? selectedNames.filter((item) => item !== value)
                : [...selectedNames, value]
        );
    };

    const handleRangeChange = (value) => {
        setSelectedRanges((selectedRanges) =>
            selectedRanges.includes(value)
                ? selectedRanges.filter((range) => range !== value)
                : [...selectedRanges, value]
        );
    };

    const handleStarRating = (value) => {
        setSelectedRating((selectedRating) => 
            selectedRating.includes(value) ?
            selectedRating.filter((item) => item !== value):
            [...selectedRating, value]
        );
    };


    const filteredData = LaptopsData.filter((data) => {
        
        const matchName = 
            selectedNames.length === 0 ||
            selectedNames.some((item) => data.name.toLowerCase().includes(item.toLowerCase()));

        const matchRange =
            selectedRanges.length === 0 ||
            selectedRanges.some((range) => {
                const [min, max] = range.split(" to ").map(Number);
                return data.price >= min && data.price <= max;
            });
        
        const matchRating = 
            selectedRating.length === 0 || 
            selectedRating.some((rating) => {
                const [ min, max ] = rating.split(" to ").map(Number);
                return data.rating >= min && data.rating <= max;
            })

        return matchName && matchRange && matchRating;
    });

    return (
        <div className="min-h-screen flex flex-row w-full">
            <div className={`flex flex-col border-r-2 w-1/6 px-4 py-4 ${ theme === "Light" ? "border-gray-100" : "border-gray-900"}`}>
                <div className="flex flex-col w-full">
                    <p className="text-lg font-semibold">Product Name</p>
                    <label>
                        <input type="checkbox" value="HP" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1" >Redmi</span>
                    </label>
                    <label>
                        <input type="checkbox" value="ASUS" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1" >ASUS </span>
                    </label>
                    <label>
                        <input type="checkbox" value="Lenovo" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1" >Lenovo</span>
                    </label>
                    <label>
                        <input type="checkbox" value="Dell" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1" >Dell</span>
                    </label>
                    <label>
                        <input type="checkbox" value="Apple" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1" >Apple</span>
                    </label>
                    <label>
                        <input type="checkbox" value="Microsoft" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1" >Microsoft</span>
                    </label>
                    <label>
                        <input type="checkbox" value="Mi" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1" >Mi</span>
                    </label>
                    <label>
                        <input type="checkbox" value="Samsung" onChange={(e) => handleNameChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1" >Samsung</span>
                    </label>
                </div>
                <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
                    Price Range
                </p>
                <div className='flex flex-col w-full'>
                    <label>
                        <input type='checkbox' value="70000 to 100000" onChange={(e) => handleRangeChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">₹ 70,000 to ₹ 1,00,000</span>
                    </label>
                    <label>
                        <input type='checkbox' value="55000 to 70000" onChange={(e) => handleRangeChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">₹ 55,000 to ₹ 70,000</span>
                    </label>
                    <label>
                        <input type='checkbox' value="40000 to 55000" onChange={(e) => handleRangeChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">₹ 40,000 to ₹ 55,000</span>
                    </label>
                    <label>
                        <input type='checkbox' value="25000 to 40000" onChange={(e) => handleRangeChange(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">₹ 25,000 to ₹ 40,000</span>
                    </label>
                </div>
                <div className='flex flex-col w-full'>
                <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
                    Star Rating
                </p>
                    <label>
                        <input type='checkbox' value="4.0 to 5" onChange={(e) => handleStarRating(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">4.0 to 5</span>
                    </label>
                    <label>
                        <input type='checkbox' value="3.0 to 4.0" onChange={(e) => handleStarRating(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">3.0 to 4.0</span>
                    </label>
                    <label>
                    <input type='checkbox' value="2.0 to 3.0" onChange={(e) => handleStarRating(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">2.0 to 3.0</span>
                    </label>
                    <label>
                    <input type='checkbox' value="1.0 to 2.0" onChange={(e) => handleStarRating(e.target.value)} />
                        <span className="text-base tracking-wide pl-1">1.0 to 2.0</span>
                    </label>
                </div>
            </div>
            <div className="flex flex-col px-8 py-8 w-full">
                {filteredData.length > 0 ? (
                    <div className="grid grid-cols-4 gap-8">
                        {
                            filteredData.map((item) => (
                                <div className={`border-2 rounded-lg p-6 flex flex-col items-center ${ theme === "Light" ? "border-gray-100" : "border-gray-900"}`} key={item.id}>
                                    <img className="h-36 rounded-lg" src={item.imageURL} alt={item.name} />
                                    <div className={`flex flex-col items-center mt-4 ${ theme === "Light" ? "border-gray-100" : "border-gray-900"} border-t-2 outline-offset-8 w-full`}>
                                        <p className="mt-2 font-semibold text-lg tracking-wide">{item.name}</p>
                                        <span className="mt-1 text-lg tracking-wider">₹ {item.price.toLocaleString("hi-IN")} /-</span>
                                    </div> 
                                    <div className="flex flex-col space-y-3 mt-4">
                                        <button className="bg-yellow-500 h-10 w-full px-8 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer hover:bg-yellow-600 transition-all duration-300 ease-linear" onClick={() => AddToCart(item)}>Add To Cart</button>
                                        <button className="bg-green-500 h-10 w-full px-6 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer hover:bg-green-700 transition-all duration-300 ease-linear">Buy Now</button>
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
    );
};

export default Laptops;