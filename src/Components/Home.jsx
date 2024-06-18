import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-[100vh] pt-[10vh] flex '>
      <div className='left w-1/2 h-full pl-32 py-48'>
       <h1 className='font-bold text-6xl text-[#21A450] '>SIMPLE AND TASTY RECIPES</h1>
       <p className=' font-semibold text-sm mt-3 leading-5  ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto vero velit, <br /> deleniti vel a minus nobis ipsum. Modi, maxime!</p>
       <button className='mt-8 bg-green-600 px-6 py-3 text-md text-white rounded-lg font-semibold  hover:bg-green-700 duration-200'>Get Started</button>
      </div>
      <div className='right  w-1/2  h-full  '>
        <img className='w-2/3  m-20' src="https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png" alt="" />
      </div>
    </div>
  )
}

export default Home