import React from 'react';
import './Home.css'

function Home() {
    return (
        <div>
            <div className="home-container">
                <div className="home-title">
                    <h1>McGuire Aero Propulsion Solutions</h1>
                    <h2>A Novel Micro Power Plant Solution</h2>
                    <h3>Green. Reliable. Efficient. Cost-Effective</h3>
                </div>
                <div classname = "home-image">
                    <img src="https://source.unsplash.com/random/400x300?sig=1"/>
                </div>
            </div>
            <div>
                <h2>
                Climate Change doesn't discriminate. 
                <br/>
                Neither should you.
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                </p>
            </div>
        </div>
    );
}

export default Home;