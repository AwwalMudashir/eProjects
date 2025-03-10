import React from 'react'
import './components.css'

const HistoryBody = () => {
  return (
    <div className='history-body py-[50px] scroll-element'>
      <div className="h-content">
        <div className="intro-section scroll-element">
          <h1>History of Mountaineering</h1>
          <p>The history of mountaineering dates back centuries, evolving from early religious pilgrimages and scientific exploration to a modern sport that combines adventure, endurance, and technical skill.</p>
        </div>

        <div className="history-container scroll-element">
      <div className="history-image">
        <div className="overlay"></div>
        <img
          src="https://img.freepik.com/free-photo/road-way-spitzkoppe-mountains-spitzkoppe-is-group-bald-granite-peaks-located-swakopmund-namib-desert-namibia_1150-21670.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
          alt="Mountain History"
        />
      </div>
      <div className="history-content">
        <h2>EARLY MOUNTAINEERING (PRE-18TH CENTURY)</h2>
        <p>
          Ancient Times: People climbed mountains for religious, spiritual, or
          survival reasons. For example, Mount Olympus in Greece was believed
          to be the home of the gods.
        </p>
        <p>
          First Recorded Ascent (1492): French climber Antoine de Ville scaled
          Mont Aiguille in the Alps by order of King Charles VIII, marking one
          of the first technical climbs.
        </p>
        <p>
          Scientific Exploration (16th–18th Century): Scientists climbed
          mountains to study geology, weather, and altitude effects. In 1786,
          Jacques Balmat and Michel-Gabriel Paccard made the first successful
          ascent of Mont Blanc (4,808m), the highest peak in the Alps, marking
          the birth of modern mountaineering.
        </p>
        <div className="history-year">1492</div>
      </div>
        </div>
        <div className="history-container reverse scroll-element">
      <div className="history-image">
        <div className="overlay"></div>
        <img
          src="https://img.freepik.com/free-photo/landscape-lake-pukaki-pukaki-new-zealand-surrounded-with-snowy-mountains_181624-26720.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
          alt="Mountain History"
        />
      </div>
      <div className="history-content">
        <h2>THE GOLDEN AGE OF MOUNTAINEERING (1850-1900)</h2>
        <p>
        The mid-19th century saw a surge in interest in climbing, especially in the Alps, driven by British climbers like Edward Whymper, who made the first ascent of the Matterhorn (1865).
        </p>
        <p>
        The Alpine Club (founded in 1857 in the UK) was the first official mountaineering organization.
        </p>
        <div className="history-year">1850</div>
      </div>
        </div>
        <div className="history-container scroll-element">
      <div className="history-image">
        <div className="overlay"></div>
        <img
          src="https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
          alt="Mountain History"
        />
      </div>
      <div className="history-content">
        <h2>HIMALAYAN EXPEDITIONS AND HIGH-ALTITUDE MOUNTAINEERING (1900-1950)</h2>
        <p>
      
Mountaineers shifted focus from the Alps to the Himalayas.
In 1924, British climbers George Mallory and Andrew Irvine attempted to summit Mount Everest but disappeared near the summit, leaving their success uncertain.

        </p>
        <p>
        On May 29, 1953, Sir Edmund Hillary (New Zealand) and Tenzing Norgay (Nepal) became the first confirmed climbers to reach the summit of Mount Everest (8,848m).
        </p>

        <div className="history-year">1900</div>
      </div>
        </div>
        <div className="history-container reverse scroll-element">
      <div className="history-image">
        <div className="overlay"></div>
        <img
          src="https://img.freepik.com/free-photo/beautiful-shot-snowy-mountain-sunset_181624-37878.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
          alt="Mountain History"
        />
      </div>
      <div className="history-content">
        <h2>MODERN MOUNTAINEERING (1950 -  PRESENT)</h2>
        <p>
        The 1950s-1970s saw the first ascents of all 14 of the world's 8,000-meter peaks, starting with Annapurna (1950) and ending with Shishapangma (1964).
        </p>
        <p>
        The 1980s introduced lightweight, alpine-style climbing, avoiding the traditional siege-style expeditions.
        </p>
        <p>
        Today, mountaineering has become more commercialized, with guided expeditions allowing many non-professional climbers to summit major peaks like Everest.
Advances in gear, weather forecasting, and rescue techniques have improved safety, though challenges like climate change and overcrowding persist.

        </p>
        <div className="history-year">1950</div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryBody
