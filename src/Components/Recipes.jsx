import React, { useContext } from 'react'
import Card from './Card';
import { Link, useLocation } from 'react-router-dom';
import { Recipecontext } from '../contexts/RecipeContext';



const Recipes = () => {
   const [recipes, setrecipes] =  useContext(Recipecontext)
    const {pathname} = useLocation()
    // console.log(pathname)
    console.log(recipes)
  return (
    <div className='w-full relative min-h-screen   p-20  pt-1 '>
      <h1 className=' text-center  font-bold text-3xl mt-[15vh]'>OUR RECIPES</h1>
      <p className=' text-center text-zink-400 pt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, dolore.</p>
      
      {pathname === "/recipes" && (
        <Link to="/create-recipe"  className='bg-green-200 px-3 py-2 font-semibold rounded flex items-center w-fit gap-x-3 '> 
        <i className="text-3xl text-green-600 ri-add-box-line"></i> Create Recipe
        </Link>
      )}
      
    
    <div className='recipe-cards flex flex-wrap  '>
     {recipes.length > 0 ?(
      recipes.map((r) => <Card key={r.id} recipe={r} />)
     ):(
      <h1> No Recipe Found </h1>
     )
     
     }
    </div>
    </div>
  )
}

export default Recipes;