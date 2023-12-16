'use client'

import './Header.scss'

function LayoutsHeader() {
  return (
    <header id="layouts-header">
      <div className="header-video-container">
        <video
          className="header-video-content"
          src="/videos/header-720p.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="header-text-content">
        <h1>We are a professional full stack web agency</h1>
        <p>As well as being game-changers when it TVP Projects</p>
      </div>
    </header>
  )
}

export default LayoutsHeader
