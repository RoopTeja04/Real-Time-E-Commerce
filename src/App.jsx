import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login';
import Create from './Authentication/Create';
import Home from './Home';
import HomePage from './MainPage/HomePage';
import Cart from './MainPage/Cart';
import Search from './MainPage/Search';
import Order from './MainPage/Order';
import Electronics from './MiniNav/Electronics';
import MensWear from './MiniNav/MensWear';
import LadiesWear from './MiniNav/LadiesWear';
import HomeAppliances from './MiniNav/HomeAppliances';
import HomeFurniture from './MiniNav/HomeFurniture';
import Gadgets from './MiniNav/Gadgets';
import DailyDeals from './MainPage/DailyDeals';
import CustomerService from './MiniNav/CustomerService';
import Account from './MiniNav/Account';
import Mobiles from './MiniNavSection/EleNav/Mobiles';
import Laptops from './MiniNavSection/EleNav/Laptops';
import Airpods from './MiniNavSection/EleNav/Airpods';
import Tvs from './MiniNavSection/EleNav/Tvs';
import Shirts from './MiniNavSection/MenNav/Shirts';
import Pants from './MiniNavSection/MenNav/Pants';
import Shoes from './MiniNavSection/MenNav/Shoes';
import Watches from './MiniNavSection/MenNav/Watches';
import Sarees from './MiniNavSection/WomenNav/Sarees';
import Kurtha from './MiniNavSection/WomenNav/Kurtha';
import Slippers from './MiniNavSection/WomenNav/Slippers';
import Sports from './MiniNav/Sports';
import AirConditioners from './MiniNavSection/HomeAppliances/AirConditioners';
import Microwaves from './MiniNavSection/HomeAppliances/Microwaves';
import Refrigerators from './MiniNavSection/HomeAppliances/Refrigerators';
import ST from './MiniNavSection/HomeAppliances/ST';
import WahingMachines from './MiniNavSection/HomeAppliances/WahingMachines';

const App = () => {

  const Logined = localStorage.getItem("Login") === "true"

  return (
    <>
        <Routes>
          <Route path='/' element={
              Logined ? <Navigate to="/home" /> : <Login />
            } 
          />
          <Route path='/create-account' element={<Create />} />
          <Route path='/home' element = {
              Logined ? <Home /> : <Navigate to="/" />
            } 
          >
            <Route index element={<HomePage />} />
            <Route path='/home/search' element={<Search />} />
            <Route path='/home/cart' element={<Cart />} /> 
            <Route path='/home/order' element={<Order />} />
            <Route path='/home/electronics' element={<Electronics />}>
              <Route index element={<Mobiles />} />
              <Route path='mobiles' element={<Mobiles />} />
              <Route path='laptops' element={<Laptops />} />
              <Route path='airpods' element={<Airpods />} />    
              <Route path='tvs' element={<Tvs />} />
            </Route>
            <Route path='/home/menswear' element={<MensWear />}>
              <Route index element={<Shirts />} />
              <Route path='shirts' element={<Shirts />} />
              <Route path='pants' element={<Pants />} />
              <Route path='shoes' element={<Shoes />} />
              <Route path='watches' element={<Watches />} />
            </Route>
            <Route path='/home/ladieswear' element={<LadiesWear />} >
              <Route index element={<Sarees />} />
              <Route path='sarees' element={<Sarees />} />
              <Route path='kurthas' element={<Kurtha />} />
              <Route path='slippers' element={<Slippers />} />
            </Route>
            <Route path='/home/homeappliances' element={<HomeAppliances />}>
              <Route index element={<AirConditioners />} />
              <Route path='airconditioners' element={<AirConditioners />} />
              <Route path='microwave' element={<Microwaves />} />
              <Route path='refrigerators' element={<Refrigerators />} />
              <Route path='st' element={<ST />} />
              <Route path='washingmachines' element={<WahingMachines />} /> 
            </Route>
            <Route path='/home/home-furniture' element={<HomeFurniture />} />
            <Route path='/home/gadgets' element={<Gadgets />} />
            <Route path='/home/sports' element={<Sports />} />
            <Route path='/home/daily-deals' element={<DailyDeals />} />
            <Route path='/home/customer-service' element={<CustomerService />} />
            <Route path='/home/account' element={<Account />} />
          </Route>
        </Routes>
    </>
  )
}

export default App;