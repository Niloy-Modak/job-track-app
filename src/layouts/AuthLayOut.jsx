import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const AuthLayOut = () => {
   return (
        <div className='min-h-screen'>
        <header className=''>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </main>
        </div>
    );
};

export default AuthLayOut;