import React from 'react'

const Controls = ({ isPlaying, onPlayPause }) => {
  return (
    <div className="controls flex items-center space-x-4 p-2">
      <button onClick={onPlayPause} className="text-white text-xl">
        {isPlaying ? '⏸' : '▶️'}
      </button>
    </div>
  )
}

export default Controls
