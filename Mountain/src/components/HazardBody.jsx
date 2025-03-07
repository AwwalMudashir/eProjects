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
                    image: "https://img.freepik.com/free-photo/beautiful-wide-shot-mountains-covered-snow-foggy-sky_181624-5472.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"

                },
                {
                    name: "Crevasses & Icefalls",
                    description: "Hidden cracks in glaciers. Prevention: Use rope teams, probe terrain, and learn rescue techniques.",
                    image: "https://img.freepik.com/free-photo/landscape-photo-snowy-mountains-cloudy-sky-daytime_406225-30.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
                },
                {
                    name: "Rockfalls & Icefalls",
                    description: "Falling debris can cause serious injuries. Prevention: Wear helmets, climb early, avoid unstable terrain.",
                    image: "https://img.freepik.com/free-photo/waterfalls-flowing-down-snows_406225-89.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
                },
                {
                    name: "Extreme Weather",
                    description: "High winds, blizzards, and freezing temperatures. Prevention: Check forecasts, have proper gear, turn back if needed.",
                    image: "https://img.freepik.com/free-photo/weather-effects-collage-concept_23-2150062081.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
                },
                {
                    name: "Hypoxia (Low Oxygen)",
                    description: "Altitude sickness from reduced oxygen. Prevention: Acclimatize, hydrate, and use supplemental oxygen if necessary.",
                    image: "https://img.freepik.com/free-photo/photo-relaxed-man-with-short-hair-dark-skin-sits-highway-with-bottle-cold-water-wears-tracksuit-focused-aside-enjoys-spare-time-mountain-view-rests-after-workout-fitness-exercising_273609-29703.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
                }
            ]
        },
        {
            title: "Health & Physical Hazards",
            hazards: [
                {
                    name: "Altitude Sickness",
                    description: "Headaches, nausea, dizziness. Prevention: Acclimatize, hydrate, and descend if symptoms worsen.",
                    image: "https://img.freepik.com/free-photo/high-angle-man-traveling-with-backpack_23-2148749353.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
                },
                {
                    name: "Hypothermia & Frostbite",
                    description: "Freezing temperatures can be fatal. Prevention: Wear insulated clothing, stay dry, and avoid long exposure.",
                    image: "https://img.freepik.com/free-photo/man-holding-snow-shovel-ski-resort_107420-96228.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
                },
                {
                    name: "Dehydration & Exhaustion",
                    description: "Lack of water and energy affects decisions. Prevention: Stay hydrated, eat well, and pace yourself.",
                    image: "https://img.freepik.com/free-photo/man-sportswear-holding-bottle-water_23-2149063663.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
                },
                {
                    name: "Falls & Slips",
                    description: "Losing grip on ice or rock can be fatal. Prevention: Use ropes, harnesses, and proper technique.",
                    image: "https://img.freepik.com/free-photo/tourists-walks-through-woods_72229-5.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
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
        <section className="hazards-section ">
            <div className="hazards-header">
                <h2>Risky Mountaineering</h2>
                <p>Mountaineering is risky, with hazards like avalanches, rockfalls, and crevasses posing serious threats. Extreme weather, altitude sickness, and hypothermia can be life-threatening. Poor planning, fatigue, and equipment failure increase dangers. Proper training, gear, and awareness are crucial to reducing risks and ensuring safety in the mountains</p>
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


            <div className="safety-tips-container">
            <div className="safety">
                <img src="https://img.freepik.com/free-photo/hiker-rocks-near-river_23-2147683048.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid" alt="" />
            </div>
            <div className="safety-tips">
                <h3>How to Reduce Risks in Mountaineering</h3>
                <ul>
                    {safetyTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
            </div>
        </section>
    );
}

export default HazardBody
