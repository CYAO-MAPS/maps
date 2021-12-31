import React from 'react';
import './Market.css'

function Market() {
    return (
        <div>
            <div className="market-container">
                <div className="market-title">
                    <h2>Market</h2>
                    <p>
                    With a wide application across global commercial and industrial sectors, MAPS will focus the initial launch targeting capital-intensive businesses in the Toronto-Windsor corridor.  Particularly, the focus will be on automotive parts and food and beverage manufacturers which representing over 3,700 companies in Ontario. The MPP efficiently addresses these business’ requirements for a solution that averts the rising cost of grid electricity to protect their competitiveness, combats greenhouse gas emissions, and has the reliability and rapid response to avoid costly grid outages and meet fluctuating load requirements. The nature of these business’ electricity consumption profile, investment decision-making behavior, and MAPS industry familiarity were amongst additional factors considered in the selection of the optimal initial target market.     
                    </p>
                </div>
                <div className = "market-image-block">
                    <img className = "market-image" src="https://source.unsplash.com/random/250x250"/>
                </div>

            </div>
        </div>
    );
}

export default Market;