import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Anveshan-logo-transparent.png";

export default function Footer() {
    return (
        <footer className='bg-white shadow-2xl bottom-0 border-y'>
            <div className='mx-auto w-full px-4'>
                <div className='flex justify-between'>
                    <div>
                        <Link to="/" className='flex items-center'>
                            <img
                                src={logo}
                                alt="Logo"
                                className='h-30 w-auto'
                            />
                        </Link>
                    </div>
                    <div className='grid grid-cols-3 gap-6 mt-2'>
                        <div>
                            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>Resources</h2>
                            <ul className='text-gray-500 font-medium'>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>Follow us</h2>
                            <ul className='text-gray-500 font-medium'>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Intagram
                                    </a>
                                </li>
                                <li>
                                    <Link to="/">Facebook</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>Legal</h2>
                            <ul className='text-gray-500 font-medium'>
                                <li>
                                    <Link to="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='flex justify-center'>
                    <span>© 2025. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
}