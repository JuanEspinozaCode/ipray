'use client';
import { CSSProperties } from "react";

const Navigation: React.FC = () => {
    const LinksStyle: CSSProperties = { textDecoration: 'none', padding: '10px', margin: '10px'};
    const NavContainer: CSSProperties = { listStyleType: 'none', margin: '0', padding: '0', border: '0px'};
    return (
        <nav style={NavContainer}>
        <div className="logo"
        style={ NavContainer }
        >ipray</div>
        <div className="navbarlinks">
          <a href="/"
          style={LinksStyle}>Home</a>
          <a href="/about"
          style={LinksStyle}>About</a>
        </div>
      </nav>
    )
};

export default Navigation;