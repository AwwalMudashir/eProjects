import React, { useRef, useState } from "react";
import "./components.css"; // External CSS file

const videos1 = [
  { src: "https://player.vimeo.com/external/387850767.sd.mp4", title: "Mountain Adventure" },
  { src: "https://player.vimeo.com/external/396079157.sd.mp4", title: "Hiking in the Wild" },
  { src: "https://player.vimeo.com/external/496296555.sd.mp4", title: "Snow Climbing" },
  { src: "https://player.vimeo.com/external/382476929.sd.mp4", title: "Group Hiking Trip" },
];

const videos2 = [
  { src: "https://ak.picdn.net/shutterstock/videos/3526222359/preview/stock-footage-rock-climber-girl-a-young-and-strong-woman-is-rock-climbing-on-a-rock-sport-and-active-lifestyle.mp4", title: "Rock Climbing" },
  { src: "https://ak.picdn.net/shutterstock/videos/1069056754/preview/stock-footage-winter-walk-in-the-snow-outdoor-walking-workouts-winte-walking-close-up-view-of-shoes-walking-on.mp4", title: "Snow Expedition" },
  { src: "https://videocdn.cdnpk.net/videos/eb8804c7-cc09-5101-bee9-66dd65c66aa4/horizontal/previews/clear/small.mp4?token=exp=1741468325~hmac=cf409d09f9603cfd4268f2a602ebf3f7ba5722d15f2d74fa9607ab2b229862bb", title: "Trail Running" },
  { src: "https://videocdn.cdnpk.net/videos/986e6fab-7b35-4f7a-84ec-c2b65711e80e/horizontal/previews/clear/small.mp4?token=exp=1741468276~hmac=2ac4fa91d5b0e2f7e9a89ac2499c6dcb8c545a8df8a5e97799ef9671ed580f89", title: "Sunset Hiking" },
];

const GalleryVideos = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <div className="gallery-container scroll-element">
      {/* First Row */}
      <div className="gallery-row">
        <video className="main-video" src="https://videocdn.cdnpk.net/videos/47818344-922c-5608-9f7a-5594e84a88cb/vertical/previews/clear/small.mp4?token=exp=1741468325~hmac=7f0a24ae84f9eeb332249626e319340e7c6a9b354e893491cbe627fa9bb17822" muted></video>
        <div className="grid-container">
          {videos1.map((video, index) => (
            <div key={index} className="video-wrapper scroll-element">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="grid-video"
                src={video.src}
                muted
              ></video>
              <div
                className={`overlay ${playingIndex === index ? "hidden" : ""} scroll-element`}
                onClick={() => handlePlayPause(index)}
              >
                <button className="play-button">▶</button>
                <p className="video-title">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row (Flipped Layout) */}
      <div className="gallery-row reverse">
        <video className="main-video" src="https://videocdn.cdnpk.net/videos/d46cb866-b061-5ff6-9cad-b42533303065/vertical/previews/clear/small.mp4?token=exp=1741468325~hmac=c84cc9f1ad443e3c91fe10af080970c3a5f25065923f45634423f7be247fa16d" muted></video>
        <div className="grid-container">
          {videos2.map((video, index) => (
            <div key={index} className="video-wrapper scroll-element">
              <video
                ref={(el) => (videoRefs.current[index + 4] = el)}
                className="grid-video"
                src={video.src}
                muted
              ></video>
              <div
                className={`overlay ${playingIndex === index + 4 ? "hidden" : ""}`}
                onClick={() => handlePlayPause(index + 4)}
              >
                <button className="play-button">▶</button>
                <p className="video-title">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryVideos;
