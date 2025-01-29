import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

const Login = () => {

    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState("");
    const [ visible, setVisible ] = useState(false);

    const navigate = useNavigate();

    const storedUsername = localStorage.getItem("intialUsername");
    const storedpassWord = localStorage.getItem("intialPassword");

    const handleLogin = (e) => {

        e.preventDefault();

        if ( userName && password ){
            if ( userName === storedUsername && password === storedpassWord || userName === "admin" && password === "123456" ){
                localStorage.setItem("Login", "true");
                localStorage.setItem("CurrentUser", userName)
                localStorage.setItem("CurrentPassword", password)
                window.location.href="/home"
            }
            else{
                setError(" username or password doesn't matched ")
            }
        }
        else{
            setError("Invalid Credentials !")
        }

    }

    const handleVisible = () => {
        setVisible(!visible)
    }

    return (
        <>
            <div className='relative h-screen'>
                <div className='absolute inset-0 bg-bg-login-image bg-center w-full z-0'></div>
                <div className='absolute inset-0 bg-slate-800 bg-opacity-85 z-0 h-full'></div>    
                <div className='relative text-white flex items-center justify-center h-screen'>
                    <div className='border-2 border-white w-1/4 backdrop-blur-lg rounded-3xl'>
                        <div className='flex flex-col mx-6 my-4'>
                            <h1 className='text-center text-3xl my-6 tracking-wider underline underline-offset-8'>LOG IN</h1>
                            <input 
                                type='text'
                                placeholder='username'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className='bg-transparent border-b-2 m-5 outline-none pb-2 pl-2 font-bold tracking-wide text-xl'
                            />
                            <input 
                                type={visible ? "text" : "password"}
                                placeholder='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-transparent border-b-2 m-4 outline-none pb-2 pl-2 font-bold tracking-wide text-xl'
                            />
                            <button onClick={handleVisible} className='relative left-72 bottom-12 w-5'>
                                {
                                    visible ? <MdVisibilityOff className='text-2xl' /> : <MdVisibility className='text-2xl' />
                                }
                            </button>
                        </div>
                        <p className='relative text-center bottom-6 text-red-600 font-bold text-xl tracking-wide'>{error}</p>
                        <div className='h-7 mb-10 flex flex-row justify-around items-center'>
                            <button onClick={() => navigate("/create-account")} className='text-base capitalize tracking-wide hover:text-green-600 font-semibold'>Create Account</button> 
                            <button onClick={handleLogin} className='border-2 px-6 font-semibold tracking-wide text-base h-12 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>Log In</button>   
                        </div>
                    </div>  
                </div>  
            </div>
        </>
    )
}

export default Login