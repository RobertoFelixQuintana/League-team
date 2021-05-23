import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div>
                        <Link to="/" className="navbar-logo" target="">
                            <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/es_MX/03a5e95dd434e72e5746eae1ee22f0b440c81c79/assets/es_MX/assets/lol-logo.png'
                            alt=''/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="navbar-links" target="">
                        Home
                        </Link>
                    </div>
                    <div>
                        <Link to="/Champions" className="navbar-links" target="">
                        Champions
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/Map" className="navbar-links" target="">
                        Map    
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/About" className="navbar-links" target="">
                        About    
                        </Link>
                    </div>               
                </div>
                <div className="navbar-container-btn">
                    <div className="sign-btn">
                        <Link to="/SignUp" className="navbar-links" target="">
                        SignUp
                        </Link>
                    </div>   
                </div>          
            </nav>
        </>
    )
}

export default Navbar
