import React from 'react';
import banner from '../assets/Illustration.png'
import { TfiBag } from "react-icons/tfi";
import CountUp from 'react-countup';
import { LuBuilding } from "react-icons/lu";
import { IoIosContacts } from "react-icons/io";



const Banner = () => {



    return (
        <div className='w-[90%] mx-auto mb-14 lg:mb-28'>
        <div className='flex flex-col md:grid md:grid-cols-2 lg:h-[664px] justify-between items-center gap-8 md:gap-2  mt-4'>
            <div className='px-8 '>
                <h1 className='lg:text-5xl text-2xl md:text-3xl font-bold text-primary text-shadow-md'>
                Find your next opportunity <br /> with out any hassle
                </h1>
                <p className='lg:text-base text-sm pt-5 text-gray-600'>
                Easily find your ideal job with our smart search tools. Browse opportunities tailored to your skills,  track your applications, and manage your job hunt efficiently—all in one convenient platform.
                </p>
            </div>
            <div className=''>
                <img className='w-[90%] lg:w-[70%] mx-auto' src={banner} alt="" />      
            </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center justify-center my-4 lg:mt-0 lg:w-[70%] lg:mx-auto'>
            <div className='flex p-4 bg-[#fcf4ee] gap-4 lg:w-[275px] shadow'>
                <div>
                    <TfiBag className='bg-blue-300 p-4' size={60} />
                </div>
                
                <div>
                    <h1 className='text-2xl font-semibold'>
                        <CountUp end={17500} duration={4}/>
                    </h1>
                    <p>
                        Live Jobs
                    </p> 
                </div>

                
            </div>

            <div className='flex p-4 bg-[#fcf4ee] gap-4 lg:w-[275px] shadow'>
                <div>
                    <LuBuilding className='bg-amber-200 p-4' size={60} />
                </div>
                
                <div>
                    <h1 className='text-2xl font-semibold'>
                        <CountUp end={12500} duration={4}/>
                    </h1>
                    <p>
                        Live Jobs
                    </p> 
                </div>

                
            </div>
            <div className='flex p-4 bg-[#fcf4ee] gap-4 lg:w-[275px] shadow'>
                <div>
                    <IoIosContacts className='bg-blue-300 p-2' size={60} />
                </div>
                
                <div >
                    <h1 className='text-2xl font-semibold'>
                        <CountUp end={27500} duration={4}/>
                    </h1>
                    <p>
                        Candidates
                    </p> 
                </div>

                
            </div>
            <div className='flex p-4 bg-[#fcf4ee] gap-4 lg:w-[275px] shadow'>
                <div>
                    <TfiBag className='bg-blue-300 p-4' size={60} />
                </div>
                
                <div>
                    <h1 className='text-2xl font-semibold'>
                        <CountUp end={9500} duration={4}/>
                    </h1>
                    <p>
                        New Jobs
                    </p> 
                </div>

                
            </div>
        </div>

        </div>
    );
};

export default Banner;