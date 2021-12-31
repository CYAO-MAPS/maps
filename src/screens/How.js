import React from 'react';
import './How.css'

function How() {
    return (
        <div>
            <div className="how-container">
                <div className = "how-image">
                    <img src="https://source.unsplash.com/random/300x300"/>
                </div>
                <div className="how-title">
                    <h2>Game Changing Technology</h2>
                    <p>MAPS created a novel thermodynamic cycle. The thermodynamic cycle has the heat exchange integrated into the compressor-turbine rotor to allow a continuous heat exchange process from the air inlet to the combustion chamber, and vis-versa. This allows for the recovery of the absolute maximum energy from the exhaust flow which dramatically reduces the amount of fuel required to produce the same power output. The patented technology of the turbomachinery permits the running of this thermodynamic cycle yielding a revolutionary advancement in electrical efficiency of 60%+. The improved efficiency represents a 30% reduction in fuel consumption compared to the current best-in-class technology enabling the production of green dispatchable electricity at the lowest cost.</p>
                </div>

            </div>
        </div>
    );
}

export default How;