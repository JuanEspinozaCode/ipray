"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggler"
            data-toggle="open-navbar1"></button>
          <a href="/">
            <h4>
              <Image
                src="/ipray_logo.png"
                alt="Logo"
                height={40}
                width={40}
                style={{ borderRadius: "50%" }}
              />
            </h4>
          </a>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li className="navbar-dropdown">
              <a href="/prayers" className="dropdown-toggler">
                Prayers <i className="fa fa-angle-down"></i>
              </a>
            </li>
            <li className="navbar-dropdown">
              <a href="/psalms" className="dropdown-toggler">
                Psalms <i className="fa fa-angle-down"></i>
              </a>
            </li>
            <li>
              <a href="/kingdom">About the Kingdom</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
