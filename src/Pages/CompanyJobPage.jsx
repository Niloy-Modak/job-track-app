import React, { useEffect } from 'react';
import { SlLocationPin } from "react-icons/sl";
import { useLoaderData, useParams } from 'react-router';
import JobCart from '../components/JobCart';


const CompanyJobPage = () => {

    const data = useLoaderData()
    const { id } = useParams()

   

    const singleData = data.find(company => company.id == parseInt(id))

     useEffect(()=>{
        document.title= `Job Page - ${singleData.name}`
    })
 

    return (
        <div className='w-[80%] mx-auto  '>
            
            <div className='flex flex-col md:flex-row  justify-center gap-4 lg:gap-8 bg-[#fdf5efb6] p-4 my-4 lg:py-6 lg:my-8 shadow rounded-md'>
                <img src={singleData.logo} className='lg:w-48 lg:h-48 w-28 h-28  object-cover rounded-xl border border-gray-300 shadow-sm' alt="" />

                <div>
                    <div className='space-y-2 lg:space-y-3'>

                        <h1 className='lg:text-3xl text-2xl font-bold'>
                            {singleData.name}
                        </h1>

                        <div className='lg:text-xl text-base flex font-medium'>
                            <SlLocationPin className='mt-1 ' />
                            <p>
                                {singleData.location}
                            </p>
                        </div>
                    </div>
                    <div className='lg:my-8 my-2.5 space-y-2 mg:space-y-4 text-xs lg:text-base'>
                        <h1 className='font-semibold text-gray-400'>
                            {singleData.industry} Company
                        </h1>
                        <p >
                            <span className='font-semibold text-gray-600'>Visit our website: </span><a target='blank' href={singleData.website}><button className='btn h-8 rounded-2xl bg-[#ffbd86]'>click here</button></a>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold py-4'>
                   Your Jobs :
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        singleData.jobs.map(job => <JobCart key={job.id} web={singleData.website} job={job} />)
                    }
                </div>
            </div>


        </div>



    );
};

export default CompanyJobPage;