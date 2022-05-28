import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://serene-gorge-55852.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl font-bold text-primary my-16'>Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tools={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;