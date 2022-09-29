import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SingleCart from '../SingleCart/SingleCart';
import './Home.css';
import Information from '../Information/Information';

const Home = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <section className='border-t-2'>
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
                <section className='py-4 px-6 '>
                    <div className="w-12 flex gap-3">
                        <img className='rounded-full' src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczkzLXBhLTU3OThfMS5wbmc.png?s=sbMLk1eiRzQUOrMIRvmZPgG2eK7zXEBeeLefvv7JzDY" alt="" />
                        <div className=''>
                            <h1 className='font-bold text-xl'>Zahid Hasan</h1>
                            <div className='flex items-center gap-2 text-slate-400'>
                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                                <p>Sydney,Australia</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Information></Information>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Home;