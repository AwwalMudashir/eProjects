import React ,{ useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Display from './Display'
import Ticker from './components/ticker';


function App() {

  return (
      <div>
        <div>
        <Navbar/>
        <Display/>
        <Ticker/>
        <Footer/>
        </div>
        
      </div>
  )
}

export default App
