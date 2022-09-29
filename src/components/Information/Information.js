import React from 'react';

const Information = () => {

    const handleClickedValue = (e) => {
        localStorage.setItem('breakTime', e.target.innerText);
        document.getElementById("break-time").innerText = e.target.innerText
    }

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
                    <button className='bg-white rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-indigo-500 hover:text-white cursor-pointer' onClick={handleClickedValue}>10</button>
                    <button className='bg-white rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-indigo-500 hover:text-white cursor-pointer' onClick={handleClickedValue}>20</button>
                    <button className='bg-white rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-indigo-500 hover:text-white cursor-pointer' onClick={handleClickedValue}>30</button>
                    <button className='bg-white rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-indigo-500 hover:text-white cursor-pointer' onClick={handleClickedValue}>40</button>
                    <button className='bg-white rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-indigo-500 hover:text-white cursor-pointer' onClick={handleClickedValue}>50</button>

                </div>
            </div>
        </section>
    );
};

export default Information;