import React from 'react';
import { Link, Outlet } from "react-router-dom";

const HomeFurniture = () => {
  return (
    <>
      <div className='flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 border-gray-300'>
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