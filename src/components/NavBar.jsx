import React from 'react';
import './MyComponent.css'; // CSS file for component styling
import Logo from '../assets/image-copy.png';
import Img from '../assets/image.png';

function MyComponent() {
  return (
    <div className="container">
      {/* Upper Navigation Bar */}
      <div className="top-nav">
        <img src={Logo} alt="Left Logo" className="nav-logo left-logo" />
        <p className="nav-text"><b>ASHWIN Bihar</b></p>
        <img src={Img} alt="Right Logo" className="nav-logo right-logo" />
      </div>
      <div className="upper-nav">
        <ul><b>
          <li>Home</li>
          <li>Ashwin Dawa Prapatra</li>
          <li>Department Login</li>
          <li>Notices</li>
          <li>NIC Bihar</li>
          </b>
        </ul>
      </div>
    </div>
  );
}

export default MyComponent;
