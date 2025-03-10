import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import TypeDetail from './components/TypeDetail'
import Hazard from './pages/Hazard'
import Gallery from './pages/Gallery'
import HistoryP from './pages/HistoryP'

const Display = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    <Route path="/type/:id" element={<TypeDetail/>} />
    <Route path="/hazards-sheltering" element={<Hazard/>} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/history" element={<HistoryP/>} />
   </Routes>
  )
}

export default Display
