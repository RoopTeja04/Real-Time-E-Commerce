import React, { useState } from "react";
import MobilesData from "../ShopData/Gadgets/Mobile";
import { useCart } from "../Carts&Orders/cartContext";

const Mobiles = () => {

  const { AddToCart } = useCart();

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
      <div className="flex flex-col border-r-2 w-1/6 px-4 py-4">
        <div className="flex flex-col w-full">
          <p className="text-lg font-semibold">Product Name</p>
          <label>
            <input
              type="checkbox"
              value="redmi"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Redmi</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="samsung"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Samsung</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="apple"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Apple</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="OnePlus"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >OnePlus</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="RealMe"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Realme</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="Vivo"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Vivo</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="iQOO"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >IQOO</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="Poco"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Poco</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="Google"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Google</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="OPPO"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >OPPO</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="Motorola"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Motorola</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="Lava"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Lava</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="Nothing"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Nothing</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="Asus"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <span className="text-base tracking-wide pl-1" >Asus</span>
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

      <div className="flex flex-col px-8 py-8 w-full">
        {FilteredData.length > 0 ? (
          <div className="grid grid-cols-4 gap-8">
            {FilteredData.map((item) => (
              <div className="border rounded-lg p-6 flex flex-col items-center" key={item.id}>
                <img className="h-56 rounded-lg" src={item.imageURL} alt={item.name} />
                <div className="flex flex-col items-center mt-4 border-t-2 outline-offset-8 w-full">
                  <p className="mt-2 font-semibold text-lg tracking-wide">{item.name}</p>
                  <span className="mt-1 text-lg tracking-wider">₹ {item.price.toLocaleString("hi-IN")} /-</span>
                </div> 
                <div className="flex flex-col space-y-3 mt-4">
                  <button className="bg-yellow-500 h-10 w-full px-8 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer" onClick={() => AddToCart(item)}>Add To Cart</button>
                  <button className="bg-green-500 h-10 w-full px-6 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer">Buy Now</button>
                </div>               
              </div>
            ))}
          </div>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Mobiles;