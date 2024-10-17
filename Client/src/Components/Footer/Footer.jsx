import React from "react";
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-black py-8 flex justify-between px-10 text-white">
            <div>
                <h1 className="text-3xl mb-3">Contact</h1>
                <p className="text-gray-400 text-xl">Phone: 123456789</p>
                <p className="text-gray-400 text-xl">Email: tmee@gmail.com</p>
            </div>
            <div>
                <h1 className="text-3xl mb-3">Explorate</h1>
                <Link to="/about">
                    <p className="text-gray-400 text-xl">About</p>
                </Link>
                <Link to="/articles">
                    <p className="text-gray-400 text-xl">Articles</p>
                </Link>
                <Link to="/contact">
                    <p className="text-gray-400 text-xl">Contact</p>
                </Link>

                    
            </div>
            <div>
                <h1 className="text-3xl mb-3">Follow us</h1>
                <div className="flex gap-4">
                <Link to="#">
                    <p><FaFacebook  size={20}/></p>
                </Link>
                <Link to="#">
                    <h1><FaTwitter  size={20}/></h1>
                </Link>
                <Link to="#">
                    <h1><FaYoutube  size={20}/></h1>
                </Link>
                </div>
            </div>
        </div>
    )
};

export default Footer;
