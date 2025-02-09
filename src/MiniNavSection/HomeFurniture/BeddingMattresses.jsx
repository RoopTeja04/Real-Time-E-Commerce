import React,{ useState } from 'react';
import { useCart } from '../../Carts&Orders/cartContext';
import beddingAndMattressesData from '../../ShopData/HomeFurniture/BeddingMattressesData';
import { useTheme } from '../../ContextAPI/ThemeContext';

const BeddingMattresses = () => {

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



    const filteredData = beddingAndMattressesData.filter((data) => {

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
                <div className={`flex flex-col border-r-2 w-1/6 px-4 py-4 ${ theme === "Light" ? "border-white" : "border-gray-900" }`}>
                <p className="text-lg font-semibold">Product Name</p>
                    <label>
                        <input type='checkbox' value="Sleepwell" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Sleepwell</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Springwel" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Springwel</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Sleepyhead" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Sleepyhead</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Kurlon" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Kurlon</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Wakefit" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Wakefit</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Peps" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Peps</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Duroflex" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Duroflex</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Flo" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Flo</span>
                    </label>
                    <label>
                        <input type='checkbox' value="SleepX" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">SleepX</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Urban Ladder" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Urban Ladder</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Bamboo" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Bamboo</span>
                    </label>
                    <label>
                        <input type='checkbox' value="The Sleep Company" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">The Sleep Company</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Coirfit" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Coirfit</span>
                    </label>
                    <label>
                        <input type='checkbox' value="Nilkamal" onChange={(e) => handleNameChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">Nilkamal</span>
                    </label>
                    <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
                        Price Range
                    </p>
                    <label>
                        <input type='checkbox' value="15000 to 20000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">₹15,000 to ₹20,000</span>
                    </label>
                    <label>
                        <input type='checkbox' value="10000 to 15000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">₹10,000 to ₹15,000</span>
                    </label>
                    <label>
                        <input type='checkbox' value="5000 to 10000" onChange={(e) => handleRangeChange(e.target.value)} /> 
                        <span className="text-base tracking-wide pl-1">₹5,000 to ₹10,000</span>
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
                                    <div className={`border-2 rounded-lg p-6 flex flex-col items-center ${ theme === "Light" ? "border-white" : "border-gray-900" }`} key={item.id}>
                                        <img className="h-48 rounded-lg" src={item.imageURL} alt={item.name} />
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

export default BeddingMattresses