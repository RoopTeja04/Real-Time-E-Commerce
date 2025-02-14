import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {}

export const useOrder = () => {
    return useContext(OrderContext);
}