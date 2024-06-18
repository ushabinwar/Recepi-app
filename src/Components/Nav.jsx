import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='h-[10vh] w-full fixed drop-shadow-lg  flex justify-between items-center px-32'>
        <img className="h-full" src="https://static.vecteezy.com/system/resources/thumbnails/019/607/567/small_2x/fast-food-vector-clipart-design-graphic-clipart-design-free-png.png" alt="" />
        <div className=' flex gap-16 font-medium text-lg'>
            <Link className='hover:text-green-500 duration-200' to="/">Home</Link>
            <Link className='hover:text-green-500 duration-200'  to="/recipes">Recipes</Link>
            <Link className='hover:text-green-500 duration-200'  to="/about">About</Link>
            <Link className='hover:text-green-500 duration-200'  to="/contact">Contact</Link>
        </div>
        <i className=" text-2xl ri-menu-line"></i>
    </nav>
  )
}

export default Nav;