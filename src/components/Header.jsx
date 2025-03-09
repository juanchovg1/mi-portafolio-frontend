import React from 'react';
import '../styles/components/Header.css';

const Header = () => {
return (
    <header className="header">
    <div className="header-content">
        <div className="header-text">JUAN</div>
        <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#blog">My Blog</a>
        <a href="#contact">Contact</a>
        </nav>
        <div className="header-menu">
        <img src="/menu.png" alt="Menu" />
        </div>
    </div>
    </header>
);
};

export default Header;