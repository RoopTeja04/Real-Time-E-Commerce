import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MensWear = () => {
  return (
    <>
      <div className='flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 border-gray-300'>
        <Link to="shirts">Shirts's</Link>
        <Link to="pants">Pant's</Link>
        <Link to="shoes">Shoes's</Link>
        <Link to="watches">Watch's</Link>
      </div>
      <Outlet />
    </>
  )
}

export default MensWear