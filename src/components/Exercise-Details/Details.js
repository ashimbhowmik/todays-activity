import React from 'react';
import { addToast, deleteToast } from '../../Utility/fakedb';

const Details = (props) => {
    const { cart } = props;
    let time = 0;
    for (const activity of cart) {
        time = time + activity.time;
    }
    const breakTime = localStorage.getItem('breakTime');

    return (
        <div className='mt-9'>
            <h1 className='mb-3 text-xl font-semibold'>Exercise Details</h1>
            <div className='p-3 bg-slate-100 rounded-lg mb-5'>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Exercise time</p>
                    <p className='text-slate-400'>{time} <span>seconds</span></p>
                </div>
            </div>
            <div className='p-3 bg-slate-100 rounded-lg mb-10'>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Break time</p>
                    <p className='text-slate-400'><span id='break-time'>{breakTime}</span> seconds</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <button id='add-toast' className='w-[300px] border-2  text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={addToast}>Activity Completed</button>
            </div>

            <div id="toast-interactive" className="p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 mt-6 hidden" role="alert">
                <div className="flex">

                    <div className="ml-3 text-sm font-normal">
                        <span className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Daily Activity</span>
                        <div className=" text-sm font-normal">Your daily activity completed sucessfully</div>
                        <div className="mb-2 text-sm font-normal">You Can update your activity</div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <a href="#update" className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Update</a>
                            </div>
                            <div>
                                <a href="#not" className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Not now</a>
                            </div>
                        </div>
                    </div>
                    <button id='close-toast' onClick={deleteToast} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-interactive" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Details;