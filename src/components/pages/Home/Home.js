import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';
import Tool from './Tool';
import Review from '../Dashboard/Review';

const Home = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-primary m-4 p-4'>Welcome To Our PH-TOOLS Website</h1>
            <Banner></Banner>
            {/* <Tools></Tools> */}
            <h1 className='text-3xl font-bold text-primary my-16'>Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tools={tool}
                    ></Tool>).slice(0, 3)
                }
            </div>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;