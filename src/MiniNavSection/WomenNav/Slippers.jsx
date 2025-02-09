import React, { useState } from 'react';
import { useCart } from '../../Carts&Orders/cartContext';
import SlippersData from '../../ShopData/LadiesWear/Slippers';
import { useTheme } from '../../ContextAPI/ThemeContext';

const Slippers = () => {
        
    const [ selectedNames, setSelectedNames ] = useState([]);
    const [ selectedRanges, setSelectedRanges ] = useState([]); 
    const [ selectedRating, setSelectedRating ] = useState([]);

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



    const filteredData = SlippersData.filter((data) => {

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
                <div className={`flex flex-col border-r-2 w-1/5 px-4 py-4 ${ theme === "Light" ? "border-white" : "border-gray-900" }`}>
                <p className="text-lg font-semibold">Product Name</p>
                    <label>
                        <input type='checkbox' value="Catwalk Women's Block Heel Sandals" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Catwalk Sandals</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Bata Women's Wedge Sandals" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Bata Sandals</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Metro Women's Stilettos" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Metro Stilettos</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Hush Puppies Women's Flat Slippers" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Hush Puppies</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Crocs Women's LiteRide Sandals" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Crocs Sandals</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Mochi Women's Heels" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Mochi Heels</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Liberty Women's Comfort Sandals" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Liberty Sandals</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Red Tape Women's Wedge Sandals" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Red Tape Wedges</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Aldo Women's Strappy Heels" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Aldo Heels</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Ajanta Women's Platform Heels" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Ajanta Platforms</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Campus Women's Slip-on Sandals" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Campus Sandals</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Steve Madden Women's High Heel Sandals" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Steve Madden</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Bata Women's Ballerina Flats" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Bata Flats</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Van Heusen Women's Slingback Heels" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Van Heusen Slingbacks</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Khadim's Women's Slip-on Heels" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Khadim's Heels</span>
                    </label>
                    <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
                        Price Range
                    </p>
                    <label>
                        <input type='checkbox' value="2000 to 3000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">₹2,000 to ₹3,000</span>
                    </label>
                    <label>
                        <input type='checkbox' value="1000 to 2000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">₹1,000 to ₹2,000</span>
                    </label>
                    <label>
                        <input type='checkbox' value="500 to 1000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">₹500 to ₹1,000</span>
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
                    <label>
                        <input type='checkbox' value="3 to 3.5" onChange={(e) => handleStarRating(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">3 to 3.5</span>
                    </label>
                </div>
                <div className="flex flex-col px-8 py-8 w-full">
                    {filteredData.length > 0 ? (
                        <div className="grid grid-cols-4 gap-8">
                            {
                                filteredData.map((item) => (
                                    <div className={`border-2 rounded-lg p-6 flex flex-col items-center ${ theme === "Light" ? "border-white" : "border-gray-900" }`} key={item.id}>
                                        <img className="h-32 rounded-lg" src={item.imageURL} alt={item.name} />
                                        <div className={`flex flex-col items-center mt-4 border-t-2 outline-offset-8 w-full ${ theme === "Light" ? "border-white" : "border-gray-900" }`}>
                                            <p className="mt-2 font-semibold text-lg tracking-wide">{item.shortName}</p>
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

export default Slippers