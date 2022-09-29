import React from 'react';

const SingleCart = (props) => {
    console.log(props.activity)
    const { discribe, title, img, time, age } = props.activity;
    const { activity, handleAddToCart } = props;

    console.log(props.clickedValue)
    return (
        <div className=' rounded-md lg:relative bg-white lg:mt-4 mt-10 lg:h-[600px]'>
            <div className='p-4'>
                <img className='w-full h-[200px] rounded-md' src={img} alt="" />
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-semibold '>{title}</h2>
                <p className='mt-4 text-slate-500'>{discribe}</p>
                <p className='mt-4'>For Age : {age}</p>
                <p className='mt-4'>Time required : {time}<span>s</span></p>
            </div>
            <div className='lg:absolute bottom-0 lg:left-8 mb-3 relative left-6'>
                <button id='change-color' className=' w-[300px] border-2  text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => handleAddToCart(activity)}>Add to list</button>
            </div>
        </div>
    );
};

export default SingleCart;