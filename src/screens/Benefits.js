import React from 'react';
import BenefitsCard from '../components/BenefitsCard';
import './Benefits.css'

function Benefits() {
    return (
        <div>
            <h2>Benefits</h2>
            <div className = "benefits-container">
                <BenefitsCard
                    image = "https://source.unsplash.com/random/400x300?sig=2"
                    title = "Lower Energy Costs"
                    summary = "Nam ut justo placerat, eleifend sem at, finibus velit."
                />
                <BenefitsCard
                    image = "https://source.unsplash.com/random/400x300?sig=3"
                    title = "Zero Upfront Capital Cost"
                    summary = "Nam ut justo placerat, eleifend sem at, finibus velit."
                />
                <BenefitsCard
                    image = "https://source.unsplash.com/random/400x300?sig=4"
                    title = "Service Business Model"
                    summary = "Nam ut justo placerat, eleifend sem at, finibus velit."
                />
                <BenefitsCard
                    image = "https://source.unsplash.com/random/400x300?sig=5"
                    title = "Fuel Flexible"
                    summary = "Nam ut justo placerat, eleifend sem at, finibus velit."
                />
            </div>
        </div>
    );
}

export default Benefits;