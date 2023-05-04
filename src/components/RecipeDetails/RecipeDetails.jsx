import React, { useEffect } from 'react';
import { BiDish } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import { useLoaderData, useParams } from 'react-router-dom';
import { GrFavorite } from 'react-icons/gr';
import toast, { Toaster } from 'react-hot-toast';


const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const fav = () => {
        toast('Added to Favourite!', {
            icon: '👏',
        });
    }

    return (
        <div>
            <div><Toaster /></div>
            <div className='flex flex-col items-center m-12'>
                <div className="card w-4/12 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={recipe.picture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-bold">{recipe.name}</h2>
                        <p>Bio: {recipe.bio}</p>
                        <p>Numbers of Recipes: <span className='text-2xl font-bold text-red-500'>{recipe.num_recipes} <BiDish className='inline' /></span></p>
                        <p className=''>Years of Experience: <span className='text-2xl font-bold text-lime-600'>{recipe.experience}</span> Years</p>
                        <p>Likes: <span className='font-bold'>{recipe.likes} <FcLike className='inline ml-2' /></span></p>

                    </div>
                </div>
            </div>
            <div className='flex gap-5 my-24'>
                {
                    recipe.recipe.map((rcp, idx) =>
                        <div key={idx} className="card w-6/12 bg-lime-50 shadow-xl">
                            <div className="card-body items-center">
                                <h2 className="card-title text-3xl">{rcp.name}</h2>
                                <p><span className='font-bold'>Ingredients:</span> {rcp.ingredients}</p>
                                <p><span className='font-bold'>Cooking Method:</span> {rcp.cooking_method}</p>
                                <p>Ratings: {rcp.rating}</p>
                                <button onClick={fav} className='btn btn-error font-bold text-white'><GrFavorite className='mr-3' /> Favourite</button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default RecipeDetails;