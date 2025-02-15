import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderItems, setOrderItems] = useState([]);

    const handleOrder = (item) => {
        setOrderItems((prevItems) => {
            // Check if item already exists based on `id`
            const isDuplicate = prevItems.some((prevItem) => prevItem.id === item.id);

            if (isDuplicate) {
                return prevItems; // Return existing state to prevent duplicates
            }
            return [...prevItems, item]; // Add new unique item
        });
    };

    const handleCancelOrder = (item) => {
        setOrderItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
    };

    console.log(orderItems.length); // Debugging - Check the updated order items

    return (
        <OrderContext.Provider value={{ orderItems, handleOrder, handleCancelOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    return useContext(OrderContext);
};