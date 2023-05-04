import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex justify-center m-72'><progress className="progress w-56"></progress></div>;
    }


    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/auth/login' replace></Navigate>
};

export default PrivateRoute;