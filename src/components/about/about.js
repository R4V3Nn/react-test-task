import React from 'react';

import './about.scss';
import avatar from './avatar.png';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h3 className="about__heading">
                    About
                </h3>
                <div className="about__content">
                    <div className="about__goals">
                        <span className="about__sub-heading">
                            Goals
                        </span>
                        <div className="about__text">
                        Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. 
                        </div>
                    </div>
                    <div className="about__avatar">
                        <img src={ avatar }  alt="avatar" />
                    </div>
                    <div className="about__dreams">
                        <span className="about__sub-heading">
                            Dreams
                        </span>
                        <div className="about__text">
                        Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;