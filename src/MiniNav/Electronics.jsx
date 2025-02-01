import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Electronics = () => {
  return (
    <>
      <div className='flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 border-gray-300'>
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
