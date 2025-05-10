import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import CompanyCont from '../components/CompanyCont';
import { useLoaderData } from 'react-router';
import Review from '../components/Review';


const Home = () => {
    const data =useLoaderData()
    const [companyData] = useState(data)
    useEffect(()=>{
        document.title = "Home page"
    })
    return (
        <div>
            <Banner/>
            <CompanyCont companyData={companyData}/>
            <Review/>
        </div>
    );
};

export default Home;