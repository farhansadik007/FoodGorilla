import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Banner from '../Banner/Banner';
import LoginRegister from '../LoginRegister/LoginRegister';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
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
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;