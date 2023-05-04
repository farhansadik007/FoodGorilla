import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div>
                <img className='w-24' src="foodgorilla.png" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-4xl font-bold">Food<span className="text-lime-400">Gorilla</span></Link>
            </div>
            <div>
                <ul className="menu menu-horizontal px-1 flex items-center">
                    <li className='pr-8'>
                        <Link to="/">Home</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Recipes</Link>
                    </li>
                    <li>

                        {user &&
                            <button className="tooltip tooltip-bottom" data-tip={`${user.email}`}>
                            <FaUserCircle style={{ fontSize: '3rem'}} />
                            </button>
                            
                        }
                        <div>

                        {user ?
                            <Button onClick={handleLogOut} className='text-white'>Logout</Button> :
                            <Link to='/login'>
                                <Button className='text-white'>Login</Button>
                            </Link>
                        }
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;