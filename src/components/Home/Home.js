import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getStoredCart } from '../../Utility/fakedb';
import SingleCart from '../SingleCart/SingleCart';
import './Home.css';
import Information from '../Information/Information';
import Details from '../Exercise-Details/Details';
import Question from '../Questuion/Question';

const Home = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, []);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            // console.log(id)
            const addedProduct = activities.find(activity => activity.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct);
            setCart(savedCart);
        }
    }, [activities])

    const handleAddToCart = (selectedProduct) => {
        let newCart = []
        const exists = cart.find(activity => activity.id === selectedProduct);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(activity => activity.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);

    }


    return (
        <section className='border-y-2'>
            <div className='container-body'>
                <div className=' bg-slate-100 pb-14'>
                    <div className='mx-[190px] mt-14'>
                        <div className='flex items-center gap-3 text-indigo-600 mb-6'>
                            <FontAwesomeIcon icon={faDumbbell} className="w-8 h-8"></FontAwesomeIcon>
                            <h1 className='text-3xl font-bold'>Today's Acticity</h1>
                        </div>
                        <h2 className='text-xl font-semibold mb-2'>Select Exercise</h2>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                activities.map(activity => <SingleCart
                                    activity={activity}
                                    key={activity.id}
                                    handleAddToCart={handleAddToCart}
                                ></SingleCart>)
                            }
                        </div>
                        <Question></Question>
                    </div>
                </div>
                <section className='py-4 px-6 '>
                    <div className='sticky top-0'>
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
                        <div className=''>
                            <Information></Information>
                            <Details cart={cart}></Details>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Home;