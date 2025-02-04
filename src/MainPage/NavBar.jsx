import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../ContextAPI/ThemeContext'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useCart } from '../Carts&Orders/cartContext';

const NavBar = ({ handleLogOut }) => {

    const { theme, handleThemeSwitcher } = useTheme();
    const { cartItems } = useCart();
    const CurrentUser = localStorage.getItem("CurrentUser")
        
    return (
       
        <>  
            <div className='flex flex-row h-16 bg-navbar-color text-white items-center px-6 justify-between'>
                <Link to="/home" className='text-2xl font-bold tracking-wider cursor-pointer'>QuickBazaar</Link>
                <h1 className='text-base font-semibold capitalize tracking-wider' >Welcome, <span className='text-xl uppercase font-bold' >{CurrentUser}</span></h1>
                <div className='flex flex-row space-x-14 items-center'>
                    <Link 
                        className='text-base font-semibold tracking-wide'
                        to="/home/search"
                    >   
                        Search
                    </Link>
                    <Link
                        className='text-base font-semibold tracking-wide'
                        to="/home/cart"
                    >   
                        <div className='flex flex-row space-x-1 items-center'>
                            <p className='bg-red-700 px-2 text-center text-lg rounded-full'>{cartItems.length}</p>
                            <p>Cart</p>
                        </div>
                    </Link>
                    <Link 
                        className='text-base font-semibold tracking-wide'
                        to="/home/order"
                    >
                        Order
                    </Link>
                    <button onClick={handleThemeSwitcher}>
                        { theme === "Light" ? <FaSun className='text-xl' /> : <FaMoon className='text-xl' />}
                    </button>
                    <button 
                        className='bg-red-600 w-28 h-10 rounded-md text-lg font-semibold cursor-pointer' 
                        onClick={handleLogOut}
                    >
                        Log Out
                    </button>
                </div>
            </div>
            <div className={`${theme === "Light" ? "border-white" : "border-gray-900"} border-b-2 h-10 pl-5 flex items-center justify-evenly`}>
                <Link
                    to="/home/electronics"
                >
                    Electronics
                </Link>
                <Link
                    to="/home/menswear"
                >
                    Mens Wear
                </Link>
                <Link
                    to="/home/ladieswear"
                >
                    Ladies Wear
                </Link>
                <Link
                    to="/home/homeappliances"
                >
                    Home Appliances
                </Link>
                <Link
                    to="/home/home-furniture"
                >
                    Home Furniture
                </Link>
                <Link
                    to="/home/gadgets"
                >
                    Gadgets
                </Link>
                <Link
                    to="/home/sports"
                >
                    Sports
                </Link>
                <Link
                    to="/home/daily-deals"
                >
                    Daily Deals
                </Link>
                <Link
                    to="/home/customer-service"
                >
                    Customer Service
                </Link>
                <Link
                    to="/home/account"
                >
                    Account
                </Link>
            </div>
        </>
    )
}

export default NavBar