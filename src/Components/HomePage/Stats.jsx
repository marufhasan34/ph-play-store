import React from 'react';

const Stats = () => {
    return (
        <div className='bg-purple-500 text-center  text-white p-15'>
            <h2 className='font-bold text-4xl '>Trusted by Millions, Built for You</h2>
            <div className='flex flex-col md:flex-row justify-around mt-5 container mx-auto'>
                <div className='space-y-3'>
                    <p>Total Downloads</p>
                    <h3 className='text-5xl font-bold'>29.6M</h3>
                    <p>21% more than last month</p>
                </div>
                <div className='space-y-3'>
                    <p>Total Reviews</p>
                    <h3 className='text-5xl font-bold'>906K</h3>
                    <p>46% more than last month</p>
                </div>
                <div className='space-y-3'>
                    <p>Active Apps</p>
                    <h3 className='text-5xl font-bold'>132+</h3>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;