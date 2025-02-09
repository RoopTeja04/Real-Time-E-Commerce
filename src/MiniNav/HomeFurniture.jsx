import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useTheme } from '../ContextAPI/ThemeContext';

const HomeFurniture = () => {

  const { theme } = useTheme();

  return (
    <>
      <div className={`flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 ${ theme === "Light" ? "border-white font-medium" : "border-gray-900 font-medium" }`}>
        <Link to="beddingMattresses">Bedding Mattresses's</Link>
        <Link to="outdoorUmbrellas">Outdoor Umbrellas's</Link>
        <Link to="sofasCouches">Sofas Couches's</Link>
        <Link to="wardeobesClosets">Wardeobes Closets's</Link>
      </div>
      <Outlet />
    </>
  )
}

export default HomeFurniture