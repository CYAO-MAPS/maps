import React from 'react';
import './Market.css'
import SVG_Market from '../graphics/market.svg';


function Market() {
    return (
        <div>
            <div className="market-container">
                <div className="market-title">
                    <h2>Market</h2>
                    <div className = "market-image-block">
                        <img className = "market-image" src={SVG_Market}/>
                    </div>
                    <p>
                    With a broad application across global industrial, commercial, and grid customers, MAPS will focus the initial launch targeting Ontario’s automotive parts and food and beverage manufacturers representing over 3,700 companies. The rapidly rising electricity cost and international competition, customer billing structure from grid operators, current market existence for peak-shaving abatement, and a favorable regulatory environment promoting green energy were amongst the factors considered in choosing Ontario as the launch market.  The MPP efficiently addresses these businesses' broad requirements for an onsite power solution. First, the solution mitigates the rising cost of grid electricity to protect competitiveness. Second, it combats greenhouse gas emissions to assist these businesses in meeting their emission targets. Lastly, provides reliability and rapid response to avoid costly grid outages and fulfill fluctuating load requirements.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Market;