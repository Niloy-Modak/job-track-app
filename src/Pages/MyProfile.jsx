import React, { use, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink } from 'react-router';


const MyProfile = () => {
    const { user } = use(AuthContext)

     useEffect(()=>{
        document.title= 'My Profile page'
    })

    return (
        <div>
      
            <h1 className='text-4xl font-bold bg-[#fdf5efb6] rounded-2xl w-[85%] md:w-[75%] mx-auto p-5 mt-6 text-center shadow'>
                My Profile
            </h1>
            <div className='flex flex-col items-center bg-[#fdf5efb6] rounded-2xl w-[85%] md:w-[75%] mx-auto p-5 mt-6 shadow'>
                <img className='w-64 h-64 object-cover' src={user.photoURL} alt="" />
                <div className='space-y-3 mt-3'>
                    <h1 className='text-xl bg-[#ffeddf] rounded-xl px-3 shadow py-1'>Name: {user.displayName}</h1>
                    <h1 className='text-xl bg-[#ffeddf] rounded-xl px-3 shadow py1'>Email: {user.email}</h1>
                </div>
                <div>
                    <NavLink to='/auth/update-profile' >
                        <h1 className='text-xl bg-[#ffeddf] rounded-xl px-3 shadow py1 mt-8 cursor-pointer'>Update Profile</h1>
                    </NavLink>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;