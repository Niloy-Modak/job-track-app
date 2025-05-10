import React, { useEffect, useState } from 'react';
import CompCart from './CompCart';


const CompanyCont = ({ companyData }) => {
    const [displayCompany, setDisplayCompany] = useState([])
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        showAll ? setDisplayCompany(companyData) : setDisplayCompany(companyData.slice(0, 8));
      }, [companyData, showAll]);
    

    // console.log(companyData);
    return (
        <section className='w-[75%] mx-auto space-y-8 md:space-y-10 mb-14 lg:mb-28'>
            <h1 className='text-2xl md:text-4xl font-bold text-secondary text-shadow-md'>Top Companies For Job</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 '>
                {
                    displayCompany.map(company => <CompCart key={company.id} company={company} />)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-secondary rounded-md' onClick={() => {
                 setShowAll((prv) => !prv);
                  if (showAll) window.scrollTo(0, 860);
                }}>
                {showAll ? "View Less" : "View All Company"}
            </button>
            </div>

            

        </section>


    );
};

export default CompanyCont;