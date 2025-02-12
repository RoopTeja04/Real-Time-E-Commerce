import React from 'react'
import { useParams } from 'react-router-dom'
import Mobiles from '../ShopData/Electronics/Mobile';
import { useTheme } from '../ContextAPI/ThemeContext';
import { FaStar } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";
import { FaAward } from "react-icons/fa";

const MobileSingle = () => {

    const { name } = useParams();
    const { theme } = useTheme();

    const DataItem = Mobiles.find((item) => item.name === name);

    return (
        <div className='min-h-screen'>
            <div className='grid grid-cols-2 mx-10 mt-24'>
                <div className='ml-24'>
                    <img className='h-3/4 rounded-xl cursor-pointer' src={DataItem.imageURL} alt={DataItem.name} />
                </div>
                <div className='pt-4 flex flex-col'>
                    <span className='text-4xl tracking-wide font-medium' >{DataItem.name}</span>
                    <div className='mt-4 space-x-2 flex h-10 items-center'>
                        <span className='text-2xl tracking-wide'> { DataItem.price > 0 ? `₹ ${DataItem.price.toLocaleString("hi-IN")} /-`: " "}</span>
                        <span className='bg-green-600 rounded-md px-2 py-0.5 tracking-wide flex flex-row justify-evenly items-center w-14'><FaStar /><p className='pl-1 font-semibold'>{DataItem.rating}</p></span>
                    </div>
                    <div className='flex flex-col mt-4 space-y-2'>
                        <span className='tracking-wider'>Ram & Storage: {DataItem.RAM} & {DataItem.Storage}</span>
                        <span className='tracking-wider'>Camera: {DataItem.Camera}</span>
                        <span className='tracking-wider'>Battery: {DataItem.Battery}</span>
                    </div>
                    <div className='flex flex-row mt-14 space-x-8'>
                        <div className='flex flex-col items-center space-y-3'>
                            <FaTruck className='text-3xl' />
                            <p className='text-base font-semibold tracking-wide'>Free Delivery</p>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <TbTruckReturn className='text-3xl' />
                            <p className='text-base font-semibold tracking-wide'>10 Days Returnable</p>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <MdVerifiedUser className='text-3xl' />
                            <p className='text-base font-semibold tracking-wide'>2 years Warranty</p>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <FaAward className='text-3xl' />
                            <p className='text-base font-semibold tracking-wide'>Top Branded</p>
                        </div>
                    </div>
                    { !!DataItem.price === true ? <p className='text-green-600 font-base text-4xl mt-6 capitalize'>In Stock</p> : <p className='text-red-500 font-base text-4xl mt-6 capitalize'> Out of Stock</p> }
                </div>
            </div>
        </div>
    )
}

export default MobileSingle