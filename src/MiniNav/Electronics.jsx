import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../ContextAPI/ThemeContext';

const Electronics = () => {

  const { theme } = useTheme();

  return (
    <>
      <div className={`flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 ${ theme === "Light" ? "border-white font-medium" : "border-gray-900 font-medium" }`}>
        <Link to="mobiles">Mobile's</Link>
        <Link to="laptops">Laptop's</Link>
        <Link to="airpods">AirPod's</Link>
        <Link to="tvs">TV's</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Electronics;
