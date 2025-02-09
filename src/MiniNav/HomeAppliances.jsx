import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../ContextAPI/ThemeContext';

const HomeAppliances = () => {

  const { theme } = useTheme();

  return (
    <>
      <div className={`flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 ${ theme === "Light" ? "border-white font-medium" : "border-gray-900 font-medium" }`}>
        <Link to="airconditioners">airconditioner's</Link>
        <Link to="microwave">Microwave's</Link>
        <Link to="refrigerators">Refrigerator's</Link>
        <Link to="st">Shaver's & Trimmer's</Link>
        <Link to="washingmachines">Washing Machines</Link>
      </div>
      <Outlet />
    </>
  )
}

export default HomeAppliances