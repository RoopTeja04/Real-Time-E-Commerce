import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../ContextAPI/ThemeContext';

const LadiesWear = () => {

  const { theme } = useTheme();

  return (
    <>
      <div className={`flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 ${ theme === "Light" ? "border-white font-medium" : "border-gray-900 font-medium" } border-gray-300`}>
        <Link to="sarees">Saree's</Link>
        <Link to="kurthas">Kurtha's</Link>
        <Link to="slippers">Slipper's</Link>
      </div>
      <Outlet />
    </>
  )
}

export default LadiesWear