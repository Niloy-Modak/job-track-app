import React, { use } from 'react';
import { NavLink } from 'react-router';
import mainLogo from '../assets/logo.png'
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const handleLogout = () => {
        console.log('object');
        logOut().then(() => {
            toast.success("logOut complete")
        })
            .catch((error) => {
                toast.error(error)
            });
    }

    const navLink =
        <>
            <li>
                <NavLink className={({ isActive }) =>
                    ` text-[16px]  rounded-none
                 ${isActive ? "text-secondary font-bold  border-b-4" : "font-medium"}`} to='/'>
                    home
                </NavLink>
            </li>
            <li>
                {
                    user ?
                        (
                            <button onClick={handleLogout} className='btn btn-secondary ml-4'>Logout</button>
                        )
                        :
                        (<NavLink className={({ isActive }) =>
                            ` text-[16px]  rounded-none
                 ${isActive ? "text-secondary font-bold  border-b-4" : "font-medium"}`} to='/auth/login'>
                            Login
                        </NavLink>)
                }

            </li>


        </>
    return (

        <nav className="navbar bg-base-100 shadow-sm px-0  mx-auto">
            <div className="navbar-start  md:ml-8 lg:ml-12">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-[44px] md:[50px]' src={mainLogo} alt="" />
                    <a className=" font-bold text-xl px-0">Job<span className='text-orange-400'>Track</span></a>
                </div>

            </div>

            <div className="navbar-end mr-4 md:mr-8 lg:mr-12 space-x-4">

                <ul className="hidden lg:flex menu menu-horizontal space-x-2 px-1">
                    {navLink}
                </ul>
                {/* 
                className={({ isActive }) =>
                  ` text-[18px] rounded-none
                 ${isActive ? "text-gray-800 font-bold  border-b-4" : ""}`}
                
                */}


                {
                    user ?
                        <NavLink to='/my-profile' className={({ isActive }) =>`${isActive ? "hidden" : "block"}`}>
                            <img className='w-12 h-12 rounded-full object-cover hover:border hover:border-amber-500' src={user.photoURL} alt="" />
                        </NavLink> :
                        <button className={`btn btn-secondary ${user ? 'hidden' : ''}`}>
                            <NavLink to='/auth/Registration'>Registration</NavLink>
                        </button>
                }


            </div>
        </nav>


    );
};

export default Navbar;