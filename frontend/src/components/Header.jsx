import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
            <div className=' flex flex-row justify-between items-center w-full bg-white rounded-bl-xl rounded-br-xl px-8 h-20 shadow-sm shadow-black'>
                <img src="./logo-bg.png" alt="" className='h-16'/>
                <div className=' cursor-pointer rounded-lg bg-outerspace text-black py-2 px-4 text-center font-medium text-md outline-none shadow-sm shadow-black uppercase' onClick={() => logout()}>Logout</div>
            </div>
    )
}

export default Header