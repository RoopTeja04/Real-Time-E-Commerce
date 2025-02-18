import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MobilesData from '../ShopData/Electronics/Mobile';
import { IoStar } from "react-icons/io5";
import { FaBackspace } from "react-icons/fa";
import { useTheme } from '../ContextAPI/ThemeContext';
import { useCart } from '../Carts&Orders/cartContext';
import { useOrder } from '../Carts&Orders/orderContext';

const MobileSingle = () => {

    const { name } = useParams();
    const { theme } = useTheme();
    const { AddToCart } = useCart();
    const { handleOrder } = useOrder();
    const  navigate  = useNavigate();

    const [ paymentMethod, setPaymentMethod ] = useState('nil');

    const DataItems = MobilesData.find((item) => item.name === name);

    const handlePaymentOption  = () => {
        if(!paymentMethod){
            alert("Please select the payment method")
        }
        navigate(paymentMethod === "Cash on" ? '/home/cash-payment' : '/home/online-payment')
    }

    return (
        <div className='min-h-screen pb-20'>
            <button 
                className={`relative top-5 left-6 text-2xl border-2 rounded-full p-2 cursor-pointer ${ theme === "Light" ? "border-white" : "border-gray-800"}`}
                onClick={() => window.location.href="/home/electronics/mobiles"}
            >
                <FaBackspace />
            </button>
            <div className='mt-24 flex flex-row'>
                <div className='ml-56'>
                    <img className='rounded-2xl h-5/6' src={DataItems.imageURL} alt='' />
                </div>
                <div className='mt-8 ml-36 w-full'>
                    <p className='text-4xl pb-6 font-semibold tracking-wide capitalize'>
                        {DataItems.name}
                    </p>
                    <div className='flex flex-row space-x-6 pb-2'>
                        {DataItems.price > 0 ? <p className='text-xl font-base tracking-wide'>{`₹ ${DataItems.price.toLocaleString("hi-IN")} /-`}</p> : <p className='text-red-600 text-2xl font-semibold tracking-wide'> Out of Cart</p>}
                        <p className='flex flex-row bg-green-600 items-center p-1 rounded-md space-x-1 cursor-pointer'><IoStar /> <p className='font-semibold pr-0.5'>{DataItems.rating}</p></p>
                    </div>
                    <p className='tracking-wide font-base text-base pb-2'>RAM & Storage: {DataItems.RAM} & {DataItems.Storage}</p>
                    <p className='tracking-wide font-base text-base pb-2'>Camera: {DataItems.Camera}</p>
                    <p className='tracking-wide font-base text-base pb-2'>Battery: {DataItems.Battery}</p>
                    <div className='flex flex-col mt-10 space-x-4'>
                        <div className={`flex flex-col w-3/5 border-2 rounded-xl p-6 ${ theme === "Light" ? "border-white" : "border-gray-800"} space-y-4`}>
                            <label
                                className={`${ theme === "Light" ? "border-white" : "border-gray-800"} border-2 p-4 flex items-center space-x-2 rounded-xl cursor-pointer`}
                            >
                                <input type='radio' className='size-4 cursor-pointer' value="Online Payment" onChange={(e) => setPaymentMethod(e.target.value)} checked={ paymentMethod === "Online Payment"} />
                               <p className='text-lg'>Online Payment (UPI / BHMI / Net Banking)</p>
                            </label>
                            <label
                                className={`${ theme === "Light" ? "border-white" : "border-gray-800"} border-2 p-4 flex items-center space-x-2 rounded-xl cursor-pointer`}
                            >
                                <input type='radio' className='size-4 cursor-pointer' value="Cash on" onChange={(e) => setPaymentMethod(e.target.value)} checked={ paymentMethod === "Cash on"} />
                                <p className='text-lg'>Cash on Delivery (COD)</p>
                            </label>
                        </div>
                        <div className='flex flex-col mt-5 space-y-4'>
                            <button
                                className="bg-yellow-500 h-12 w-2/5 px-8 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer hover:bg-yellow-600 transition-all duration-300 ease-linear"
                                onClick={() => AddToCart(DataItems)}
                            >
                                Add to Cart
                            </button>
                            {
                                DataItems.price > 0 ? (<button
                                    className="bg-green-400 h-12 w-2/5 px-8 rounded-lg text-black font-semibold tracking-wide text-base cursor-pointer hover:bg-green-700 transition-all duration-300 ease-linear"
                                    onClick={() => (handlePaymentOption(), handleOrder(DataItems))}
                                >
                                    Buy Now
                                </button>) :("")
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSingle