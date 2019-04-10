import React from 'react';

import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper container">
            <div className="header__logo">
                <a href="#">&lt;/&gt;</a>
            </div>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <a href="#home">Home</a>
                </li>
                <li className="header__nav-item">
                    <a href="#about">About</a>
                </li>
                <li className="header__nav-item">
                    <a href="#skills">Skills</a>
                </li>
                <li className="header__nav-item">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </div>
        </div>
    )
};

export default Header;