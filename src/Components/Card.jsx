import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  // console.log(props)
  const {id, description, image, ingredients, instructions,title} = props.recipe
  
  return (
    // <Link  className='mr-[3.3%] mb-[3%] text-center w-[30%]   p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200 bg-red-900'>
    //     <img className='w-[%]' src="https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww" alt="" />
    //     <h1>title</h1>
    //     <p>description</p>
    //     <div></div>
    // </Link>
    <Link className='  w-[25%]  p-5  text-center mr-[3.3%] mt-[5%] shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200 '>
      
      <img className='w-[100%]' src={image} alt="" />
      <h1 className='mt-5 mb-3 text-xl text-semibold'>{title}</h1>
      <p>{description.slice(0, 100)}...</p>
      <div className="flex justify-between text-zinc-400 mt-5 ">
                <p className="text-center ">
                    <i className="ri-timer-line"></i>
                    <br />
                    <span className="text-sm">20min</span>
                </p>
                <p className="text-center">
                    <i className="ri-thumb-up-line"></i>
                    <br />
                    <span className="text-sm">Easy</span>
                </p>
                <p className="text-center">
                    <i className="ri-share-line"></i>
                    <br />
                    <span className="text-sm">Share</span>
                </p>
            </div>
      
    </Link>
  )
}

export default Card