import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { Toaster } from 'react-hot-toast';
import Loading from '../components/Loading';
import Footer from '../components/Footer';




const MainLayout = () => {
    const { state } = useNavigation()
    return (
        <>
            <header>
                <Navbar />
                <section className="min-h-[calc(100vh-304px)]">
                    {state == "loading" ? <Loading /> : <Outlet />}
                </section>

            </header>
            <Footer />
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    );
};

export default MainLayout;