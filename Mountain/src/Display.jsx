import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import TypeDetail from './components/TypeDetail'
import Hazard from './pages/Hazard'

const Display = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    <Route path="/type/:id" element={<TypeDetail/>} />
    <Route path="/hazard" element={<Hazard/>} />
   </Routes>
  )
}

export default Display
