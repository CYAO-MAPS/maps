import React from 'react';
import './TeamCard.css'

function TeamCard({image, name, title, summary, text}) {
    return (
        <div className = "teamcard-container">
            <img src={image}/>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{summary}</p>
        </div>
    );
}

export default TeamCard;