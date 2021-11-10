import React from 'react';
import './Market.css'

function Market() {
    return (
        <div>
            <div className="market-container">
                <div className="market-title">
                    <h2>Market</h2>
                    <p>13 Billion Dollar... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
                <div className = "market-image">
                    <img src="https://source.unsplash.com/random/250x250"/>
                </div>

            </div>
        </div>
    );
}

export default Market;