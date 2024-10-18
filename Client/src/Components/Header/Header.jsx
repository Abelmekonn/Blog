import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Header = () => {
    return (
        <div className='w-full fixed top-0 bg-black text-white opacity-80  flex justify-between px-8 py-4'>
            <div>
                <Link to="/">
                    <h1 className='text-2xl'>Merja</h1>
                </Link>
            </div>

            <div className='flex gap-4'>
                <div className='flex gap-4 text-xl items-center'>
                    <Link to="/">
                        <h1 className='hover:text-orange-800 hover:scale-110'>Home</h1>
                    </Link>
                    <Link to="/about">
                        <h1 className='hover:text-orange-800 hover:scale-110'>About</h1>
                    </Link>
                    <Link to="/articles">
                        <h1 className='hover:text-orange-800 hover:scale-110'>Articles</h1>
                    </Link>
                    <Link to="/contact">
                        <h1 className='hover:text-orange-800 hover:scale-110'>Contact</h1>
                    </Link>
                </div>
                <div className='flex gap-3 items-center'>
                    <Link to="#">
                        <p><FaFacebook  size={20}/></p>
                    </Link>
                    <Link to="#">
                        <h1><FaTwitter  size={20}/></h1>
                    </Link>
                    <Link to="#">
                        <h1><FaYoutube  size={20}/></h1>
                    </Link>
                </div >
                <div className='flex gap-4'>
                    <Link to="/login">
                        <button className='px-5 py-2 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg'>Login</button>
                    </Link>
                    <Link to="/register">
                        <button className='px-5 py-2 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg'>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
