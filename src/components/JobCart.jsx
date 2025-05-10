import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { IoIosCloseCircle } from "react-icons/io";

const JobCart = ({ job, web }) => {

    return (
        <div className='bg-[#fdf5efb6] p-4 md:p-6 rounded-xl shadow'>
            <div className='space-y-3'>
                <p className='text-2xl font-semibold'>{job.title}</p>

                <p className='border-b-1 border-t-1 border-dashed py-3 '>
                    {job.description}
                </p>

            </div>
            

            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-primary text-white mt-2 md:mt-3" onClick={() => document.getElementById('my_modal_3').showModal()}>View details</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box p-0">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="cursor-pointer text-red-400 hover:text-red-500 absolute right-2 top-2 btn-circle p-0 border"><IoIosCloseCircle size={34}/></button>
                        </form>

                        {/* main details */}
                        <div className='bg-[#fdf5efb6] p-6 md:p-8 rounded-xl shadow '>

                            <div className='space-y-3'>
                                <p className='text-2xl font-semibold'>{job.title}</p>

                                <h1 >
                                    <span className='btn h-7 px-2 text-[#0BA02C] bg-[#E7F6EA]'>
                                        {job.jobType}
                                    </span >  <span className='text-gray-600 font-medium'> Salary: {job.salary}</span>
                                </h1>
                                <p className='flex items-center text-gray-500'>
                                    <MdOutlineLocationOn /> {job.location}
                                </p>

                                <p>
                                    {job.description}
                                </p>

                            </div>
                            <div className='mt-3'>
                                <p className='text-[18px] font-medium mb-1.5'>Requirement Skills:</p>
                                <div className='space-y-2'>
                                    {
                                        job.requirements.map(req => <p key={req} className='bg-[#ffeddf] p-1 rounded flex items-center gap-3'><VscDebugBreakpointLog /> {req}</p>)
                                    }
                                </div>
                            </div>
                            <a target='blank' href={web} >
                                <button className='btn btn-primary text-white mt-2 md:mt-3'>
                                    apply now
                                </button>
                            </a>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default JobCart;