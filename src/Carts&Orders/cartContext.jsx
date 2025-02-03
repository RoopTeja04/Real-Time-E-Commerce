import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {

    const [ cartItems, setCartItems ] = useState([]);

    const AddToCart = ( item ) => {
        setCartItems((cartItems) => {

            if(!cartItems.find((par_item) => par_item.id === item.id)){
                return [...cartItems, item]
            }

            return cartItems;
        });
    }

    console.log(cartItems)

    const RemoveFromCart = ( item ) => {
        setCartItems(cartItems.filter((cartItem) => cartItem !== item));
    }

    return(
        <cartContext.Provider value={{ cartItems, AddToCart, RemoveFromCart}}>
            {children}
        </cartContext.Provider>
    );

}

export const useCart = () => {
    return useContext(cartContext)
}