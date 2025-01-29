import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './MainPage/NavBar';
import { useTheme } from './ContextAPI/ThemeContext';

const Home = () => {

    const { theme } = useTheme();
        
    const handleLogOut = () => {
        localStorage.removeItem('Login');
        localStorage.removeItem('CurrentUser');
        window.location.href = '/';
    };

    return (
        <div className={`${theme === "Light" ? "dark:bg-gray-900 text-white h-full" :"bg-white text-black h-screen"}`}>
            <NavBar handleLogOut = { handleLogOut } />
            <Outlet />
        </div>
    );
};

export default Home;
