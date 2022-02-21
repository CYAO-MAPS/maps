import React from 'react';
import logo from '../graphics/logo.svg';
// import {ReactComponent as Logo} from '../graphics/logo.svg';
import './Home.css'
import homeGraphic from '../graphics/home_MPP.png'

function Home() {
    return (
        <div className="home-container">
            <div className="home-title-container">
                <div className="home-fulltitle">
                    <h1 className = "home-title">MAPS</h1>
                    <h5>McGuire Aero Propulsion Solutions</h5>
                    {/* <h2>On-Site, Breakthrough Power Generation Technology, Leading the Transformation to Net-Zero</h2> */}
                    <h2>Transformative,<br/> 
                        Net-Zero+ <br/>
                        Power Generation</h2>
                </div>
                <div>
                    
                    
                    <img src={logo} alt="Logo!" className = "home-logo"/>
                    
                    {/* <Logo className = "home-logo"/> */}

                    
                </div>
                
            </div>
            <img src={homeGraphic} className='home-image'/>
            {/* <div>
                <h2>
                Climate Change doesn't discriminate. 
                <br/>
                Neither should you.
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                </p>
            </div> */}
        </div>
    );
}

export default Home;