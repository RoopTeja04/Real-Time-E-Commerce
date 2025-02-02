import React, { useState } from 'react';
import { useCart } from '../../Carts&Orders/cartContext';
import CricketBatsData from '../../ShopData/Sports/CricketBat';

const CricketBats = () => {
    
    const [ selectedNames, setSelectedNames ] = useState([]);
    const [ selectedRanges, setSelectedRanges ] = useState([]); 
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
        setSelectedRanges((selectedRanges) => 
            selectedRanges.includes(value) ?
            selectedRanges.filter((item) => item !== value):
            [...selectedRanges, value]
        )
    }

    const handleStarRating = (value) => {
        setSelectedRating((selectedRating) =>
            selectedRating.includes(value) ? 
            selectedRating.filter((item) => item !== value) :
            [...selectedRating, value] 
        );
    };



    const filteredData = CricketBatsData.filter((data) => {

        const matchName = 
            selectedNames.length === 0 ||
            selectedNames.some((item) => data.name.toLowerCase().includes(item.toLowerCase()));

        
        const MatchPrice = 
            selectedRanges.length === 0 || 
            selectedRanges.some((Price) => {
                const [ min, max ] = Price.split(" to ").map(Number);
                return data.price >= min && data.price <= max; 
            })

        const matchRange = 
            selectedRating.length === 0 || 
            selectedRating.some((range) => {
                const [ min, max ] = range.split(" to ").map(Number);
                return data.starRating >= min && data.starRating <= max;
            })
        
        return matchName && matchRange && MatchPrice;

    })

    return (
        <>
            <div className="min-h-screen flex flex-row w-full">
                <div className="flex flex-col border-r-2 w-1/6 px-4 py-4">
                    <p className="text-lg font-semibold">Product Name</p>
                        <label>
                            <input type='checkbox' value="SS" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">SS</span>
                        </label>
                        <label>
                            <input type='checkbox' value="MRF" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">MRF</span>
                        </label>
                        <label>
                            <input type='checkbox' value="GM" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">GM</span>
                        </label>
                        <label>
                            <input type='checkbox' value="Spartan" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">Spartan</span>
                        </label>
                        <label>
                            <input type='checkbox' value="Gray Nicolls" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">Gray Nicolls</span>
                        </label>
                        <label>
                            <input type='checkbox' value="CEAT" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">CEAT</span>
                        </label>
                        <label>
                            <input type='checkbox' value="Adidas" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">Adidas</span>
                        </label>
                        <label>
                            <input type='checkbox' value="New Balance" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">New Balance</span>
                        </label>
                        <label>
                            <input type='checkbox' value="Puma" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">Puma</span>
                        </label>
                        <label>
                            <input type='checkbox' value="SG" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">SG</span>
                        </label>
                        <label>
                            <input type='checkbox' value="Kookaburra" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">Kookaburra</span>
                        </label>
                        <label>
                            <input type='checkbox' value="DSC" onChange={(e) => handleNameChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">DSC</span>
                        </label>
                    <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
                        Price Range
                    </p>
                        <label>
                            <input type='checkbox' value="10000 to 13000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">₹ 10,000 to ₹ 13,000</span>
                        </label>
                        <label>
                            <input type='checkbox' value="7000 to 10000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">₹ 7,000 to ₹ 10,000</span>
                        </label>
                        <label>
                            <input type='checkbox' value="5000 to 7000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">₹ 5,000 to ₹ 7,000</span>
                        </label>
                    <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
                        Star Rating
                    </p>
                        <label>
                            <input type='checkbox' value="4.5 to 5" onChange={(e) => handleStarRating(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">4.5 to 5</span>
                        </label>
                        <label>
                            <input type='checkbox' value="4 to 4.5" onChange={(e) => handleStarRating(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">4 to 4.5</span>
                        </label>
                        <label>
                            <input type='checkbox' value="3.5 to 4" onChange={(e) => handleStarRating(e.target.value)} /> 
                            <span className="text-base tracking-wide pl-1">3.5 to 4</span>
                        </label>
                </div>
                <div className="flex flex-col px-8 py-8 w-full">
                    {filteredData.length > 0 ? (
                        <div className="grid grid-cols-4 gap-8">
                            {
                                filteredData.map((item) => (
                                    <div className="border rounded-lg p-6 flex flex-col items-center" key={item.id}>
                                        <img className="h-48 rounded" src={item.imageURL} alt={item.name} />
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

export default CricketBats