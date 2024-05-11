import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {

    const [showDropdown, setDropdown] = useState(false);
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const handleToggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    const handleLinkClick = () => {
        setNavbarOpen(false);
    };

    const handleDropdownHover = () => {
        setDropdown(true);
    };

    const handleDropdownLeave = () => {
        setDropdown(false);
    };

    return (
        <section id="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={{backgroundColor: '#010315'}}>
                <div>
                    <Link to='/' style={{ textDecoration: 'none' }}><div className="logo">
                        <p>Rising Kids</p>
                    </div></Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={handleToggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" onClick={handleLinkClick} >HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About" onClick={handleLinkClick}>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Admission" onClick={handleLinkClick}>ADMISSION</Link>
                        </li>

                        <li className="nav-item dropdown" onMouseEnter={handleDropdownHover} onMouseLeave={handleDropdownLeave}>
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={showDropdown}>
                                ACTIVITIES
                            </Link>
                            <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown" style={{backgroundColor: '#010315', marginTop: '-3px'}}>
                                <Link className="dropdown-item" style={{color: '#fff'}}  to="/Activities" onClick={handleLinkClick}>Activities</Link>
                                <div className="dropdown-divider"></div>
                               {/*--------- <Link className="dropdown-item" to="/Blogs" onClick={handleLinkClick}>Blog</Link>
                                <Link className="dropdown-item" to="/Testimonials" onClick={handleLinkClick}>Testimonials</Link>-- ------*/}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact" onClick={handleLinkClick} >CONTACT US</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
