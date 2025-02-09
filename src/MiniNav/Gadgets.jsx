import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../ContextAPI/ThemeContext'

const Gadgets = () => {

  const { theme } = useTheme();

  return (
    <>
      <div className={`flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 ${ theme === "Light" ? "border-white font-medium" : "border-gray-900 font-medium" }`}>
        <Link to="speakers">Speaker's</Link>
        <Link to="watches">Watch's</Link>
      </div>
      <Outlet />
    </>
  )
}

export default Gadgets