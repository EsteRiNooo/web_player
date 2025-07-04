import React from 'react'

const FullscreenButton = ({ isFullscreen, toggleFullscreen }) => {
  return (
    <button onClick={toggleFullscreen} className="text-white text-xl">
      {isFullscreen ? '🡼🡾' : '🡽🡽'}
    </button>
  )
}

export default FullscreenButton
