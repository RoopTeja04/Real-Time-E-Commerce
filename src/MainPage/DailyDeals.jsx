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

const DailyDeals = () => {

  const [finalDailyDeal, setFinalDailyDeal] = useState([]);

  const allShopData = [
    ...AirPods, ...Laptops, ...Mobiles, ...TVs, ...HomeTheaters,
    ...watches, ...airConditioners, ...MicroWaves, ...Refrigerators,
    ...shaversAndTrimmers, ...WashingMachines, ...beddingAndMattresses,
    ...outdoorUmbrellasAndCanopies, ...sofasAndCouches, ...wardrobesAndClosets,
    ...kurtas, ...sarees, ...footwear, ...Pants, ...Shirts, ...shoes,
    ...CricketBats, ...CricketJerseys, ...sportsShoes
  ];

  const generateDeals = () => {
    const offers = Array.from({ length: 10 }, () => Math.floor(1 + Math.random() * 80));
    const getRandomData = (data, count) => [...data].sort(() => Math.random() - 0.5).slice(0, count);
    const selectedData = getRandomData(allShopData, 10);

    setFinalDailyDeal(selectedData.map((item, index) => ({ ...item, offer: offers[index] })));
  };

  useEffect(() => {
    generateDeals();

    const interval = setInterval(() => {
      generateDeals();
    }, 86400000); 

    return () => clearInterval(interval);
  }, []);

  return(
    <div className='grid grid-cols-5 min-h-screen'>
      {
        finalDailyDeal.map((item, index) => (
          <div key={index}>
            <img className='h-32' src={item.imageURL} alt='' />
            <h1>{item.name}</h1>
            <p>offer: {item.offer} % </p>
          </div>
        ))
      }
    </div>
  )
};

export default DailyDeals;
