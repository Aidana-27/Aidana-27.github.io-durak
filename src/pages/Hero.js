import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero'>
    <div className='container'>
<div className='img'>
<img src='https://i.pinimg.com/564x/9f/9a/29/9f9a29ec14de595491632b17ec7e6605.jpg' alt='poker'/>
</div>
<div className='hero__btn'>
<NavLink to="/together">
  <button className='hero__link'>
    Вдовем
  </button>
  </NavLink>
  <NavLink to="/three">
  <button className='hero__link'>
    Втроем
  </button>
  </NavLink>
  <NavLink to="/four">
  <button className='hero__link'>
    Вчетвером
  </button>
  </NavLink>
</div>

    </div>
    </section>
  )
}

export default Hero