"use client"; 
import React, { useState, useEffect } from 'react';

// Navbar component
const Navbar: React.FC = () => {
  // State to track which dropdown is currently open (or null if none are open)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggles dropdown visibility: if the same dropdown is clicked, it closes; otherwise, it opens the new one
  const handleDropdownToggle = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  useEffect(() => {
    // Closes the dropdown if a click is detected outside of any dropdown area
    const handleClickOutside = (event: MouseEvent) => {
      // Checks if the click target is not within an element with the 'navbar-dropdown' class
      if (!(event.target as HTMLElement).closest('.navbar-dropdown')) {
        setOpenDropdown(null); // Close any open dropdown
      }
    };

    // Listen for clicks on the document to detect clicks outside of dropdowns
    document.addEventListener('click', handleClickOutside);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" data-toggle="open-navbar1">
            {/* This button is styled as a toggler but doesn’t perform any actions here */}
          </button>
          <a href="/">
            <h4>
              Awesome<span>logo</span>
            </h4>
          </a>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            {/* Main navigation items */}
            <li className="active">
              <a href="/">Home</a>
            </li>

            {/* Dropdown menu for Categories */}
            <li className="navbar-dropdown">
              <a
                href="/categories"
                className="dropdown-toggler"
                onClick={(e) => {
                  e.preventDefault(); // Prevents the default link action
                  handleDropdownToggle('my-dropdown-id'); // Toggles this dropdown
                }}
              >
                Categories <i className="fa fa-angle-down"></i>
              </a>
              {/* Conditionally rendered 'show' class to control dropdown visibility */}
              <ul className={`dropdown ${openDropdown === 'my-dropdown-id' ? 'show' : ''}`} id="my-dropdown-id">
                <li><a href="/">Actions</a></li>
                <li><a href="/">Something else</a></li>
                <li className="separator"></li>
                <li><a href="/">Separated link</a></li>
                <li className="separator"></li>
                <li><a href="/">One more S2</a></li>
              </ul>
            </li>

            {/* Dropdown menu for Blog */}
            <li className="navbar-dropdown">
              <a
                href="/blog"
                className="dropdown-toggler"
                onClick={(e) => {
                  e.preventDefault(); // Prevents the default link action
                  handleDropdownToggle('blog'); // Toggles this dropdown
                }}
              >
                Blog <i className="fa fa-angle-down"></i>
              </a>
              {/* Conditionally rendered 'show' class to control dropdown visibility */}
              <ul className={`dropdown ${openDropdown === 'blog' ? 'show' : ''}`} id="blog">
                <li><a href="/">Some category</a></li>
                <li><a href="/">Another category</a></li>
                <li className="separator"></li>
                <li><a href="/">Separated link</a></li>
                <li className="separator"></li>
                <li><a href="/">One more separated link.</a></li>
              </ul>
            </li>

            {/* Additional standard navigation links */}
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
