import React, { useState } from 'react'
import GalleryImages from '../components/GalleryImages'
import GalleryIntro from '../components/GalleryIntro'
import '../components/components.css'
import GalleryVideos from '../components/GalleryVideos'

const Gallery = () => {
  const [activeTab,setActiveTab] = useState("photos")
  return (
    <div>
      <GalleryIntro/>
      <div className="mb-8 w-[100%] options">
          <button
            className={` ${
              activeTab === "photos" ? "bb" : ""
            }`}
            onClick={() => setActiveTab("photos")}
          >
            Photos
          </button>
          <button
            className={`${
              activeTab === "videos" ? "bb" : ""
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>

        {
          activeTab === "photos" 
          ?
          <GalleryImages/>
          :
          <GalleryVideos/>
        }
    </div>
  )
}

export default Gallery
