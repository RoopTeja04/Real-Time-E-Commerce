import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "../Carts&Orders/cartContext";
import { useOrder } from "../Carts&Orders/OrdersContext";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {

    const initialValues = {
        name:"",
        emailId:"",
        phoneNumber:"",
        address:"",
        password:"",
        confirmPassword:"",
    }

    const { cartItems } = useCart(); 
    const { itemsOrder } = useOrder();
    const [ account, setAccount] = useState(initialValues);
    const [ updateAccount, setUpdateAccount ] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("Login") === "true"){

            const currentUser = localStorage.getItem("CurrentUser");
            const currentPassword  = localStorage.getItem("CurrentPassword");
    
            setAccount((account) => ({...account, name: currentUser, password: currentPassword, confirmPassword: currentPassword, cartItems: cartItems, itemsOrder:itemsOrder}));
    
        }
    }, [cartItems, itemsOrder]);

    return(
        <AccountContext.Provider value={{ account }}>
            {
                children 
            }
        </AccountContext.Provider>
    )

}

export const useAccount = () => {
    return useContext(AccountContext);
}