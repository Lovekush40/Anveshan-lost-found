import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Anveshan-logo-transparent.png';

function Logo({ width = '200px' }) {
  return (
    <div className="transition-transform duration-300 hover:scale-105">
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="Anveshan Logo"
          style={{ width }}
          className="h-auto"
        />
      </Link>
    </div>
  );
}

export default Logo;