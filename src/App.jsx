import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import About from './Components/About'
import Contact from './Components/Contact'
import Recipes from './Components/Recipes'
import Create from './Components/Create'
import Update from './Components/Update'
const App = () => {
  return (
    <div className='min-h-screen'>
     
      <Nav/>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/create-recipe' element={<Create/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
      

    </div>
  )
}

export default App;