import { createContext, useContext, useState } from "react";

const orderContext = createContext();

export const OrderProvider = ({ children }) => {

    const [ itemsOrder, setItemsOrder ] = useState([]);

    const handleAddOrder = (item) => {
        setItemsOrder(
            [...itemsOrder, item]
        )
    }

    const handleRemoveOrder = (item) => {
        setItemsOrder(
            itemsOrder.filter((orderItem) => 
                orderItem !== item
        ))
    }

    return(
        <orderContext.Provider value={{ itemsOrder, handleAddOrder, handleRemoveOrder }}>
            {
                children
            }
        </orderContext.Provider>
    )

}

export const useOrder = () => {
    return useContext(orderContext);
}