import React from 'react'
import { useParams } from 'react-router-dom';
import MobilesData from '../ShopData/Electronics/Mobile';
import { IoStar } from "react-icons/io5";

const MobileSingle = () => {

    const { name } = useParams();

    const DataItems = MobilesData.find((item) => item.name === name);

    return (
        <div className='min-h-screen pb-20'>
            <div className='mt-24 flex flex-row'>
                <div className='ml-40'>
                    <img className='rounded-2xl h-3/2' src={DataItems.imageURL} alt='' />
                </div>
                <div className='mt-10 ml-36 w-full'>
                    <p className='text-4xl pb-6 font-semibold tracking-wide capitalize'>
                        {
                            DataItems.price > 0 ? <p>{DataItems.name}</p> : <p className='line-through'>{DataItems.name}</p>
                        }
                    </p>
                    <div className='flex flex-row space-x-6 pb-2'>
                        {DataItems.price > 0 ? <p className='text-xl font-base tracking-wide'>{`₹ ${DataItems.price.toLocaleString("hi-IN")} /-`}</p> : <p className='text-red-600 text-2xl font-semibold tracking-wide'> Out of Cart</p>}
                        <p className='flex flex-row bg-green-600 items-center p-1 rounded-md space-x-1 cursor-pointer'><IoStar /> <p className='font-semibold pr-0.5'>{DataItems.rating}</p></p>
                    </div>
                    <p className='tracking-wide font-base text-base pb-2'>RAM & Storage: {DataItems.RAM} & {DataItems.Storage}</p>
                    <p className='tracking-wide font-base text-base pb-2'>Camera: {DataItems.Camera}</p>
                    <p className='tracking-wide font-base text-base pb-2'>Battery: {DataItems.Battery}</p>
                    <div className='flex flex-row mt-20'>
                        <div className='flex flex-col'>
                            <label>
                                <input type='radio' />
                                online payment (UPI/ BHMI / Net Banking)
                            </label>
                            <label>
                                <input type='radio' />
                                Cash on Delivery (COD)
                            </label>
                        </div>
                        <div>
                            <button>Add to Cart</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSingle