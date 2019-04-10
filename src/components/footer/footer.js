import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <ul className="footer__contacts">
                        <li>
                            Mobile:
                            <a href="tel:+38066-66-66-6666">+38066-66-66-6666</a>
                        </li>
                        <li>
                            Email:
                            <a href="mailto:mail@gmail.com">mail@gmail.com</a>
                        </li>
                        <li>
                            Skype:
                            <a href="skype:myskypeacc?call">mySkypeAcc</a>
                        </li>
                    </ul>
                    <div className="footer__logo">
                        <a href="#">&lt;/&gt;</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;