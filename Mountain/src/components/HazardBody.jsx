import React from 'react'
import "./components.css"

const HazardBody = () => {
    const hazardCategories = [
        {
            title: "Environmental Hazards",
            hazards: [
                {
                    name: "Avalanches",
                    description: "Caused by heavy snowfall, temperature changes, and weak snow layers. Prevention: Check forecasts, use proper routes, carry avalanche gear.",
                    image: "https://www.nps.gov/common/uploads/structured_data/3C7F522E-1DD8-B71B-0B51D829A3AB909A.jpg"

                },
                {
                    name: "Crevasses & Icefalls",
                    description: "Hidden cracks in glaciers. Prevention: Use rope teams, probe terrain, and learn rescue techniques.",
                    image: "eProjects/Mountain/public/images/alpine.jpg"
                },
                {
                    name: "Rockfalls & Icefalls",
                    description: "Falling debris can cause serious injuries. Prevention: Wear helmets, climb early, avoid unstable terrain.",
                    image: "eProjects/Mountain/public/alpine.jpg"
                },
                {
                    name: "Extreme Weather",
                    description: "High winds, blizzards, and freezing temperatures. Prevention: Check forecasts, have proper gear, turn back if needed.",
                    image: "eProjects/Mountain/public/alpine.jpg"
                },
                {
                    name: "Hypoxia (Low Oxygen)",
                    description: "Altitude sickness from reduced oxygen. Prevention: Acclimatize, hydrate, and use supplemental oxygen if necessary.",
                    image: "eProjects/Mountain/public/alpine.jpg"
                }
            ]
        },
        {
            title: "Health & Physical Hazards",
            hazards: [
                {
                    name: "Altitude Sickness",
                    description: "Headaches, nausea, dizziness. Prevention: Acclimatize, hydrate, and descend if symptoms worsen.",
                    image: "eProjects/Mountain/public/alpine.jpg"
                },
                {
                    name: "Hypothermia & Frostbite",
                    description: "Freezing temperatures can be fatal. Prevention: Wear insulated clothing, stay dry, and avoid long exposure.",
                    image: "eProjects/Mountain/public/alpine.jpg"
                },
                {
                    name: "Dehydration & Exhaustion",
                    description: "Lack of water and energy affects decisions. Prevention: Stay hydrated, eat well, and pace yourself.",
                    image: "eProjects/Mountain/public/alpine.jpg"
                },
                {
                    name: "Falls & Slips",
                    description: "Losing grip on ice or rock can be fatal. Prevention: Use ropes, harnesses, and proper technique.",
                    image: "eProjects/Mountain/public/alpine.jpg"
                }
            ]
        }
    ];

    const safetyTips = [
        "Train & Gain Experience – Practice techniques, rescue skills, and survival strategies.",
        "Check Weather & Route Conditions – Research forecasts and trail updates.",
        "Climb with a Team – Solo climbing increases risk; climbing with a team adds safety.",
        "Carry Emergency Gear – First-aid kits, GPS, satellite phones, extra food, and clothing.",
        "Know When to Turn Back – The mountain will always be there, but your life is irreplaceable."
    ];

    return (
        <section className="hazards-section">
            <div className="hazards-header">
                <h2>Hazards in Mountaineering</h2>
                <p>Mountaineering is adventurous but risky. Climbers face natural and human hazards requiring skill, preparation, and awareness.</p>
            </div>

            {hazardCategories.map((category, index) => (
                <div key={index} className="hazard-category">
                    <h3>{category.title}</h3>
                    <div className="hazard-grid">
                        {category.hazards.map((hazard, idx) => (
                            <div key={idx} className="hazard-card">
                                <img src={hazard.image} alt={hazard.name} className="hazard-image" />
                                <h4>{hazard.name}</h4>
                                <p>{hazard.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="safety-tips">
                <h3>How to Reduce Risks in Mountaineering</h3>
                <ul>
                    {safetyTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default HazardBody
