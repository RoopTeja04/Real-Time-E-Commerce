import React, { useState } from 'react';
import AirpodsData from '../ShopData/Gadgets/AirPods'

const Airpods = () => { 
    
    const [ selectedNames, setSelectedNames ] = useState([]);
    const [ selectedRating, setSelectedRating ] = useState([]);

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
            <div className='min-h-screen'>
                <div>

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
                <div>
                    {
                        filteredData.length > 0 ? 
                        (
                            filteredData.map((item) => (
                                <div>
                                    <img className='h-16' src={item.imageURL} alt={item.name} />
                                    <p>₹ {item.price.toLocaleString("hi-IN")} /-</p>
                                </div>    
                            ))
                        ):
                        (<p>No products available</p>)
                    }
                </div>
            </div>
        </>
    )
}

export default Airpods