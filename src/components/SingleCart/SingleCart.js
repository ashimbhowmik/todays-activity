import React from 'react';

const SingleCart = (props) => {
    console.log(props.activity)
    const { discribe, title, img, time, age } = props.activity;
    return (
        <div className=' rounded-md relative bg-white mt-4 h-[600px] '>
            <div className='p-4'>
                <img className='w-full h-[200px] rounded-md' src={img} alt="" />
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-semibold '>{title}</h2>
                <p className='mt-4'>{discribe}</p>
                <p className='mt-4'>For Age : {age}</p>
                <p className='mt-4'>Time required : {time}</p>
            </div>
            <div className='absolute bottom-0 left-8'>
                <button className='  w-[300px] border-2  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Add to list</button>
            </div>
        </div>
    );
};

export default SingleCart;