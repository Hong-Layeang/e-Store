// components/navBar.jsx
import React from 'react';
import { FaShoppingCart, FaPlus, FaSun, FaMoon } from 'react-icons/fa';
import { Link, Links } from 'react-router-dom';

const NavBar = ({ darkMode, setDarkMode }) => {
  const iconButtonStyle = {
    backgroundColor: '#1f2937',
    padding: '0.5rem 0.7rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '2rem',
  };

  return (
    <div
      className="flex justify-between items-center mb-12"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem',
      }}
    >
      <Link to={"/"} className="flex items-center space-x-2">
        <span style={gradientTextStyle}>PRODUCT STORE</span>
        <FaShoppingCart style={{ color: '#8b5cf6', fontSize: '2rem' }} />
      </Link>

      <div className="flex space-x-4" style={{ display: 'flex' ,gap: '10px' }}>
        <button style={iconButtonStyle}>
            <Link to={"/createpage"}><FaPlus style={{ color: 'white', fontSize: '1.5em' }} /></Link>
        </button>
        <button
          style={iconButtonStyle}
          onClick={ () => setDarkMode((prev) => !prev) }
        >
          {darkMode ? (
            <FaSun style={{ color: 'yellow', fontSize: '1.5em' }} />
          ) : (
            <FaMoon style={{ color: '#f9fafb', fontSize: '1.5em' }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
