import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../ContextAPI/ThemeContext';

const MensWear = () => {

  const { theme } = useTheme();

  return (
    <>
      <div className={`flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 ${ theme === "Light" ? "border-white font-medium" : "border-gray-900 font-medium" }`}>
        <Link to="shirts">Shirts's</Link>
        <Link to="pants">Pant's</Link>
        <Link to="shoes">Shoes's</Link>
      </div>
      <Outlet />
    </>
  )
}

export default MensWear