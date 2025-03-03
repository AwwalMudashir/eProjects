import React from 'react'
import './Newsletter.css'


const Newsletter = () => {

 function please(){
    var please = document.querySelector('#please');
    var pleaseWidth = please.offsetWidth;
    var pleaseHeight = please.offsetHeight;
    
    var thanks = document.querySelector('#thanks');
    thanks.style.width = pleaseWidth + 'px';
    thanks.style.height = pleaseHeight + 'px';
    thanks.style.opacity = '1';
    thanks.style.zIndex = '1';
    
    please.style.opacity = '0';
    please.style.maxHeight = '0';
    please.style.zIndex = '-1';
  }

  return (
    <div className='news'>
      <section id="lead-capture">
  <section className="visuals">

  </section>
  <section className="readables">
    <div id="please">
      <h2>Don't miss a beat!</h2>
      <p className='my-[10px] '>Join more than 600+ smiling patients receiving monthly updates and offers including:</p>
      <ul className='ml-[25px] my-[10px]'>
        <li>Savings on consultations</li>
        <li>Information about oral health</li>
        <li>and much more!</li>
      </ul>
      <form id="newsletter-sign-up" name="Newsletter sign-up form" method="dialog">
        <input type="email" name="email" id="email" style={{width:"90%"}} placeholder="Enter your email address" title="Please enter a valid email address" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required/>
        <input type="submit" name="Join now" id="submit" onClick={()=>please()} value="Join now!" />
      </form>
      <span className="fine-print">
        <div className="lock-icon">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"/></svg></div>
        By signing up you agree to receive emails from our business. We value your privacy and will never share your information!</span>
    </div>
    <div id="thanks">
      <h2>Thank you for joining us! 🌟</h2>
      <p>Welcome to the dental family, superstar! Get ready for exclusive savings, expert oral health tips, and monthly smiles delivered straight to your inbox.</p> 
      <p>We're thrilled to have you aboard! 😁</p>
    </div>
  </section>
</section>
    </div>
  )
}

export default Newsletter
