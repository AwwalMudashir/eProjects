import React from 'react'
import './components.css'

const Hero = () => {
  return (
    <div>
        <div className="w-[100%] h-[100vh] bg-[url('/hero1.jpg')] flex pl-[3%] pr-[3%]  hero ">

    <div className="left w-[65%]">
      <div className="grid justify-start items-start gap-[15px] sm:mt-[50%] mt-[30%] ">
        <h1 className="text-white text-8xl bg-white">Reconnect with Nature</h1>
        <p className="text-[gray] text-2xl   w-[80%]">Breathe in the fresh mountain air and find peace in the beauty of the wild.</p>
      <button className='border-none bg-[#8B4513] text-[white] p-4 ml-[3px] h-16 w-[30%] md:w-[20%] cursor-pointer'>
        Learn More
      </button>
      </div>
    </div>

    {/* <div className="right w-[35%]"> */}

  <div class="image-grid">
  <img class="big-img" src="/hero2.jpg" alt="Mountain 1"/>
  <img class="small-img top-img" src="/hero3.jpg" alt="Mountain 2"/>
  <img class="small-img bottom-img" src="/hero4.jpg" alt="Mountain 3"/>
</div>
    {/* </div> */}


</div>

  </div>
  )
}

export default Hero
