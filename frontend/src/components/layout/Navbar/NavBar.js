import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
      <div className="navbar-left">
        <div className="company-name">Lakshya</div>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Contact Us</button>
        <button className="navbar-button">Get Started</button>
        <button className="login-signup-button">Log In / Sign Up</button>
      </div>
    </nav>

    )
}

export default NavBar;