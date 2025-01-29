import React, { useState } from "react";
import MobilesData from "../ShopData/Gadgets/Mobile";

const Mobiles = () => {
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
        ? selectedRanges.filter((item) => item !== value)
        : [...selectedRanges, value]
    );
  };

  const handleStarRating = (value) => {
    setSelectedRating((selectedRating) =>
      selectedRating.includes(value)
        ? selectedRating.filter((item) => item !== value)
        : [...selectedRating, value]
    );
  };

  const FilteredData = MobilesData.filter((item) => {
    const nameMatch =
      selectedNames.length === 0 ||
      selectedNames.some((name) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );

    const rangeMatch =
      selectedRanges.length === 0 ||
      selectedRanges.some((range) => {
        const [min, max] = range.split(" to ").map(Number);
        return item.price >= min && item.price <= max;
      });

    const ratingMatch =
      selectedRating.length === 0 ||
      selectedRating.some((rating) => {
        const [min, max] = rating.split(" to ").map(Number);
        return item.rating >= min && item.rating <= max;
      });

    return nameMatch && rangeMatch && ratingMatch;
  });

  return (
    <div className="min-h-screen flex flex-row w-full">
      <div className="flex flex-col border-r-2 px-4 py-4">
        <div>
          <p className="text-lg font-semibold">Product Name</p>
          <label>
            <input
              type="checkbox"
              value="redmi"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span>Redmi</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="samsung"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span>Samsung</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="apple"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span>Apple</span>
          </label>
        </div>

        <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
          Price Range
        </p>
        <label>
          <input
            type="checkbox"
            value="10000 to 25000"
            onChange={(e) => handleRangeChange(e.target.value)}
          />
          <span>10,000 to 25,000</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="25000 to 50000"
            onChange={(e) => handleRangeChange(e.target.value)}
          />
          <span>25,000 to 50,000</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="50000 to 75000"
            onChange={(e) => handleRangeChange(e.target.value)}
          />
          <span>50,000 to 75,000</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="75000 to 100000"
            onChange={(e) => handleRangeChange(e.target.value)}
          />
          <span>75,000 to 1,00,000</span>
        </label>

        <p className="text-lg font-semibold tracking-wide pt-4 pb-2">
          Star Rating
        </p>
        <label>
          <input
            type="checkbox"
            value="4 to 5"
            onChange={(e) => handleStarRating(e.target.value)}
          />
          <span>4 to 5</span>
        </label>
      </div>

      <div className="">
        {FilteredData.length > 0 ? (
          FilteredData.map((item) => (
            <div className="" key={item.id}>
              <img className="h-20" src={item.imageURL} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.price.toLocaleString("hi-IN")}</span>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Mobiles;