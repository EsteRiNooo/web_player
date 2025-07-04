import React from 'react'

const Controls = ({ isPlaying, onPlayPause }) => {
  return (
    <div className="controls">
      <button
        onClick={onPlayPause}
        className="text-white text-xl bg-white/10 hover:bg-white/20 rounded p-2"
      >
        {isPlaying ? '⏸' : '▶️'}
      </button>
    </div>
  )
}

export default Controls
