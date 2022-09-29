import React from 'react';

const Details = () => {
    return (
        <div className='mt-9'>
            <h1 className='mb-3 text-xl font-semibold'>Exercise Details</h1>
            <div className='p-3 bg-slate-100 rounded-lg mb-5'>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Exercise time</p>
                    <p className='text-slate-400'>200 <span>seconds</span></p>
                </div>
            </div>
            <div className='p-3 bg-slate-100 rounded-lg mb-10'>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Break time</p>
                    <p className='text-slate-400'>20 <span>seconds</span></p>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='w-[300px] border-2  text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Details;