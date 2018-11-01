import React, { Component, Fragment } from 'react'

import './Home.css'

import Header from '../../Components/Header/Header';

export class componentName extends Component {

  render() {
    return (
      <div className='home-page'>
        <Header />
        <div className="home-main-top">
          <h2>HR software with a heart</h2>
          <h4>BambooHR lets you focus on people, not processes.</h4>
          <button className='home-top-button'>Try BambooHR Free</button>
        </div>
        <div className="home-companies-container">
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
      </div>
    )
  }
}

export default componentName
