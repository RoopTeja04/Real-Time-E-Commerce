import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useTheme } from '../ContextAPI/ThemeContext';
import { useNavigate } from 'react-router-dom';

const CashPayment = () => {
    
    const { theme } = useTheme();
    const navigate = useNavigate();
    
    return (
        <>
            <div className='min-h-screen pt-4 pl-2'>
                <button 
                    className={`border-2 ${ theme === "Light" ? "border-white" : "border-gray-900"} rounded-full w-12 text-2xl p-2 flex justify-center cursor-pointer`}
                    onClick={ () => navigate(-1) }
                >
                    <IoMdArrowRoundBack  />
                </button>
            </div>    
        </>
    )
}

export default CashPayment