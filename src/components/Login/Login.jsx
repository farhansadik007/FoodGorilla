import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, {Toaster} from 'react-hot-toast';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                toast.error("Wrong Email or Password!")
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(error => console.log(error))
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;

            })
            .catch(error => console.log(error))
    }


    return (
        <div className='flex flex-col items-center mt-16'>
            <div><Toaster/></div>
            <div className='flex flex-col items-center'>
                <img className='w-36' src="foodgorilla.png" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-4xl font-bold">Food<span className="text-lime-400">Gorilla</span></Link>
            </div>
            <Form onSubmit={handleLogin} className='w-full max-w-xs flex flex-col items-center'>
                <div className="form-control w-full max-w-xs mt-10">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Type your email here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs mt-5">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Type your password here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <button className='btn btn-success btn-wide mt-10 text-white'>Login</button>
            </Form>
            <div>
                <div className="w-full max-w-xs mt-10">
                    <button onClick={handleGoogleSignIn} className="btn btn-wide">
                        <FcGoogle style={{ fontSize: '1.5rem' }} />
                        <span className='pl-5'>Sign In with Google</span>
                    </button>
                </div>
                <div className="w-full max-w-xs mt-10">
                    <button onClick={handleGithubSignIn} className="btn btn-wide">
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