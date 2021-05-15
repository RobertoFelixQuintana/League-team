import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div>
                        <Link to="/" className="navbar-logo" target="_blank">
                            <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/es_MX/03a5e95dd434e72e5746eae1ee22f0b440c81c79/assets/es_MX/assets/lol-logo.png'
                            alt=''/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="navbar-links" target="_blank">
                        Home
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="navbar-links" target="_blank">
                        Champions
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/" className="navbar-links" target="_blank">
                        Map    
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/" className="navbar-links" target="_blank">
                        Form    
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/" className="navbar-links" target="_blank">
                        About    
                        </Link>
                    </div>                    
                </div>
                
            </nav>
        </>
    )
}

export default Navbar
