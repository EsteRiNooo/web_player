import React from 'react'

const FullscreenButton = ({ isFullscreen, toggleFullscreen }) => {
  return (
    <button
      onClick={toggleFullscreen}
      className="text-white text-xl bg-white/10 hover:bg-white/20 rounded p-2"
    >
      {isFullscreen ? '🡼🡾' : '🡽🡽'}
    </button>
  )
}

export default FullscreenButton
