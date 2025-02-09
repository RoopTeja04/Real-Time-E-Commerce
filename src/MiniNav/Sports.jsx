import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../ContextAPI/ThemeContext';

const Sports = () => {

  const { theme } = useTheme();

  return (
    <>
      <div className={`flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 ${ theme === "Light" ? "border-white font-medium" : "border-gray-900 font-medium" }`}>
        <Link to="cricketbats">Cricket Bat's</Link>
        <Link to="jersey">Jersey's</Link>
        <Link to="sportshoes">Sport Shoes's</Link>
      </div>
      <Outlet />
    </>
  )
}

export default Sports