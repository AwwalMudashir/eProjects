import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'

const HazardShelter = () => {
  return (
    <div className="s-homepage scroll-element">
      {/* Hazards Section */}
      <div className="s-section s-hazards">
      <img src='https://img.freepik.com/free-photo/hiker-rocks-near-river_23-2147683048.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid' alt="Hazards of Mountaineering" className="s-image1 it" />
        <div className="s-text s-bg">
          <h2>Hazards of Mountaineering</h2>
          <p>
            Mountaineering presents significant risks, including avalanches,
            altitude sickness, and unpredictable weather. Climbers must prepare
            for extreme cold, falling rocks, and exhaustion. Proper training and
            equipment are essential for survival.
          </p>
          
          <Link to={'/hazards-sheltering'} >
          <button className="s-learn-more">Learn More</button>
          </Link>
        </div>
        <img src='https://img.freepik.com/free-photo/hiker-rocks-near-river_23-2147683048.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid' alt="Hazards of Mountaineering" className="s-image ot" />
      </div>

      {/* Sheltering Section */}
      <div className="s-section s-sheltering">
        <img src="https://img.freepik.com/free-photo/medium-shot-couple-putting-up-green-tent_23-2148456467.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid" alt="Sheltering Methods" className="s-image" />
        <div className="s-text s-bg">
          <h2>Ways of Sheltering</h2>
          <p>
            Mountaineers use various shelters like tents, bivy sacks, and snow
            caves for survival. Choosing the right shelter depends on weather,
            altitude, and expedition duration. Emergency shelters like bothies
            and tarps provide protection in extreme conditions.
          </p>
          <button className="s-learn-more">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default HazardShelter
