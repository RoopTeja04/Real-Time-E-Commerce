import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

const Create = () => {

    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ visible, setVisible ] = useState(false);
    const [ msg, setMsg ] = useState("")
    const navigate = useNavigate();

    const handleCreate = () => {

        const exisitingUser = localStorage.getItem(userName)

        if ( exisitingUser == userName ) {
            alert("already existing user ! ")
            return;
        } 

        localStorage.setItem("intialUsername", userName);
        localStorage.setItem("intialPassword", password);

        setMsg("Account Created Successfully! ");

        setTimeout(() => {
            navigate("/")
        }, 4000);

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
                            <h1 className='text-center text-3xl my-6 tracking-wider underline underline-offset-8'>Create Account</h1>
                            <input 
                                type='text'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder='username'
                                className='bg-transparent border-b-2 m-5 outline-none pb-2 pl-2 font-bold tracking-wide text-xl'
                            />
                            <input
                                type={visible ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='password'
                                className='bg-transparent border-b-2 m-4 outline-none pb-2 pl-2 font-bold tracking-wide text-xl'
                            />
                            <button onClick={handleVisible} className='relative left-72 bottom-12 w-5'>
                                {
                                    visible ? <MdVisibilityOff className='text-2xl' /> : <MdVisibility className='text-2xl' />
                                }
                            </button>
                        </div>
                        <p className='relative text-center bottom-7 text-green-600 text-xl font-bold tracking-wider'>{msg}</p>
                        <div className='h-7 mb-10 flex flex-row justify-around items-center'>
                            <button onClick={handleCreate} className='border-2 px-6 font-semibold tracking-wide text-base h-12 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>Create Account</button>
                            <button onClick={() => navigate("/")} className='text-base capitalize tracking-wide hover:text-green-600 font-semibold'>Login</button>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Create