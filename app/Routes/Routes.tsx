"use client"; 
import React, { useState, useEffect } from 'react';

// Navbar component
const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
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
              Awesome<span>logo</span>
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
                href="/categories"
                className="dropdown-toggler"
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('my-dropdown-id');
                }}
              >
                Categories <i className="fa fa-angle-down"></i>
              </a>
              <ul className={`dropdown ${openDropdown === 'my-dropdown-id' ? 'show' : ''}`} id="my-dropdown-id">
                <li><a href="/">Actions</a></li>
                <li><a href="/">Something else</a></li>
                <li className="separator"></li>
                <li><a href="/">Separated link</a></li>
                <li className="separator"></li>
                <li><a href="/">One more S2</a></li>
              </ul>
            </li>
            <li className="navbar-dropdown">
              <a
                href="/blog"
                className="dropdown-toggler"
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('blog');
                }}
              >
                Blog <i className="fa fa-angle-down"></i>
              </a>
              <ul className={`dropdown ${openDropdown === 'blog' ? 'show' : ''}`} id="blog">
                <li><a href="/">Some category</a></li>
                <li><a href="/">Another category</a></li>
                <li className="separator"></li>
                <li><a href="/">Separated link</a></li>
                <li className="separator"></li>
                <li><a href="/">One more separated link.</a></li>
              </ul>
            </li>
            <li><a href="/about">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Signin</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
