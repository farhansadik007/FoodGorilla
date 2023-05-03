import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-56'>
            <h1 className='text-9xl'>404</h1>
            <p className='text-5xl mt-5'>Not Found<span className='text-error'>!</span></p>
            <Link className='btn btn-error mt-10' to="/">Go Back to Home</Link>
        </div>
    );
};

export default Error;