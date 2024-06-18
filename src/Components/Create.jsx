import React, { useContext, useState } from 'react'
import { Recipecontext } from '../contexts/RecipeContext'
import { nanoid } from "nanoid";
import { toast } from 'react-toastify';




const Create = () => {

  const [recipes, setrecipes] = useContext(Recipecontext)

  const [image, setimage] = useState("")
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [ingredients, setingredients] = useState("")
  const [instructions, setinstructions] = useState("")

  const SubmitHandler = (e)=>{
    e.preventDefault()
    const newRecipe = {
      id: nanoid(), //nanoid() ka use karke ek unique ID generate ki jati hai aur states se baaki data liya jata hai.
      image,
      title,
      description,
      ingredients,
      instructions,

    }
    setrecipes([...recipes, newRecipe])
   

    localStorage.setItem(
      "recipes",
      JSON.stringify([...recipes, newRecipe])
    );

    toast.success("Recipe Created Sucessfully")
    console.log(recipes)
    

    
    
  }
   
  return (
    <div className=' w-full min-h-screen flex justify-center pt-[14vh] '>
      
        <form onSubmit={SubmitHandler} className='w-[60%]'>
        <h1 className=' font-bold text-6xl text-green-600 mb-6  '>Create <br /> New Recipe</h1>
            <input 
            type="url"
            onChange={(e)=>{setimage(e.target.value)}}
            value={image}
             placeholder='Recipe Image URL'
             className='w-full px-3 py-3  mb-2 text-lg rounded-md border'
            />
            <input 
             onChange={(e)=>{settitle(e.target.value)}}
             value={title}
             type="text"
             placeholder='Recipe Name'
             className='w-full px-3 py-3  mb-2 text-lg rounded-md border'
            />
            <textarea 
             onChange={(e)=>{setdescription(e.target.value)}}
             value={description}
             placeholder='Recipe Description'
             className='w-full px-3 py-3  mb-1 text-lg rounded-md border'
            ></textarea>
            <textarea 
              onChange={(e)=>{setingredients(e.target.value)}}
              value={ingredients}
              placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
              className='w-full px-3 py-3  mb-1 text-lg rounded-md border'
            ></textarea>
             <textarea 
              onChange={(e)=>{setinstructions(e.target.value)}}
              value={instructions}
              placeholder=" recipe instrustions -> 'use comma to seperate ingredients'..."
              className='w-full px-3 py-3  mb-1 text-lg rounded-md border'
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default Create