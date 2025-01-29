import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Electronics = () => {
  return (
    <>
      <div className='flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 border-gray-300'>
        <Link to="mobiles">Mobiles</Link>
        <Link to="laptops">Laptops</Link>
        <Link to="airpods">AirPods</Link>
        <Link to="tvs">TV</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Electronics;
