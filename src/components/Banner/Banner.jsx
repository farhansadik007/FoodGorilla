import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex items-center'>
            <div className='p-36 w-3/4'>
                <h1 className='text-9xl  font-light'>Welcome to <span className='font-bold'>Food<span className='text-lime-400'>Gorilla</span></span></h1>
            </div>
            <div className='p-36 flex flex-col items-center'>
                <img src="food.png" />
                <Link to='/recipes'><button className='btn btn-warning btn-wide btn-lg mt-24'>All Recipes</button></Link>
            </div>
            
        </div>
    );
};

export default Banner;