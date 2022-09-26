import React, { useState } from 'react'
import './header.css';

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navigation-wrap">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src='./images/logo.png' alt='ultimate'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#explorer-food">Explorer Food</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonial">Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#faq">FAQ</a>
        </li>
        <li>
            <button className='main-btn'>120 430 600</button>
          
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  
    
  </div>
  )
}

export default Header
