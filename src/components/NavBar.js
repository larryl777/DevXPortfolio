import './NavBar.css'
import React from 'react';

const NavBar = () => {
    return (
  
  <nav className="navbar">
    <div className="navbar-center">
      <ul className="nav-links">
       
        <li>
            <a className="button1" href="/landing">Home</a>
        </li>
       
        <li>
            <a className="button1" href="/experience">Experience</a>
        </li>
       
        <li>
            <a className="button1" href="/projects">Projects</a>
        </li>
       
        <li>
        <a className="button1" href="/contact">Contact Me</a>
        </li>
     
      </ul>
    </div>
  </nav>
  );
  };
  
  export default NavBar;