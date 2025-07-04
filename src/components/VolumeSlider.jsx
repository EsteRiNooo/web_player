import React from 'react'

const VolumeSlider = ({ value, onChange }) => {
  return (
    <div className="volume-slider">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-32"
      />
    </div>
  )
}

export default VolumeSlider
