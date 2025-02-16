import React from 'react'
import { useParams } from 'react-router-dom';
import MobilesData from '../ShopData/Electronics/Mobile';
import { IoStar } from "react-icons/io5";

const MobileSingle = () => {
    
    const { name } = useParams();

    const DataItems = MobilesData.find((item) => item.name === name);
        
    return (
        <div className='min-h-screen'>
            <div>
                <img src={DataItems.imageURL} alt='' />
            </div>
            <div>
                <p>{DataItems.name}</p>
                <div className='w-full'>
                    <p>₹ {DataItems.price.toLocaleString("hi-IN")} /-</p>
                    <p className='flex flex-row items-center space-y-6 w-full'><IoStar /> {DataItems.rating}</p>
                </div>
                
                <p>RAM & Storage: {DataItems.RAM} & {DataItems.Storage}</p>
                <p>Camera: {DataItems.Camera}</p>
                <p>Battery: {DataItems.Battery}</p>
            </div>
        </div>
    )
}

export default MobileSingle