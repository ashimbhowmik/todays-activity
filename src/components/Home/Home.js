import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Home.css';

const Home = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <div className=''>
            <div className='container-body'>
                <div className=' bg-slate-100'>
                    <div className='mx-[190px] mt-14'>
                        <div className=''>
                            <h1 className='text-3xl font-semibold'>Today's Acticity</h1>
                        </div>
                        <h2>Select Exercise</h2>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                activities.map(activity => <SingleCart
                                    activity={activity}
                                    key={activity.id}

                                ></SingleCart>)
                            }
                        </div>
                    </div>
                </div>
                <section className='py-4 px-6 border-t-2'>
                    <div className="w-12 ">
                        <img className='rounded-full' src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczkzLXBhLTU3OThfMS5wbmc.png?s=sbMLk1eiRzQUOrMIRvmZPgG2eK7zXEBeeLefvv7JzDY" alt="" />
                        <div>
                            <h1>Zahid Hasan</h1>
                            <div>
                                <p></p>
                                <p>Sydney,Australia</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;