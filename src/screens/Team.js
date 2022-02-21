import React from 'react';
import TeamCard from '../components/TeamCard';
import portraitDan from '../graphics/portrait_DanM.jpg'
import portraitPaul from '../graphics/portrait_PaulM.jpg'
import portraitPierre from '../graphics/portrait_PierreC.jpg'

import './Team.css'

function Team() {
    return (
        <div className='team-container'>
            <h2>Leadership</h2>
            <div className = "team-content-container">
                <TeamCard
                    image = {portraitDan}
                    name = "Daniel McGuire"
                    title = "CEO & Founder"
                    summary = "Daniel’s experience encompasses a broad range of work, from OEM design to ORM, on gas turbines, with a focus on performance and systems engineering, as well as material science, fluid systems, turbomachinery, and heat transfer."
                />
                <TeamCard
                    image = {portraitPierre}
                    name = "Pierre Chenard"
                    title = "COO"
                    summary = "Pierre brings more than 20 years of engineering, operations, and supply chain management experience from international aerospace manufacturing and aircraft engine development organizations ranging from start-up stage to global OEMs."
                />
                <TeamCard
                    image = {portraitPaul}
                    name = "Paul McGuire"
                    title = "CFO"
                    summary = "Paul has more than a decade of experience working in prominent companies in the automotive parts manufacturing sector where he held senior positions in diverse areas including treasury, risk, and customer and supplier management."
                />

            </div>
        </div>
    );
}

export default Team;