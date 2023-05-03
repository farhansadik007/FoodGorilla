import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='flex flex-col items-center mt-16'>
            <div className='flex flex-col items-center'>
                <img className='w-36' src="foodgorilla.png" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-4xl font-bold">Food<span className="text-lime-400">Gorilla</span></Link>
            </div>
            <div className="form-control w-full max-w-xs mt-10">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Type your email here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs mt-5">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Type your password here" className="input input-bordered w-full max-w-xs" />
            </div>
            <button className='btn btn-success btn-wide mt-10 text-white'>Login</button>
            <div>
                <div className="w-full max-w-xs mt-10">
                    <button className="btn btn-wide">
                        <FcGoogle style={{ fontSize: '1.5rem' }} />
                        <span className='pl-5'>Sign In with Google</span>
                    </button>
                </div>
                <div className="w-full max-w-xs mt-10">
                    <button className="btn btn-wide">
                        <FaGithub style={{ fontSize: '1.5rem' }} />
                        <span className='pl-5'>Sign In with Github</span>
                    </button>
                </div>
            </div>
            <div className='mt-10'>
                New to FoodGorilla?
                <Link className='text-lime-600 text-lg' to='/register'> Register</Link>
            </div>
        </div>
    );
};

export default Login;