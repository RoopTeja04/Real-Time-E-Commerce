import React from 'react'
import { useCart } from './cartContext'

const CartValues = () => {
    
    const { cartItems } = useCart();
    
    return (
        <div className='min-h-screen items-center justify-center flex flex-col'>
            {
                cartItems.length > 0 ?(
                    <div>
                        {
                            cartItems.map((item, index) => (
                                <div key={index}>
                                    <h1>{item.name}</h1>
                                </div>    
                            ))
                        }
                    </div>
                ):(
                    <p>No Items Added !</p>
                )
            }
        </div>
    )
}

export default CartValues