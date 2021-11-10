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
                    summary = "Nam ut justo placerat, eleifend sem at, finibus velit."
                />
                <TeamCard
                    image = "https://source.unsplash.com/random/200x300?sig=2"
                    name = "Paul McGuire"
                    title = "CFO"
                    summary = "Nam ut justo placerat, eleifend sem at, finibus velit."
                />
                <TeamCard
                    image = "https://source.unsplash.com/random/200x300?sig=3"
                    name = "Pierre Chenard"
                    title = "Industrialization and Operations"
                    summary = "Nam ut justo placerat, eleifend sem at, finibus velit."
                />

            </div>
        </div>
    );
}

export default Team;