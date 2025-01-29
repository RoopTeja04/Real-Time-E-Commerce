import React from 'react'
import { useAccount } from '../ContextAPI/AccountContext';
import { LuPencil } from "react-icons/lu";
import { useTheme } from '../ContextAPI/ThemeContext';

const Account = () => {
  
  const { account } = useAccount();
  const CurrentUser = localStorage.getItem("CurrentUser");
  const { theme } = useTheme();

  return (
    <>
      <div className='flex flex-col items-center w-full mt-10 min-h-screen'>
        <h1 className='text-2xl font-semibold uppercase'> Hi, {CurrentUser}</h1>
        <div className='mx-20 w-1/2'>
          <div className={`${ theme === "Light" ? "border-2 border-white" : "border-2 border-black" } flex flex-col items-start mt-10 rounded-xl`}>
            <h1 className={`${ theme === "Light" ? "bg-gray-900" :"bg-white" } relative -top-3 left-4  px-4 text-base font-semibold rounded-full`}>User Detail's</h1>
            <div className='flex flex-col items-start px-5 pt-10'>
              <span className='font-semibold text-lg pb-1'>E- Mail ID: {account.emailId}</span>
              <span className='font-semibold text-lg pb-1'>Phone Number: {account.phoneNumber}</span>
              <span className='font-semibold text-lg pb-1'>Address: {account.address}</span>
              <span className='font-semibold text-lg pb-1'>Password: {account.password}</span>
            </div>
            <div className='flex justify-end w-full relative -top-44 pr-5 underline underline-offset-2 text-blue-600'>
              <button className='cursor-pointer flex flex-row items-center tracking-wider font-bold'><LuPencil className='text-sm mr-1 mt-1 font-bold' />Edit</button>
            </div>
          </div>
        </div> 
        <div className='grid grid-cols-2 gap-10 mt-10 w-11/12'>
          <div className={`flex justify-center items-center flex-col border-2 ${ theme === "Light" ? "border-white" : "border-gray-900"} rounded-xl w-1/2`}>
            <h1 className=''>Cart Items</h1>
            <h1>{account.cartItems && account.cartItems.length} Added to Cart</h1>
            <div>
              {
                account.cartItems && account.cartItems.length > 0 ? 
                account.cartItems.map((item, index) => (
                  <div key={index}>
                    <h1>{item.name}</h1>
                    <img className='h-10' src={item.imageURL} alt={item.name} />
                  </div>  
                )): 
                <p> No Items on Cart</p>
              }
            </div>
          </div>
          <div>
            <h1>Order Items</h1>
            <h1>{ account.itemsOrder && account.itemsOrder.length} Ordered</h1>
            <h1>0 Delivered</h1>
            <div>
              {
                account.itemsOrder && account.itemsOrder.length > 0 ? 
                account.itemsOrder.map((item, index) => (
                  <div key={index}>
                    <h1>{item.name}</h1>
                    <img src={item.imageURL} alt={item.name} />
                  </div>
                )):
                <p>No Items Order</p>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account