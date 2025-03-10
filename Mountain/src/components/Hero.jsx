import React from 'react'
import {  Link } from 'react-router-dom';
import './components.css'

const Hero = () => {
  return (
    <div>
        <div className="w-[100%] h-[100vh] bg-[url('/hero1.webp')] flex pl-[3%] pr-[3%]  hero">

        <div className="left w-[60%]">
          <div className="grid justify-start items-start gap-[15px] sm:mt-[50%] mt-[30%] ">
            <h1 className="text-white text-8xl bg-white">Reconnect with Nature</h1>
            <p className="text-[gray] text-2xl   w-[80%]">Breathe in the fresh mountain air and find peace in the beauty of the wild.</p>
          <button className='border-none bg-[#8B4513] text-[white] p-4 ml-[3px] h-16 w-[30%] md:w-[20%] cursor-pointer'>
                Learn more
          </button>
          </div>
        </div>


  <div class="image-grid ">
  <img class="big-img" src="/hero2.webp" alt="Mountain 1"/>

  <div className='w-[50%] flex flex-col gap-[20px]'>
  <img class="small-img top-img" src="/hero3.webp" alt="Mountain 2"/>
  <img class="small-img bottom-img" src="/hero4.webp" alt="Mountain 3"/>
  </div>
</div>

</div>

  </div>
  )
}

export default Hero
