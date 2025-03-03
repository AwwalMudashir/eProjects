import React ,{ useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar/>
        <Display/>
        <Footer/>
      </div>
  )
}

export default App
