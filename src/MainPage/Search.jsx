import React, { useState } from 'react'
import Laptop from "../ShopData/Electronics/Laptop";
import Speakers from "../ShopData/Electronics/Speakers";
import Tvs from "../ShopData/Electronics/Tvs";
import Watches from "../ShopData/Electronics/Watches";
import AirPods from "../ShopData/Gadgets/AirPods";
import Mobile from "../ShopData/Gadgets/Mobile";
import AirConditioners from "../ShopData/HomeAppliances/Air Conditioners";
import Microwaves from "../ShopData/HomeAppliances/Microwaves";
import Refrigerators from "../ShopData/HomeAppliances/Refrigerators";
import ST from "../ShopData/HomeAppliances/ST";
import WashigMachines from "../ShopData/HomeAppliances/Washing Machines";
import BeddingMattress from "../ShopData/HomeFurniture/BeddingMattressesData";
import OutdoorUmbrellas from "../ShopData/HomeFurniture/OutdoorUmbrellasCanopies";
import SofasCouchesData from "../ShopData/HomeFurniture/SofasCouchesData";
import WardrobesClosetsData from "../ShopData/HomeFurniture/WardrobesClosetsData";
import Kurtha from "../ShopData/LadiesWear/Kurtha";
import Sarees from "../ShopData/LadiesWear/Sarees";
import Slippers from "../ShopData/LadiesWear/Slippers";
import Pant from "../ShopData/MensWear/Pant";
import Shirts from "../ShopData/MensWear/Shirts";
import Shoes from "../ShopData/MensWear/Shoes";
import CricketBats from "../ShopData/Sports/CricketBat";
import Jersey from "../ShopData/Sports/Jersey";
import SportsShoes from "../ShopData/Sports/SportShoes";
import { useCart } from '../Carts&Orders/cartContext';
import { useTheme } from '../ContextAPI/ThemeContext';
import { IoSearch } from "react-icons/io5";

const Search = () => {

    const { theme } = useTheme();

    const Store_Data = [
        ...Laptop, ...AirConditioners, ...AirPods, ...BeddingMattress, ...CricketBats,
        ...Kurtha, ...Microwaves, ...Mobile, ...OutdoorUmbrellas, ...Pant, ...Refrigerators,
        ...Speakers, ...ST, ...Sarees, ...Shirts, ...Shoes, ...Slippers, ...SofasCouchesData,
        ...SportsShoes, ...Tvs, ...WardrobesClosetsData, ...Jersey, ...WashigMachines, ...Watches   
    ]

    const [ searchValue, setSearchValue ] = useState("");
    const [ searchResult, setSearchResult ] = useState([]);
    const [ visible, setVisible ] = useState(false);
    const { AddToCart } = useCart();

    const handleSearch = (e) => {

        e.preventDefault();

        if( searchValue !== ""){
        const Searched_Items = Store_Data.filter(
            (item) => item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        setSearchResult(Searched_Items);
        };
        setVisible(true);
    }
        
    return (
        <>
            <div className={`${ theme === "Light" ? "dark:bg-gray-850 text-white mt-10 h-full pb-10 min-h-screen" : "bg-white text-black mt-10 pb-10 h-full min-h-screen"}`}>
                <div className='flex flex-row justify-center space-x-6 w-full'>
                    <input 
                        type='text'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder='search Items...'
                        className='border-2 border-blue-700 rounded-lg h-12 w-1/3 pl-4 capitalize text-lg font-semibold tracking-wider bg-transparent'
                        required
                    />
                    <button 
                        className={`${ theme === "Light" ? "bg-white text-black w-24 rounded-lg" : " bg-black text-white w-24 rounded-lg text-lg" } flex items-center justify-center `} 
                        onClick={handleSearch}
                    >
                        <IoSearch className='text-2xl font-semibold' />
                    </button>  
                </div>

                <div className='w-full mt-10'>
                    <div className='mx-5 grid grid-cols-5 gap-6'>
                        {
                            visible && 
                                (
                                    searchResult.length > 0 ? 
                                        (
                                            searchResult.map((item, index) =>(
                                                <div key={index} className={`${ theme === "Light" ? "text-white border-white border-2 p-4 rounded-xl" : " text-black border-black border-2 p-4 rounded-lg" } flex flex-col justify-center items-center rounded-xl drop-shadow-2xl`}>
                                                    <img className='h-32 my-5 drop-shadow-2xl' src={item.imageURL} alt={item.name} />
                                                    <div className='flex flex-col items-center my-2'>
                                                        <h1 className='text-lg font-semibold tracking-wide text-center'>{item.name}</h1>
                                                        <h1 className='text-2xl font-semibold tracking-wide pt-2 pb-2'>₹ { item.price.toLocaleString("hi-IN")} /-</h1>
                                                    </div>    
                                                    <div className='flex flex-col space-y-4'>
                                                        <button className='bg-add-to-cart w-44 h-10 rounded-full font-semibold text-lg hover:bg-yellow-500 text-black transition-all 1.5s ease-linear' onClick={() => AddToCart(item)}>Add to Cart</button>
                                                        <button className='border-black bg-green-400 border-2 w-44 h-10 rounded-full font-semibold text-lg text-black hover:bg-green-600 transition-all 1.5s ease-linear'>Buy Now</button>
                                                    </div>    
                                                </div>    
                                            ))
                                        )
                                    : (
                                        <p>No Items Found (or) Out of Stock </p>
                                    )
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search