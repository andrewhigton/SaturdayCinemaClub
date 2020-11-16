import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
        return (
            <div className="footer">
                <div className="footer-link">
                    <a className="contacts-link">About Saturday Cinema Club</a>
                    <Link to='/howitworks' className="contacts-link">How it works</Link>
                    <a className="contacts-link">Contact us</a>
                </div>
                <div className="social-links">
                    <a href="facebook.com" class="fa fa-facebook"></a>
    				<a href="twitter.com" class="fa fa-twitter"></a>		
    				<a href="youtube.com" class="fa fa-youtube"></a>		
    				<a href="instagram.com" class="fa fa-instagram"></a>		
                </div>
            </div>
        );
    }

export default Footer;