import React from 'react'
import { useOrder } from '../Carts&Orders/orderContext'
import { useTheme } from '../ContextAPI/ThemeContext';

const CashPayment = () => {

  const { orderItems } = useOrder();
  const { theme } = useTheme();

  return (
    <>  
      <div className='min-h-screen'>
        <h1 className='text-center mt-10 text-3xl tracking-wider font-semibold capitalize cursor-pointer'>Your Order</h1>
        <div className='flex flex-row'>
          <div className={`border-2 ${ theme === "Light" ? "border-white" : "border-gray-900"}`}>
            {
              orderItems.map((item, index) => (
                <div key={index}>
                  <p></p>
                </div>  
              ))
            }
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CashPayment