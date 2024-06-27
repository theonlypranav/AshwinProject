import React, { useState, useRef, useEffect } from 'react';
import './MyComponent.css'; // CSS file for component styling
import Logo from '../assets/image-copy.png';
import Img from '../assets/image.png';

function MyComponent() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState('auto');


  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  

  useEffect(() => {
    if (dropdownRef.current) {
      const dropdownItems = dropdownRef.current.querySelectorAll('.dropdown li');
      let maxWidth = 0;
      dropdownItems.forEach(item => {
        const itemWidth = item.getBoundingClientRect().width;
        if (itemWidth > maxWidth) {
          maxWidth = itemWidth;
        }
      });
      setMaxWidth(`${maxWidth}px`);
    }
  }, [dropdown]);

  return (
    <div className="container">
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <img src={Logo} alt="Left Logo" className="nav-logo left-logo" />
        <p className="nav-text"><b>ASHWIN Bihar</b></p>
        <img src={Img} alt="Right Logo" className="nav-logo right-logo" />
      </div>
      {/* Upper Navigation Bar */}
      <div className="upper-nav">
        <ul>
          <b>
            <li>Home</li>
            <li>Ashwin Dawa Prapatra</li>
            <li 
              className="dropdown-item" 
              onMouseEnter={toggleDropdown} 
              onMouseLeave={toggleDropdown}
              ref={dropdownRef}
            >
              Department Login
              {dropdown && (
                <ul className="dropdown" style={{ width: maxWidth }}>
                  <li>ASHA Workers</li>
                  <li>Public Health Officer</li>
                  <li>Bihar Govt</li>
                </ul>
              )}
            </li>
            <li>Notices</li>
            <li>NIC Bihar</li>
          </b>
        </ul>
      </div>
      
    </div>
  );
}

export default MyComponent;
