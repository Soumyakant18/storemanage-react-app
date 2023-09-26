import React, { useRef } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
		<div className='navbar'>
			<h3>LOGO</h3>
			<nav ref={navRef}>
       
      <ul>
          <li><a href="/#">Sign in</a></li>
          <li><a href="/#">Sign up</a></li>
          <li><a href="/#">About</a></li>
        </ul>
			
			
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
}

export default Navbar;
