import React, { useState } from 'react'
import { useOrder } from '../Carts&Orders/orderContext'
import { useTheme } from '../ContextAPI/ThemeContext';
import { useNavigate } from 'react-router-dom';

const CashPayment = () => {

  const { orderItems } = useOrder();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { RemoveFromOrder } = useOrder();

  const [quantity, serQuantity] = useState(1);

  return (
    <>
      <div className='min-h-screen'>
        <h1 className='text-center mt-10 text-3xl tracking-wider font-semibold capitalize cursor-pointer'>Your Order</h1>
        <div className='flex flex-row mt-10 mx-10'>
          {
            orderItems.map((item, index) => (
              <>
                <div key={index} className={`py-10 border-2 ${theme === "Light" ? "border-white text-white" : "border-gray-900 text-black"} w-1/3 rounded-lg shadow-lg`}>
                  <div className="flex flex-col space-y-4">
                    <div className={`flex justify-between items-center border-b-2 mx-4 pb-2 px-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                      <span className='text-base'>
                        Product Name:
                      </span>
                      <span className="text-xl font-semibold">{item.name}</span>
                    </div>
                    <div className={`flex justify-between items-center border-b-2 mx-4 pb-2 px-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                      <span className='text-base'>
                        Price
                      </span>
                      <span className="text-xl font-semibold tracking-wide">₹ {Number(item.price).toLocaleString("hi-IN")} /-</span>
                    </div>
                    <div className={`flex justify-between items-center border-b-2 mx-4 pb-2 px-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                      <span className='text-base'>
                        Quantity
                      </span>
                      <span className="text-xl font-semibold text-black">
                        <select className='rounded-md w-16 text-center outline-none cursor-pointer' value={quantity} onChange={(e) => serQuantity(e.target.value)}>
                          {
                            Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                        </select>
                      </span>
                    </div>
                    <div className={`flex justify-between items-center mx-4 pb-2 px-2 `}>
                      <span className='text-base'>
                        Total Price
                      </span>
                      <span className="text-xl font-semibold tracking-wide">
                        ₹ {
                          Number(item.price * quantity).toLocaleString("hi-IN")
                        } /-
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col mt-10 px-20 space-y-6'>
                    <button
                      className='bg-red-600 h-10 text-base rounded-lg'
                    >Cancel Order</button>
                    <button
                      className='bg-white text-black'
                    >Place your Order</button>
                  </div>
                </div>

              </>
            ))
          }
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default CashPayment