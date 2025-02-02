import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const HomeAppliances = () => {
  return (
    <>
      <div className='flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 border-gray-300'>
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