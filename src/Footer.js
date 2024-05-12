import React from "react";
import './Footer.css'; // Add your footer styles here
import logo from './images/log.jpg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                            {/* Your logo image */}
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="address">
                            {/* Your address */}
                            <p>#49,6th A Cross, Muniswamappa Layout,KANAKAGIRI, Banjara Layout, Horamavu Agra,Bangalore 560043</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="quick-links">
                            <h5>Quick Links</h5>
                            {/* List of quick links */}
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="About">About Us</a></li>
                                <li><a href="Admission">Admission</a></li>
                                <li><a href="Contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contact-info">
                            <h5>Contact Us</h5>
                            <p>Email Id :<a href="mailto:risingkidsjune2023@gmail.com">  Risingkidsjune2023@gmail.com</a></p>
                            <p>Contact No :<a href="tel:+8951671986">  8951671986</a></p>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="subscribe">
                            <h5>Subscribe to Our Newsletter</h5>

                            <form>
                                <input type="email" placeholder="Enter your email" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248762.96201061443!2d77.37647397590241!3d13.040682500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11b5e762f73b%3A0xc054a557d0841c1f!2sRising%20Kids!5e0!3m2!1sen!2sin!4v1714075426766!5m2!1sen!2sin"   
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Rising Kids Location Map">
    </iframe>                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
