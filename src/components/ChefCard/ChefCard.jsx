import React from 'react';
import { FcLike } from 'react-icons/fc';
import { BiDish } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id , name, picture, experience, num_recipes, likes } = chef;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-24">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-3xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p className=''>Years of Experience: <span className='text-2xl font-bold text-lime-600'>{experience}</span> Years</p>
                    <p>Numbers of Recipes: <span className='text-2xl font-bold text-red-500'>{num_recipes} <BiDish className='inline' /></span></p>
                    <p>Likes: <span className='font-bold'>{likes} <FcLike className='inline ml-2' /></span>
                    </p>
                </div>
                <Link className='btn btn-warning' to={`/recipes/${id}`}  >View Recipes</Link>
            </div>
        </div>
    );
};

export default ChefCard;