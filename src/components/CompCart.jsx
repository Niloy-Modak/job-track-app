import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from 'react-router';

const CompCart = ({company}) => {
    


    return (
        <div className='rounded-xl shadow p-6 bg-[#fcf4ee] space-y-4'>
            <div className='flex  gap-4 '>
            <div>  
                <Link to={`/jobs/${company.id}`}>
                    <img className='w-14 h-14 object-cover rounded-xl border border-primary hover:border-[#fcac51] shadow-sm' src={company.logo} alt="" />
                </Link>
            </div>
            <div>
                <h1 className='text-base font-medium'>{company.name}</h1>
                <span className='flex items-center text-gray-400'>
                    <MdOutlineLocationOn /><h1>{company.location}</h1>
                </span> 
            </div> 
        </div>
        <Link to={`/jobs/${company.id}`}>
            <button className='btn bg-[#fcac51] hover:bg-[#F7921E] text-white w-full rounded-2xl '>
                view jobs
            </button>
        </Link>
        </div>
        
    );
};

export default CompCart;