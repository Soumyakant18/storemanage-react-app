import React from 'react';
import './navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div className="navbar">
     
        <h3>Logo</h3>
        <nav ref={navRef}>
          <a href='#'>Sign in</a>
          <a href='#'>Sign up</a>
          <a href='#'>Contact</a>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn"onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
 
  );
}

export default Navbar;
