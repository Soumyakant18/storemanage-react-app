import React, { useRef } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="navbar">
      <h3>Logo</h3>
      <nav ref={navRef} className="navbar-links">
        <a href='#'>Sign in</a>
        <a href='#'>Sign up</a>
        <a href='#'>Contact</a>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
