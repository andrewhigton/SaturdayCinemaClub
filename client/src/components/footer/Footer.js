import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
        return (
            <div className="footer">
                <div className="footer-link">
                    <Link className="contacts-link">About Saturday Cinema Club</Link>
                    <Link to='/howitworks' className="contacts-link">How it works</Link>
                    <Link className="contacts-link">Contact us</Link>
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/" className="fa fa-facebook"><i class="fblink"></i></a>
    				<a href="https://twitter.com/home" className="fa fa-twitter"><i class="fblink"></i></a>		
    				<a href="https://www.youtube.com/" className="fa fa-youtube"><i class="fblink"></i></a>		
    				<a href="https://www.instagram.com/?hl=en" className="fa fa-instagram"><i class="fblink"></i></a>		
                </div>
            </div>
        );
    }

export default Footer;