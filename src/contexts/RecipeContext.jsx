import React, { createContext, useEffect, useState } from 'react'

export const Recipecontext = createContext(null)

const RecipeContext = (props) => {
    // console.log(props.children)
    const [recipes, setrecipes] = useState([])

    useEffect(() => {
      setrecipes(JSON.parse(localStorage.getItem("recipes")) || []) //locastorage se jo data aata vo string me aata usko phir json.parse ka use krke bject or array me converrt krte use krne ke liye
      // console.log(recipes)
    }, [])
    
  return (
    <div>
        <Recipecontext.Provider value={ [recipes, setrecipes]}>
           {props.children}
        </Recipecontext.Provider>
    </div>
  )
}

export default RecipeContext