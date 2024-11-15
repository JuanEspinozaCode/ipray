"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Updated handleDropdownToggle to take e and dropdownId as arguments
  const handleDropdownToggle = (
    e: React.MouseEvent<HTMLAnchorElement>,
    dropdownId: string
  ) => {
    e.preventDefault(); // Prevent default anchor behavior here
    setOpenDropdown(prev => (prev === dropdownId ? null : dropdownId));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.navbar-dropdown')) {
        setOpenDropdown(null); 
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" data-toggle="open-navbar1">
          </button>
          <a href="/">
            <h4>
              <Image src="/ipray_logo.jpg" alt="Logo" height={40} width={40} style={{ borderRadius: '50%' }} />
            </h4>
          </a>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li className="navbar-dropdown">
              <a
                href="/prayers"
                className="dropdown-toggler"
                onClick={(e) => handleDropdownToggle(e, 'my-dropdown-id')}
              >
                Prayers <i className="fa fa-angle-down"></i>
              </a>
            </li>
            <li className="navbar-dropdown">
              <a
                href="/psalms"
                className="dropdown-toggler"
                onClick={(e) => handleDropdownToggle(e, 'blog')}
              >
                Psalms <i className="fa fa-angle-down"></i>
              </a>
            </li>
            <li><a href="/kingdom">About the Kingdom</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;