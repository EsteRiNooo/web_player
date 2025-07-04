import React from 'react'

const Controls = ({ isPlaying, onPlayPause }) => {
  return (
    <div className="controls">
      <button onClick={onPlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  )
}

export default Controls
