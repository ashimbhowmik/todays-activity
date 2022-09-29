import React from 'react';

const Information = () => {
    return (
        <section className='mt-7'>
            <div className='grid grid-cols-3 gap-5 p-5 rounded-md bg-slate-100'>
                <div className='mx-auto'>
                    <p className='text-2xl font-bold'>75<small className='text-sm text-slate-400 font-semibold'>kg</small></p>
                    <p className='text-slate-400'>Weight</p>
                </div>
                <div className='mx-auto'>
                    <p className='text-2xl font-bold'>6.5</p>
                    <p className='text-slate-400'>Height</p>
                </div>
                <div className='mx-auto'>
                    <p className='text-2xl font-bold'>25<small className='text-sm text-slate-400 font-semibold'>yrs</small></p>
                    <p className='text-slate-400'>Age</p>
                </div>
            </div>
            <div className='mt-6'>
                <h1 className='font-semibold text-xl mb-6'>Add Break</h1>
                <div className='grid grid-cols-5 gap-5 bg-slate-100 p-5 rounded-lg'>
                    <p className='bg-white rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-indigo-500 hover:text-white cursor-pointer'>10<span>s</span></p>
                    <p className='bg-indigo-500 text-white rounded-full w-10 h-10 flex justify-center items-center font-semibold cursor-pointer'>20<span>s</span></p>
                    <p className='bg-white rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-indigo-500 hover:text-white cursor-pointer'>30<span>s</span></p>
                    <p className='bg-white rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-indigo-500 hover:text-white cursor-pointer'>40<span>s</span></p>
                    <p className='bg-white rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-indigo-500 hover:text-white cursor-pointer'>50<span>s</span></p>
                </div>
            </div>
        </section>
    );
};

export default Information;