import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Banner from '../Banner/Banner';
import LoginRegister from '../LoginRegister/LoginRegister';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

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
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
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
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;