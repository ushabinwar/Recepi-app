import React from 'react'

const Update = () => {
  return (
    <div className=' w-full min-h-screen flex justify-center pt-[14vh] '>
      
        <form className='w-[60%]'>
        <h1 className=' font-bold text-6xl text-green-600 mb-6  '>Create <br /> New Recipe</h1>
            <input type="url"
             placeholder='Recipe Image URL'
             className='w-full px-3 py-3  mb-2 text-lg rounded-md border'
            />
            <input type="text"
             placeholder='Recipe Name'
             className='w-full px-3 py-3  mb-2 text-lg rounded-md border'
            />
            <textarea 
             placeholder='Recipe Description'
             className='w-full px-3 py-3  mb-1 text-lg rounded-md border'
            ></textarea>
            <textarea 
              placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
              className='w-full px-3 py-3  mb-1 text-lg rounded-md border'
            ></textarea>
             <textarea 
              placeholder=" recipe instrustions -> 'use comma to seperate ingredients'..."
              className='w-full px-3 py-3  mb-1 text-lg rounded-md border'
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Republish Recipe &nbsp; &#8594;
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default Update;