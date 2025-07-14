import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer">

            <div className="footer-content">
                <div className="footer-content-left">
                    <h1>We are located in India</h1>
                    <hr />
                    <h2>tinqbit</h2>
                    <p>tinqbit India Pvt. Ltd.<br />
C24, -2 Floor, Thejaswini Building,<br />
Technopark Campus,<br />
Trivandrum, Kerala, India  – 695581
                    </p>
                </div>
                <div className="footer-content-right">
                    <h1>Connect with us</h1>
                    <hr />
                </div>
            </div>
            <div className="footer-final">
              <h2>© Copyright tinqbit. All Rights Reserved</h2>
              <h2>>Designed & Developed by tinqbit.</h2>
            </div>

            <hr/>

            <div className="links">

            </div>
        </footer>

    );
}

export default Footer;