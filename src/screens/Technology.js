import React from 'react';
import './Technology.css'

import ImageTech from "../graphics/tech_turbine.png"
// import ImageTech from "../graphics/tech_city_placeholder.jpg"
// import ImageTech from "../graphics/tech_turbine_placeholder.jpg"

function Technology() {
    return (
        <div>
            <div className="tech-container">
                <div >
                    {/* <img src="https://source.unsplash.com/random/300x300"/> */}
                    <img className = "tech-image" src={ImageTech}/>
                </div>
                <div className="tech-copy">
                    <h2 className="tech-title">Technology</h2>
                    {/* <h3>Tagline</h3> */}
                    {/* <p>
                    MAPS created a breakthrough, thermodynamic cycle that changes the way we generate electricity. Our technology creates a highly efficient process for converting stored excess renewable energy into on-demand power using our patented technology. These sources include hydrogen, biofuels, and heat or compressed air storage. With the MPP as a self-contained unit, it provides distributed and dispatchable power to solve the intermittency issue with wind and solar. The efficiency and flexibility of the MPP will see it lead the transformation to net-zero.
                    </p> */}
                    <ul className='tech-list'>
                        <li className='tech-list-item'>Breakthrough thermodynamic cycle enabling game changing efficiency</li>
                        <li className='tech-list-item'>Patented turbomachinery rotor integrating the heat exchanger</li>
                        <li className='tech-list-item'>Leveraging additive manufacturing to realize new possibilities</li>
                        {/* <li>Breakthrough, patented electrical generation</li>
                        <li>Class-leading efficiency, enabled with 3D-printing</li>
                        <li>Based off reliable and resilient mature turbomachinery</li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Technology;