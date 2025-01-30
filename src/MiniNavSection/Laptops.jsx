import React, { useState } from 'react';
import LaptopsData from '../ShopData/Electronics/Laptop';

const Laptops = () => {
    const [selectedNames, setSelectedNames] = useState([]);
    const [selectedRanges, setSelectedRanges] = useState([]);
    const [selectedRating, setSelectedRating] = useState([]);

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
        <div className="min-h-screen">
            <div>
                <div>
                    <label>
                        <input type="checkbox" value="HP" onChange={(e) => handleNameChange(e.target.value)} />
                        HP
                    </label>
                </div>
                <div>
                    <label>
                        <input type='checkbox' value="40000 to 55000" onChange={(e) => handleRangeChange(e.target.value)} />
                        40000 to 55000
                    </label>
                </div>
                <div>
                    <label>
                        <input type='checkbox' value="4.0 to 5" onChange={(e) => handleStarRating(e.target.value)} />
                        4.0 to 5
                    </label>
                    <label>
                        <input type='checkbox' value="3.0 to 4.0" onChange={(e) => handleStarRating(e.target.value)} />
                        3.0 to 4.0
                    </label>
                    <label>
                    <input type='checkbox' value="1.0 to 3.0" onChange={(e) => handleStarRating(e.target.value)} />
                        1.0 to 3.0
                    </label>
                </div>
            </div>
            <div>
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div key={item.id}>
                            <img className="h-20" src={item.imageURL} alt={item.name} />
                            <p>{item.name}</p>
                            <span>{item.price.toLocaleString("hi-IN")}</span>
                        </div>
                    ))
                ) : (
                    <p>No products are available</p>
                )}
            </div>
        </div>
    );
};

export default Laptops;