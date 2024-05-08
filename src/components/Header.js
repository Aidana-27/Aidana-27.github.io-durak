import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <section className='header'>
        <div className='container'>
          <div className='header__flex'>
            <NavLink to="/">
              <div className='header__logo'>
                <img src='https://i.pinimg.com/564x/9f/9a/29/9f9a29ec14de595491632b17ec7e6605.jpg' alt='poker' />
              </div>
            </NavLink>
            <div className='header__icon'>
              <NavLink to="/">
                <i class="fa-solid fa-house fa-xl" style={{ color: "#ffffff" }}></i>
              </NavLink>
              <NavLink to="/modal" onclick="openModal(true)">
                <i class="fa-regular fa-circle-question fa-xl" style={{ color: "#ffffff" }}></i>
              </NavLink>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header