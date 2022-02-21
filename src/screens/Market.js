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
                    {/* <h3>MPP’s differentiated service offering align with commercial and industrial business needs:</h3>
                    <ul className='market-list'>
                        <li>Offer significant customer savings by providing a price ceiling on electricity consumption</li>
                        <li>Prevent significant customer costs of downtime, supply-chain interruption, and brand reputation risk because of prolonged grid outages</li>
                        <li>Deliver incremental electricity service to expand business operations in grid limited locations</li>
                        <li>Provide a cost-competitive path to meet net-zero emissions targets</li>
                    </ul> */}
                    <h3>Industrial and Commercial electrical solutions:</h3>
                    <ul className='market-list'>
                        <li className='market-list-item'>Significant cost savings by providing a price ceiling on electricity consumption</li>
                        <li className='market-list-item'>Mitigate outages causing downtime, supply-chain disruption, and brand reputation damage</li>
                        <li className='market-list-item'>Incremental electricity service to expand business operations in grid limited locations</li>
                        <li className='market-list-item'>Cost-competitive path to meet net-zero emissions targets</li>
                    </ul>

                    {/* <p>
                    With a broad application across global industrial, commercial, and grid customers, MAPS will focus the initial launch targeting Ontario’s automotive parts and food and beverage manufacturers representing over 3,700 companies. The rapidly rising electricity cost and international competition, customer billing structure from grid operators, current market existence for peak-shaving abatement, and a favorable regulatory environment promoting green energy were amongst the factors considered in choosing Ontario as the launch market.  The MPP efficiently addresses these businesses' broad requirements for an onsite power solution. First, the solution mitigates the rising cost of grid electricity to protect competitiveness. Second, it combats greenhouse gas emissions to assist these businesses in meeting their emission targets. Lastly, provides reliability and rapid response to avoid costly grid outages and fulfill fluctuating load requirements.
                    </p> */}
                </div>

            </div>
        </div>
    );
}

export default Market;