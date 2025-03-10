import React ,{ useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Display from './Display'
import Ticker from './components/ticker';
import BackToTop from './BackToTop'
import ScrollAnimation from './ScrollAnimation'


function App() {

  return (
      <div>
        <ScrollAnimation/>
        <div>
        <Navbar/>
        <Display/>
        <Ticker/>
        <Footer/>
        <BackToTop/>
        </div>
        
      </div>
  )
}

export default App
