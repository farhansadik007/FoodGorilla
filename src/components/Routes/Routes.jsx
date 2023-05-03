import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Banner from '../Banner/Banner';
import LoginRegister from '../LoginRegister/LoginRegister';
import Login from '../Login/Login';
import Register from '../Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            }
        ]
    },
    {
        path: '/',
        element: <LoginRegister></LoginRegister>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;