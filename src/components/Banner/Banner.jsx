import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const Banner = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='flex flex-col items-center'>
            <div className='flex items-center'>
                <div className='p-36 w-3/4'>
                    <h1 className='text-9xl  font-light'>Welcome to <span className='font-bold'>Food<span className='text-lime-400'>Gorilla</span></span></h1>
                </div>
                <div className='p-36 flex flex-col items-center'>
                    <img src="food.png" />
                    <Link to='/recipes'><button className='btn btn-warning btn-wide btn-lg mt-24'>All Recipes</button></Link>
                </div>
            </div>

            <div className="font-bold italic text-7xl p-24">Chefs</div>

            <div className='grid grid-cols-3 gap-24'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }

            </div>

        </div >
    );
};

export default Banner;