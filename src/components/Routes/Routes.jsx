import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Banner from '../Banner/Banner';
import LoginRegister from '../LoginRegister/LoginRegister';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import Blog from '../Blog/Blog';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: '/recipes/:id',
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/auth',
        element: <LoginRegister></LoginRegister>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
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