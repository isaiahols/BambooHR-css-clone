import React from 'react'

import './Header.css';



export default () => {
  return (
      <header className='main-header-container'>
          <img src='https://www.bamboohr.com/img/svg/BambooHRLogo.svg' alt="BambooHR Logo" className='main-header-logo' />
          <nav className='nav-burger-container'>
              <div className="nav-burger-menu"></div>
              <div className="nav-burger-menu"></div>
              <div className="nav-burger-menu"></div>
          </nav>
      </header>
  )
}
