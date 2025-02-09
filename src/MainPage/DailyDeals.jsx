import React, { useEffect, useState } from 'react';
import AirPods from '../ShopData/Electronics/AirPods';
import Laptops from '../ShopData/Electronics/Laptop';
import Mobiles from '../ShopData/Electronics/Mobile';
import TVs from '../ShopData/Electronics/Tvs';
import HomeTheaters from '../ShopData/Gadgets/Speakers';
import watches from '../ShopData/Gadgets/Watches';
import airConditioners from '../ShopData/HomeAppliances/Air Conditioners';
import MicroWaves from '../ShopData/HomeAppliances/Microwaves';
import Refrigerators from '../ShopData/HomeAppliances/Refrigerators';
import shaversAndTrimmers from '../ShopData/HomeAppliances/ST';
import WashingMachines from '../ShopData/HomeAppliances/Washing Machines';
import beddingAndMattresses from '../ShopData/HomeFurniture/BeddingMattressesData';
import outdoorUmbrellasAndCanopies from '../ShopData/HomeFurniture/OutdoorUmbrellasCanopies';
import sofasAndCouches from '../ShopData/HomeFurniture/SofasCouchesData';
import wardrobesAndClosets from '../ShopData/HomeFurniture/WardrobesClosetsData';
import kurtas from '../ShopData/LadiesWear/Kurtha';
import sarees from '../ShopData/LadiesWear/Sarees';
import footwear from '../ShopData/LadiesWear/Slippers';
import Pants from '../ShopData/MensWear/Pant';
import Shirts from '../ShopData/MensWear/Shirts';
import shoes from '../ShopData/MensWear/Shoes';
import CricketBats from '../ShopData/Sports/CricketBat';
import CricketJerseys from '../ShopData/Sports/Jersey';
import sportsShoes from '../ShopData/Sports/SportShoes';
import { useCart } from '../Carts&Orders/cartContext';
import { useTheme } from '../ContextAPI/ThemeContext';

const DailyDeals = () => {

  const [ finalDailyDeal, setFinalDailyDeal ] = useState([]);
  const { AddToCart } = useCart();
  const { theme } = useTheme();

  const allShopData = [
    ...AirPods, ...Laptops, ...Mobiles, ...TVs, ...HomeTheaters,
    ...watches, ...airConditioners, ...MicroWaves, ...Refrigerators,
    ...shaversAndTrimmers, ...WashingMachines, ...beddingAndMattresses,
    ...outdoorUmbrellasAndCanopies, ...sofasAndCouches, ...wardrobesAndClosets,
    ...kurtas, ...sarees, ...footwear, ...Pants, ...Shirts, ...shoes,
    ...CricketBats, ...CricketJerseys, ...sportsShoes
  ];

  const generateDeals = () => {
    const offers = Array.from({ length: 10 }, () => Math.floor( 1 + Math.random() * 85 ) )
    const getRandomData = (data, count) => [...data].sort(() => Math.random() - 0.5).slice(0, count);
    const selectedData = getRandomData(allShopData, 10);

    setFinalDailyDeal(
      selectedData.map((item, index) => {
        const offerAmount = Math.round((offers[index] / 100) * item.price);
        return {
          ...item,
          offer: offers[index],
          offerAmount,
          offerPrice: item.price - offerAmount,
        };
      })
    );
  };

  console.log(finalDailyDeal)

  useEffect(() => {
    generateDeals();

    const interval = setInterval(() => {
      generateDeals();
    }, 86400000); 

    return () => clearInterval(interval);
  }, []);

  return(
    <div className='py-10 mx-10 min-h-screen'>
      <div className='grid grid-cols-3 gap-14'>
        {
          finalDailyDeal.map((item, index) => (
            <div className={`border-2 rounded-lg p-6 flex flex-col items-center ${ theme === "Light" ? "border-white" : "border-gray-900" }`} key={`${item.id}-${index}`}>
              <img className="h-48 rounded" src={item.imageURL} alt={item.name} />
              <div className={`flex flex-col items-center mt-4 border-t-2 outline-offset-8 w-full ${ theme === "Light" ? "border-white" : "border-gray-900" }`}>
                <p className="mt-2 font-semibold text-lg tracking-wide text-center"> {item.shortName && item.shortName.trim() !== "" ? item.shortName : item.name}</p>
                  <p className="m-2 tracking-wide bg-red-900 text-white font-semibold rounded-full py-1 px-3 text-lg">
                    🔥 {item.offer}% OFF
                  </p>
                <div className='flex space-x-4 items-center' >
                  <span className="mt-1 text-base text-gray-400 line-through font-semibold tracking-wider">₹ {item.price.toLocaleString("hi-IN")} /-</span>
                  <span className="mt-1 text-2xl tracking-wide font-semibold">₹ {Number(item.offerPrice).toLocaleString("hi-IN")} /-</span>
                </div>
              </div>
              <div className="flex flex-col space-y-3 mt-4">
                <button className="bg-yellow-500 h-10 w-full px-8 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer" onClick={() => AddToCart(item)}>Add To Cart</button>
                <button className="bg-green-500 h-10 w-full px-6 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer">Buy Now</button>
              </div>
            </div>  
          ))
        }
      </div>
    </div>
  )
};

export default DailyDeals;
