import React from 'react';
import Navbar from './navbar'; // Corrected the path to the Navbar component
import Container from './homecontainer';
import Footer from './footerhome';

function Home() {
  return (
    <div className="whole">
      <div className="Home">
         <Navbar />
      </div>
      <div className="container">
        <Container />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;



