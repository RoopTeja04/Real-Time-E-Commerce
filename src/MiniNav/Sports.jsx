import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sports = () => {

  return (
    <>
      <div className='flex flex-row justify-evenly p-2 tracking-wide text-base border-b-2 border-gray-300'>
        <Link to="cricketbats">Cricket Bat's</Link>
        <Link to="jersey">Jersey's</Link>
        <Link to="sportshoes">Sport Shoes's</Link>
      </div>
      <Outlet />
    </>
  )
}

export default Sports