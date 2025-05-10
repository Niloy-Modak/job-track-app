import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import { Link, useRouteError } from 'react-router';
import Footer from '../components/Footer';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <Navbar />
            <div className='py-24 text-center min-h-[calc(100vh-290px)]'>
                <h1 className='mb-8 text-7xl font-thin text-gray-900'>
                    {error?.status || 404}
                </h1>
                <p className='md:mb-12 mb-8 text-xl font-bold text-gray-900 md:text-2xl'>
                    {error?.error?.message || 'Something Went Wrong!'}
                </p>
                <Link to='/'>
                    <button className='btn btn-secondary'>Go back home</button>
                </Link>
            </div>
            
            <Footer/>
        </div>
    );
};

export default ErrorPage;