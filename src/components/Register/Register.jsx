import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, {Toaster} from 'react-hot-toast';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast('Password is less than 6 characters.', {
                icon: '😟',
            });
            return;
        }
        else {


            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    form.reset();
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    return (
        <div className='flex flex-col items-center mt-16'>
            <div><Toaster/></div>
            <div className='flex flex-col items-center'>
                <img className='w-36' src="foodgorilla.png" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-4xl font-bold">Food<span className="text-lime-400">Gorilla</span></Link>
            </div>


            <Form onSubmit={handleRegister} className='w-full max-w-xs flex flex-col items-center'>
                <div className="form-control w-full max-w-xs mt-10">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Type your name here" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mt-5">
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
                <div className="form-control w-full max-w-xs mt-5">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Type your photo url here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <button className='btn btn-success btn-wide mt-10 text-white'>Register</button>
            </Form>

            <div className='mt-10'>
                Already a member?
                <Link className='text-lime-600 text-lg' to='/login'> Login</Link>
            </div>
        </div>
    );
};

export default Register;