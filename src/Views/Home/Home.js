import React, { Component, Fragment } from 'react'

import './Home.css'

import Header from '../../Components/Header/Header';

export class componentName extends Component {

  render() {
    return (
      <div className='home-page'>
        <Header />
        <section className="home-main-top">
          <h2>HR software with a heart</h2>
          <h4>BambooHR lets you focus on people, not processes.</h4>
          <button className='home-top-button'>Try BambooHR Free</button>
        </section>
        <section className="home-companies-container">
          <img src="https://www.bamboohr.com/img/customers/featured-customers/asana.svg" alt="" />
          <img src="https://www.bamboohr.com/img/customers/featured-customers/foursquare.svg" alt="" />
          <img src="https://www.bamboohr.com/img/customers/featured-customers/freshbooks.svg" alt="" />
          <img src="https://www.bamboohr.com/img/customers/featured-customers/soundcloud.svg" alt="" />
          <img src="https://www.bamboohr.com/img/customers/featured-customers/stance.svg" alt="" />
          <img src="https://www.bamboohr.com/img/customers/featured-customers/vimeo.svg" alt="" />
        </section>
        <section className="home-virtual-summit-container">
          <img
            src="https://www.bamboohr.com/virtual/img/hr-virtual-summit-logo-2018-min.png"
            alt=""
            id='vc-summit-logo'
          />
          <h3 id='vc-worlds-largest'>The World's Largest Virtual Conference for HR Professionals</h3>
          {/* <div className='home-vc-speakers'> */}
          <div id='vc-julie' className='vc-people'>
            <img
              src="https://www.bamboohr.com/img/homepage/Julie_Coucoules.png"
              alt=""
              className="vc-people-photos"
              />
            <h4>Julie Coucoules</h4>
            <h5>Global Head of Talent</h5>
            <h5>Glassdoor</h5>
          </div>
          <div id='vc-ben' className='vc-people'>
            <img
              src="https://www.bamboohr.com/img/homepage/Ben_Peterson.png"
              alt=""
              className="vc-people-photos"
            />
            <h4>Ben Peterson</h4>
            <h5>CEO</h5>
            <h5>BambooHR</h5>

          </div>
          {/* </div> */}
          <a id='vc-register-today'>
            <h2>Register Free Today</h2>
          </a>
        </section>
      </div>
    )
  }
}

export default componentName
