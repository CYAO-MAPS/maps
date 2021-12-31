import React from 'react';
import TeamCard from '../components/TeamCard';
import './Team.css'

function Team() {
    return (
        <div>
            <h2>Team</h2>
            <div className = "team-container">
                <TeamCard
                    image = "https://source.unsplash.com/random/200x300?sig=1"
                    name = "Daniel McGuire"
                    title = "CEO & Founder"
                    summary = "Daniel’s experience encompasses a broad range of work, from OEM design to ORM, on gas turbines, with a focus on performance and systems engineering, as well as material science, fluid systems, turbomachinery, and heat transfer."
                />
                <TeamCard
                    image = "https://source.unsplash.com/random/200x300?sig=2"
                    name = "Paul McGuire"
                    title = "CFO"
                    summary = "Paul has more than a decade of experience working in prominent companies in the automotive parts manufacturing sector where he held senior positions in diverse areas including treasury, risk, and customer and supplier management."
                />
                <TeamCard
                    image = "https://source.unsplash.com/random/200x300?sig=3"
                    name = "Pierre Chenard"
                    title = "Industrialization and Operations"
                    summary = "Pierre brings more than 20 years of engineering, operations, and supply chain management experience from international aerospace manufacturing and aircraft engine development organizations ranging from start-up stage to global OEMs."
                />

            </div>
        </div>
    );
}

export default Team;