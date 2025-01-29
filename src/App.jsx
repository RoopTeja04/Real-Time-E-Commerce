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
import Mobiles from './MiniNavSection/Mobiles.Jsx';
import Laptops from './MiniNavSection/Laptops';
import Airpods from './MiniNavSection/Airpods';
import Tvs from './MiniNavSection/Tvs';

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
            <Route path='/home/menswear' element={<MensWear />}/>
            <Route path='/home/ladieswear' element={<LadiesWear />} />
            <Route path='/home/home-appliances' element={<HomeAppliances />} />
            <Route path='/home/home-furniture' element={<HomeFurniture />} />
            <Route path='/home/gadgets' element={<Gadgets />} />
            <Route path='/home/daily-deals' element={<DailyDeals />} />
            <Route path='/home/customer-service' element={<CustomerService />} />
            <Route path='/home/account' element={<Account />} />
          </Route>
        </Routes>
    </>
  )
}

export default App;