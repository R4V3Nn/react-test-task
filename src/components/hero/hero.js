import React from 'react';

import './hero.scss';

import Header from '../header/header';


const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <Header />
                    <div className="hero__text">
                        <h1 className="hero__heading">Name Surname</h1>
                        <span className="hero__sub-heading">
                            Front-end developer
                        </span>
                    </div>
            </div>
        </div>
    )
};

export default Hero;